<html>
<head>
<title>Taian Policy Database</title>
</head>

<body>

<?php

require_once('db.php');

set_time_limit(0);

function sqlDateFromString($stringDate) {
    # These dates look like this: 24-Aug-2013

    # We can convert this to julianday('YYYY-MM-DD')
    $components = explode("-", $stringDate);
    $day = $components[0];
    if (strlen($day) < 2) {
        $day = "0" . $day;
    }

    $year = $components[2];

    $monthName = $components[1];
    $month = "";
    if (startsWith($monthName, "Jan")) {
        $month = "01";
    } elseif (startsWith($monthName, "Feb")) {
        $month = "02";
    } elseif (startsWith($monthName, "Mar")) {
        $month = "03";
    } elseif (startsWith($monthName, "Apr")) {
        $month = "04";
    } elseif (startsWith($monthName, "May")) {
        $month = "05";
    } elseif (startsWith($monthName, "Jun")) {
        $month = "06";
    } elseif (startsWith($monthName, "Jul")) {
        $month = "07";
    } elseif (startsWith($monthName, "Aug")) {
        $month = "08";
    } elseif (startsWith($monthName, "Sep")) {
        $month = "09";
    } elseif (startsWith($monthName, "Oct")) {
        $month = "10";
    } elseif (startsWith($monthName, "Nov")) {
        $month = "11";
    } elseif (startsWith($monthName, "Dec")) {
        $month = "12";
    }

    if (strlen($month) == 0) {
        return "";
    } else {
        return sqlite_escape_string("$year-$month-$day");
    }
}

function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}

function printImportForms() {
    echo <<<END
<form name="importform" action="index.php" method="post">
    IMG CSV spreadsheet:<br />
<textarea name="tabbeddata" rows="20" cols="120">
</textarea><br />
<!--
    IMG Policy Email:<br />
<textarea name="emailbody" rows="20" cols="120">
</textarea><br />

-->
<input type="submit" value="Submit">
</form>

END;
}

function writeTextInput($label, $name, $value) {
    echo "$label: <input type=\"text\" name=\"$name\" value=\"$value\"><br />\n";
}

function writeIndividual($index, $individual) {
    echo "Individual<br />\n";

    foreach ($individual as $key => $value) {
        $formInputName = "";

        if (startsWith($key, "Insured Person(s)")) {
            $formInputName = "name";
        } elseif (startsWith($key, "Insured ID")) {
            $formInputName = "insuredID";
        } elseif (startsWith($key, "Effective Date")) {
            $formInputName = "effectiveDate";
        } elseif (startsWith($key, "Expiration Date")) {
            $formInputName = "expirationDate";
        } elseif (startsWith($key, "Premium")) {
            $formInputName = "premium";
        } elseif (startsWith($key, "Date of Birth")) {
            $formInputName = "dateOfBirth";
        }

        if (strlen($formInputName) > 0) {
            writeTextInput($key, "individual_" . $index . "_" . $formInputName, $value);
        }
    }

    echo "<br /><br />\n";
}

function remove_utf8_bom($text)
{
    $bom = pack('H*','EFBBBF');
    $text = preg_replace("/^$bom/", '', $text);
    return $text;
}


$emailbody = $_POST['emailbody'];
$tabbedData = $_POST['tabbeddata'];
if (is_null($tabbedData) && $_GET['readFromDisk']) {
    # Try to read it from disk
    $tabbedData = file_get_contents("/home1/taianfin/data.csv");
    $tabbedData = remove_utf8_bom($tabbedData);
}

