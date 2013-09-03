<html>
<head>
<title>Taian Policy Database - Reminders</title>
</head>

<body>
<a href=".">Back to main page.</a><br /><br />

<?php
require_once('db.php');

function siblings($dbhandle, $individual) {
    $siblings = array();

    # Find my email addresses based on what's in primary_email_address, other_email_address, and email addresses for my certificate_number
    $emailAddressMap = array();

    $emailAddressKeys = array("primary_email_address", "other_email_address");
    foreach ($emailAddressKeys as $key) {
        $addy = $individual[$key];

        if (strlen($addy)) {
            $emailAddressMap[$addy] = 1;
        }
    }

    # Make sure we have our email addresses (group policies have the contact info on a separate row)
    $myCertNumber = $individual["certificate_number"];
    if (strlen($myCertNumber)) {
        $query = "select primary_email_address, other_email_address from policy where certificate_number = \"$myCertNumber\"";

        $result = sqlite_query($dbhandle, $query, $error);
        if (!$result) {
            echo "Cannot execute individual email query $error.";
        } else {
            while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                foreach ($emailAddressKeys as $key) {
                    $addy = $row[$key];

                    if (strlen($addy)) {
                        $emailAddressMap[$addy] = 1;
                    }
                }
            }
        }
    }

    # Get other certificate_numbers that match my name then filter them by my email address
    $myName = $individual["insured_name"];
    if (strlen($myName)) {
        $query = "select certificate_number from policy where insured_name = \"$myName\"";

        $potentialCertNumbers = array();

        $result = sqlite_query($dbhandle, $query, $error);
        if (!$result) {
            echo "Cannot execute individual peer cert number query $error.";
        } else {
            while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                if (strlen($row["certificate_number"])) {
                    array_push($potentialCertNumbers, $row["certificate_number"]);
                }
            }
        }

        $actualCertNumbers = array();

        if ((count($potentialCertNumbers) > 0) && (count(array_keys($emailAddressMap)) > 0)) {
            $certNumbers = "\"" . implode("\",\"", $potentialCertNumbers) . "\"";
            $emailAddresses = "\"" . implode("\",\"", array_keys($emailAddressMap)) . "\"";
            $query = "select certificate_number from policy where certificate_number in ($certNumbers) and ( (primary_email_address in ($emailAddresses)) or (other_email_address in ($emailAddresses)) )";

            $result = sqlite_query($dbhandle, $query, $error);
            if (!$result) {
                echo "Cannot execute individual peer cert number query $error.";
            } else {
                while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                    if (strlen($row["certificate_number"])) {
                        array_push($actualCertNumbers, $row["certificate_number"]);
                    }
                }
            }
        }
        # given the actualCertNumbers, find the rows with that cert number and insured_name
        if (count($actualCertNumbers) > 0) {
            $actualCertNumbersString = "\"" . implode("\",\"", $actualCertNumbers) . "\"";
            $query = "select rowid, expiration_date_fmt, effective_date_fmt, julianday(effective_date_fmt), last_reminder_date_fmt, certificate_number, certificate_status, primary_insured_name, insured_name, primary_email_address, other_email_address from policy where certificate_number in ($actualCertNumbersString) and insured_name = \"$myName\" and rowid != ".$individual["rowid"];

            $result = sqlite_query($dbhandle, $query, $error);
            if (!$result) {
                echo "Cannot execute individual sibling query $error.";
            } else {
                while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                    array_push($siblings, $row);
                }
            }
        }
    }

    return $siblings;
}

$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
if (!$dbhandle) die ($error);

// People who need emails:
// These are the people who will be expired between 20 days prior to today and 10 days from now (or before) who have:
// - Never been reminded
// OR
//   - They haven't been reminded since before the day before expiration
//   AND
//   - They've gotten a reminder and today is later than the day before expiration
$soonToExpireQuery = "select distinct rowid, expiration_date_fmt, effective_date_fmt, julianday(effective_date_fmt), last_reminder_date_fmt, certificate_number, certificate_status, primary_insured_name, insured_name, primary_email_address, other_email_address from policy where julianday(expiration_date_fmt) >= julianday(\"now\", \"-20 days\") and julianday(expiration_date_fmt) <= julianday(\"now\", \"+10 days\") and ( (last_reminder_date_fmt IS NULL) or (length(last_reminder_date_fmt) = 0) or ( (julianday(last_reminder_date_fmt) < julianday(expiration_date_fmt, \"-1 day\")) AND (julianday(\"now\") >= julianday(expiration_date_fmt, \"-1 day\"))  )   )";

