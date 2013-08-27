<html>
<head>
<title>Taian Policy Database</title>
</head>

<body>

<?php

function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}

function printEmailForm() {
    echo <<<END
<form name="emailform" action="index.php" method="post">
    IMG Policy Email:<br />
<textarea name="emailbody" rows="20" cols="120">
</textarea><br />
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

$emailbody = $_POST['emailbody'];

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


} else {
    printEmailForm();
}

# Once the parsed info form is submitted, write the individuals to the database.

?>

</body>
</html>