if (!is_null($emailbody)) {
    #echo "Found email body: $emailbody<br />";

    $certificateNumber = "";
    $productType = "";
    $effectiveDateStr = "";
    $expirationDateStr = "";
    $deductible = "";
    $maxLimit = "";
    $certificateType = "";
    $premium = "";
    $groupName = "";
    $mailingAddress = "";
    $phone = "";

    $parsingIndividuals = false;
    $individualColumnNames = null;
    $individuals = array();

    $lines = explode("\n", $emailbody);
    foreach ($lines as $line) {
      #  echo "Line: $line<br />";
        $tokens = explode("\t", $line);
      #  foreach ($tokens as $token) {
      #      echo "    token \"$token\"<br />";
      #  }

        if (startsWith($line, "Mailing Address:")) {
            $parsingIndividuals = false;
        }

        if (!$parsingIndividuals) {
            if (startsWith($line, "Certificate Number:")) {
                $certificateNumber = trim($tokens[1]);
            } elseif (startsWith($line, "Product Type:")) {
                $productType = trim($tokens[1]);
            } elseif (startsWith($line, "Effective Date:")) {
                $effectiveDateStr = trim($tokens[1]);
            } elseif (startsWith($line, "Expiration Date:")) {
                $expirationDateStr = trim($tokens[1]);
            } elseif (startsWith($line, "Deductible:")) {
                $deductible = trim($tokens[1]);
            } elseif (startsWith($line, "Maximum Limit:")) {
                $maxLimit = trim($tokens[1]);
            } elseif (startsWith($line, "Certificate Type:")) {
                $certificateType = trim($tokens[1]);
            } elseif (startsWith($line, "Premium:") || startsWith($line, "Total Premium:")) {
                $premium = trim($tokens[1]);
            } elseif (startsWith($line, "Group Name:")) {
                $groupName = trim($tokens[1]);
            } elseif (startsWith($line, "Mailing Address:")) {
                $mailingAddress = trim($tokens[1]);
            } elseif (startsWith($line, "Phone:")) {
                $phone = trim($tokens[1]);
            } elseif (startsWith($line, "Insured Person(s)")) {
                $individualColumnNames = array();

                foreach ($tokens as $token) {
                    if (strlen(trim($token)) > 0) {
                        array_push($individualColumnNames, $token);
                    } else {
                        break;
                    }
                }

                $parsingIndividuals = true;
            }
        } else {
            if (strlen(trim($line)) <= 0) {
                $parsingIndividuals = false;
            } else {
                $numCols = count($individualColumnNames);
                $individCount = count($individuals);
                $individual = array();
                for ($i = 0; $i < $numCols; $i++) {
                    $individual[$individualColumnNames[$i]] = $tokens[$i];
                   # echo "Setting individual $individCount's ".$individualColumnNames[$i]." to ".$tokens[$i]."<br />";
                }
                array_push($individuals, $individual);
            }
        }
    }

    echo "<form name=\"parsedInfoForm\" action=\"index.php\" method=\"post\">";
    echo "<input type=\"hidden\" name=\"originalemail\" value=\"$emailbody\">";
    # These are global attributes:
    writeTextInput("Certificate Number", "certificateNumber", $certificateNumber);
    writeTextInput("Product Type", "productType", $productType);
    writeTextInput("Group Name", "groupName", $groupName);
    writeTextInput("Effective Date", "effectiveDateStr", $effectiveDateStr);
    writeTextInput("Expiration Date", "expirationDateStr", $expirationDateStr);
    writeTextInput("Deductible", "deductible", $deductible);
    writeTextInput("Maximum Limit", "maxLimit", $maxLimit);
    writeTextInput("Certificate Type", "certificateType", $certificateType);
    writeTextInput("Premium", "premium", $premium);
    writeTextInput("Mailing Address", "mailingAddress", $mailingAddress);
    writeTextInput("Phone", "phone", $phone);

    echo "<br /><br />";

    # These are individual attributes:
    $individCount = count($individuals);
    for ($i = 0; $i < $individCount; $i++) {
        $individual = $individuals[$i];
        writeIndividual($i, $individual);
    }

    # One last global attribute:
    writeTextInput("Email Address", "emailAddress", "");

    echo "<input type=\"submit\" value=\"Submit\">";
    echo "</form>";
} elseif (!is_null($_POST['originalemail'])) {

    # parse individual_x_vvvvvv out and put them into nested dictionaries
    # go over the individuals parsed out and put them each in the database


} elseif (!is_null($tabbedData)) {
    echo "<a href=\".\">Back to main page.</a><br />";
    echo "<a href=\"./index.php?readFromDisk=1\">Read CSV from server disk.</a><br />";
    echo "<a href=\"./reminders.php?slow=1\">Precompute then process reminder emails.</a><br />";
    echo "<a href=\"./reminders.php\">Process reminder emails.</a><br />";

    # Split by (dos) lines
    $lines = explode("\r\n", $tabbedData);
    echo "There are " . count($lines) . " lines.<br />";

    
    $colMap = array (
        "Purchase Date" => "purchase_date",
        "Producer Number" => "producer_number",
        "Product Type" => "product_type",
        "Certificate Type" => "certificate_type",
        "Certificate Number" => "certificate_number",
        "Primary Insured Name" => "primary_insured_name",
        "Government Issued ID Number" => "government_issued_id_number",
        "Government Issued Id Number" => "government_issued_id_number",        
        "Group Name" => "group_name",
        "Effective Date" => "effective_date",
        "Premium" => "premium",
        "Currency" => "currency",
        "Pay Frequency" => "pay_frequency",
        "Certificate Status" => "certificate_status",
        "Renewal" => "renewal",
        "T.R.I.P. Lite" => "trip_lite",
        "Trip Lite" => "trip_lite",        
        "Pri/Dep" => "pri_dep",
        "Primary Dependent" => "pri_dep",        
        "User Defined Variable" => "user_defined_variable",
        "Uservar" => "user_defined_variable",        
        "Application Type" => "application_type",
        "Insured ID" => "insured_id",
        "Insured Id" => "insured_id",        
        "Insured Name" => "insured_name",
        "Date Of Birth" => "date_of_birth",
        "Gender" => "gender",
        "Citizenship" => "citizenship",
        "Home Country" => "home_country",
        "Primary Destination" => "primary_destination",
        "Current Carrier Information" => "current_carrier_information",
        "Other Email Address" => "other_email_address",  
        "Departure Date" => "departure_date",
        "Expiration Date" => "expiration_date",
        "Date Of Arrival" => "date_of_arrival",
        "Primary Email Address" => "primary_email_address",
        "Internet Application" => "internet_application",
        "Daily Indemnity" => "daily_indemnity",
        "Fulfillment Type" => "fulfillment_type",
        "Policy Maximum" => "policy_maximum",
        "Deductible" => "deductible",
        "Accidental Death" => "accidental_death",
        "Life Amount" => "life_amount",
        "Supplemental Life Amount" => "supplemental_life_amount",
        "Leisure Sports Rider" => "leisure_sports_rider",
        "Adventure Sports Rider" => "adventure_sports_rider",
        "Citizenship Return Rider" => "citizenship_return_rider",
        "Terrorism Rider" => "terrorism_rider",
        "Coinsurance Rider" => "coinsurance_rider",
        "Chaperone Rider" => "chaperone_rider",
        "Personal Liability Rider" => "personal_liability_rider",
        "Heart Care Plus Rider" => "heart_care_plus_rider",
        "Evacuation Plus Rider" => "evacuation_plus_rider",
        "Six Month Pre-existing Condition Rider" => "six_month_rider",
        "Six Month Pre Existing Condition Rider" => "six_month_rider",        
        "Dependent Class" => "dependent_class",
        "Mailing Name" => "mailing_name",
        "Mailing Address 1" => "mailing_address_1",
        "Mailing Address1" => "mailing_address_1",        
        "Mailing Address 2" => "mailing_address_2",
        "Mailing Address2" => "mailing_address_2",        
        "Mailing City" => "mailing_city",
        "Mailing County/Region" => "mailing_county",
        "Mailing County Region" => "mailing_county",        
        "Mailing State/Province" => "mailing_state",
        "Mailing Postal Code" => "mailing_postal_code",
        "Mailing Country" => "mailing_country",
        "Primary Telephone" => "phone",
        "Fax" => "fax"
    );

    $orderedColumns = array(
        "purchase_date",
        "producer_number",
        "product_type",
        "certificate_type",
        "certificate_number",
        "primary_insured_name",
        "government_issued_id_number",
        "group_name",
        "effective_date",
        "premium",
        "currency",
        "pay_frequency",
        "certificate_status",
        "renewal",
        "trip_lite",
        "pri_dep",
        "user_defined_variable",
        "application_type",
        "insured_id",
        "insured_name",
        "date_of_birth",
        "gender",
        "citizenship",
        "home_country",
        "primary_destination",
        "current_carrier_information",
        "other_email_address",  
        "departure_date",
        "expiration_date",
        "date_of_arrival",
        "primary_email_address",
        "internet_application",
        "daily_indemnity",
        "fulfillment_type",
        "policy_maximum",
        "deductible",
        "accidental_death",
        "life_amount",
        "supplemental_life_amount",
        "leisure_sports_rider",
        "adventure_sports_rider",
        "citizenship_return_rider",
        "terrorism_rider",
        "coinsurance_rider",
        "chaperone_rider",
        "personal_liability_rider",
        "heart_care_plus_rider",
        "evacuation_plus_rider",
        "six_month_rider",
        "dependent_class",
        "mailing_name",
        "mailing_address_1",
        "mailing_address_2",
        "mailing_city",
        "mailing_county",
        "mailing_state",
        "mailing_postal_code",
        "mailing_country",
        "phone",
        "fax"
    );

    $specialDateCols = array(
        "date_of_arrival_fmt",
        "expiration_date_fmt",
        "departure_date_fmt",
        "date_of_birth_fmt",
        "effective_date_fmt",
        "purchase_date_fmt"
    );

    $columnNames = null;
    $individuals = array();
    foreach ($lines as $line) {
        # Workaround for str_getcsv being unavailable on the php version on our host
        $fh = fopen('php://temp', 'r+');
        $line = str_replace("\\\"", "\"", $line);
        fwrite($fh, $line);
        rewind($fh);
        $rawTokens = fgetcsv($fh);
        fclose($fh);
        #$tokens = str_getcsv($line); # csv format
        #$tokens = explode("\t", $line); # tab-delimited

        $tokens = $rawTokens;

        if ($columnNames == null) {
            $columnNames = $tokens;
        } else {
            $numCols = count($columnNames);
            $individCount = count($individuals);
            $individual = array();
            for ($i = 0; $i < $numCols; $i++) {
                $individual[$colMap[$columnNames[$i]]] = $tokens[$i];
                echo "Setting individual $individCount's ".$colMap[$columnNames[$i]]." to ".$tokens[$i]."<br />";
            }
            array_push($individuals, $individual);
        }

        echo "$line<br />";
    }

    $dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666);
    if (!$dbhandle) die ("Couldn't create dbhandle!");

    $insertStatement = "insert into policy (".implode(",", $orderedColumns) . "," . implode(",", $specialDateCols) . ") values (";

    foreach ($individuals as $individual) {
        $individualInsert = $insertStatement;

        $comma = "";
        foreach ($orderedColumns as $col) {
            $individualInsert .= $comma . "\"" . sqlite_escape_string(str_replace("\\\"", "", $individual[$col])) . "\"";
            $comma = ",";
        }

        $individualInsert .= $comma . "\"" . sqlDateFromString($individual["date_of_arrival"]) . "\"";
        $individualInsert .= $comma . "\"" . sqlDateFromString($individual["expiration_date"]) . "\"";
        $individualInsert .= $comma . "\"" . sqlDateFromString($individual["departure_date"]) . "\"";
        $individualInsert .= $comma . "\"" . sqlDateFromString($individual["date_of_birth"]) . "\"";
        $individualInsert .= $comma . "\"" . sqlDateFromString($individual["effective_date"]) . "\"";
        $individualInsert .= $comma . "\"" . sqlDateFromString($individual["purchase_date"]) . "\"";

        $individualInsert .= ");";

        echo "$individualInsert <br />\n";

        $ok = sqlite_exec($dbhandle, $individualInsert, $error);
        if (!$ok)
            echo "Couldn't insert $individual. $error\n";
    }

    # Should we try to deduplicate lines here?

    /*
    $query = "SELECT * FROM policy";
    $result = sqlite_query($dbhandle, $query);
    if (!$result) die("Cannot execute query.");

    while ($row = sqlite_fetch_array($result)) {
        print_r($row);
        echo "<br>";
    }
     */
    sqlite_close($dbhandle);

} else {
    echo "<a href=\"./index.php?readFromDisk=1\">Read CSV from server disk.</a><br />";
    echo "<a href=\"./reminders.php?slow=1\">Precompute then process reminder emails.</a><br />";
    echo "<a href=\"./reminders.php\">Process reminder emails.</a><br />";
    echo "<a href=\"./adid.php\">Process AdIDs.</a><br />";
    echo "<br /><br />";
    printImportForms();
}

# Once the parsed info form is submitted, write the individuals to the database.

?>

</body>
</html>