$result = sqlite_query($dbhandle, $soonToExpireQuery, $error);
if (!$result) {
    echo "Cannot execute query $error.";
    return;
}

$allResults = array();
while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
    array_push($allResults, $row);
}


echo "There are about " . count($allResults) . " policies to process.<br />";

# Prune ones that are no longer relevant - "CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED", "PENDNG RENEWAL"
$pruneStatuses = array("CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED", "PENDNG RENEWAL");
foreach ($allResults as $key=>$value) {
    if (in_array($value["certificate_status"], $pruneStatuses)) {
        unset($allResults[$key]);
    }
}

echo "After pruning by certificate status, there are about " . count($allResults) . " policies to process.<br />";

# Prune rows that lack an insured_name. These are group policy contact info rows.

foreach ($allResults as $key=>$value) {
    if (!strlen($value["insured_name"])) {
        unset($allResults[$key]);
    }
}

echo "After pruning by insured name, there are about " . count($allResults) . " policies to process.<br />";

# Prune ones with a newer effective date for the same person - find the siblings and check their effective date.
# To improve performance, I can find the first non-nuked entry in $allResults and then only bother with other entries on the same certificate number
foreach ($allResults as $key=>$value) {
    # Find the siblings
    $siblings = siblings($dbhandle, $value);

    #echo "Siblings: <br />" . array2table($siblings);

    $epsilon = 0.0001;

    $effectiveDateKey = "julianday(effective_date_fmt)";
    $myEffectiveDate = floatval($value[$effectiveDateKey]);
    $myRowID = intval($value["rowid"]);

    # Check sibling effective dates, unset us if any sibling has a higher one
    foreach ($siblings as $sibling) {
        $sibEffectiveDate = floatval($sibling[$effectiveDateKey]);
        $sibRowID = intval($sibling["rowid"]);

        #echo "Comparing $sibEffectiveDate to $myEffectiveDate<br />";

        if (abs($myEffectiveDate - $sibEffectiveDate) < $epsilon) {
            # See if the sibling is dead policy
            if (in_array($sibling["certificate_status"], $pruneStatuses)) {
                # The sibling is a dead policy... is it newer or older than us based on rowid?
                if ($sibRowID > $myRowID) {
                    # Sibling is newer, nuke us.
                    unset($allResults[$key]);
                    break;
                } else {
                    # Sibling is older, ignore it.
                }
            } else {
                # Both my sibling and I are active policies.
                if (strlen($value["last_reminder_date_fmt"]) > 0) {
                    # My row has been used for reminder emails, ignore sibling
                } elseif (strlen($sibling["last_reminder_date_fmt"]) > 0) {
                    # Sibling has been used for reminder emails, nuke me
                    unset($allResults[$key]);
                    break;
                } else {
                    # Neither of us has been used for reminders. Use the most recent rowid.
                    if ($sibRowID > $myRowID) {
                        # Sibling is newer, nuke us.
                        unset($allResults[$key]);
                        break;
                    } else {
                        # Sibling is older, ignore it.
                    }
                }
            }
        } elseif ($sibEffectiveDate < $myEffectiveDate) {
            # Ignore the sibling, my effective date is newer.
        } else {
            # The sibling has a newer effective date, nuke my entry.
            unset($allResults[$key]);
            break;
        }
    }
}

echo "After pruning by equivalent updated policies, there are about " . count($allResults) . " policies to process.<br />";

reset($allResults); # Reset internal next pointer since we've removed some elements
$firstKey = key($allResults);

# Find any others with the same certificate number
# Find all other policies in our results with the same certificate number, then find all of their siblings

# Be able to get the email addresses out of siblings call.

echo "<br />";

$policy = $allResults[$firstKey];
$siblings = siblings($policy);
if (count($siblings) > 0) {
    echo "Previous history: <br />";
    echo array2table(siblings($policy));
}
echo "Policy due for a reminder:<br />";
echo array2table(array($policy));

# Go one at a time?
# How to mark an entry as processed? Just set the date on it?

sqlite_close($dbhandle);

?>

</body>
</html>
