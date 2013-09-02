<html>
<head>
<title>Taian Policy Database - Reminders</title>
</head>

<body>
<a href=".">Back to main page.</a><br /><br />

<?php
require_once('db.php');

function siblings($dbhandle, $individual) {
    # Find my email addresses based on what's in primary_email_address, other_email_address, and email addresses for my certificate_number

    # Get other certificate_numbers based on my email addresses and insured_name -- note that certificate_numbers for groups will have the email address but not the name on the same row...

    return array();
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
$soonToExpireQuery = "select distinct expiration_date_fmt, effective_date_fmt, julianday(effective_date_fmt), certificate_number, certificate_status, primary_insured_name, insured_name, primary_email_address, other_email_address from policy where julianday(expiration_date_fmt) >= julianday(\"now\", \"-20 days\") and julianday(expiration_date_fmt) <= julianday(\"now\", \"+10 days\") and ( (last_reminder_date_fmt IS NULL) or (length(last_reminder_date_fmt) = 0) or ( (julianday(last_reminder_date_fmt) < julianday(expiration_date_fmt, \"-1 day\")) AND (julianday(\"now\") >= julianday(expiration_date_fmt, \"-1 day\"))  )   )";

$result = sqlite_query($dbhandle, $soonToExpireQuery, $error);
if (!$result) {
    echo "Cannot execute query $error.";
    return;
}

$allResults = array();
while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
    array_push($allResults, $row);
}


echo "There are about " . count($allResults) . " policies to process.<br /><br />";

# Prune ones that are no longer relevant - "CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED"
# What to do about "PENDNG RENEWAL"?
$pruneStatuses = array("CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED");
foreach ($allResults as $key=>$value) {
    if (in_array($value["certificate_status"], $pruneStatuses)) {
        unset($allResults[$key]);
    }
}

echo "After pruning by certificate status, there are about " . count($allResults) . " policies to process.<br /><br />";


# Prune ones with a newer effective date for the same person - find the siblings and check their effective date.
foreach ($allResults as $key=>$value) {
    # Find the siblings
    $siblings = siblings($dbhandle, $value);

    # Check sibling effective dates, unset us if any sibling has a higher one
    foreach ($siblings as $sibling) {
        $effectiveDateKey = "julianday(effective_date_fmt)";
        echo "Comparing " .floatval($sibling[$effectiveDateKey]) . " to " . floatval($value[$effectiveDateKey]) . "<br />";
        if (floatval($sibling[$effectiveDateKey]) > floatval($value[$effectiveDateKey])) {
            unset($allResults[$key]);
            break;
        }
    }
}


reset($allResults); # Reset internal next pointer since we've removed some elements
$firstKey = key($allResults);

# Find any others with the same certificate number

echo array2table(array($allResults[$firstKey]));

# Go one at a time?
# How to mark an entry as processed? Just set the date on it?

sqlite_close($dbhandle);

?>

</body>
</html>
