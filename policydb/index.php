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
    echo "$label: <input type=\"text\" name=\"$name\" value=\"$value\"><br />";
}

$emailbody = $_POST['emailbody'];

if (is_null($emailbody)) {
    printEmailForm();
} else {
    echo "Found email body: $emailbody<br />";

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
        echo "Line: $line<br />";
        $tokens = explode("\t", $line);
        foreach ($tokens as $token) {
            echo "    token \"$token\"<br />";
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
                    echo "Setting individual $individCount's ".$individualColumnNames[$i]." to ".$tokens[$i]."<br />";
                }
                array_push($individuals, $individual);
            }
        }
    }

    echo "<form name=\"parsedInfoForm\" action=\"index.php\" method=\"post\">";

    # These are global attributes:
    writeTextInput("Email Address", "emailAddress", "");
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

    # These are individual attributes:
    #warning I need to add form attributes for each individual - probably make a function for it. Note that some attributes will be missing for individuals.


    echo "<input type=\"submit\" value=\"Submit\">";
    echo "</form>";
}

# Once the parsed info form is submitted, write the individuals to the database.

?>

</body>
</html>

