<html>
<head>
<title>Taian Referral Database</title>
</head>

<body>

<?php

require_once('db.php');

function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}

function printImportForms() {
    echo <<<END
<form name="importform" action="index.php" method="post">
    Referral CSV spreadsheet:<br />
<textarea name="tabbeddata" rows="20" cols="120">
</textarea><br />
<input type="submit" value="Submit">
</form>

END;
}

function remove_utf8_bom($text)
{
    $bom = pack('H*','EFBBBF');
    $text = preg_replace("/^$bom/", '', $text);
    return $text;
}

$tabbedData = $_POST['tabbeddata'];
if (is_null($tabbedData)) {
    $tabbedData = $HTTP_RAW_POST_DATA;
    $tabbedData = remove_utf8_bom($tabbedData);
}

echo "This page is intended for automatic uploads<br />\n";
if (!is_null($tabbedData)) {
    echo "<a href=\".\">Back to main page.</a><br />";
    #echo "<a href=\"./reminders.php?slow=1\">Precompute then process reminder emails.</a><br />";
    #echo "<a href=\"./reminders.php\">Process reminder emails.</a><br />";

    # Split by (dos) lines
    $lines = explode("\n", $tabbedData);
    echo "There are " . count($lines) . " lines.<br />";

    
    $colMap = array (
        "Name" => "chinese_name",
        "DOB" => "date_of_birth",
        "Phone" => "phone",
        "Email" => "email",
        "University" => "university",
        "Period" => "period",
        "Visa" => "visa",
        "PINYIN" => "pinyin_name"
    );

    $orderedColumns = array(
        "chinese_name",
        "pinyin_name",
        "date_of_birth",
        "phone",
        "email",
        "university",
        "period",
        "visa"
    );

    $specialDateCols = array(
        "last_import_date_fmt"
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

    $dbhandle = sqlite_open('/home1/taianfin/referrals.db', 0666);
    if (!$dbhandle) die ("Couldn't create dbhandle!");

    foreach ($individuals as $individual) {
        if (!$individual['email'])
            continue;

        $hasMatchingResultQuery = "select count(*) as hasResult from referral where email = \"".sqlite_escape_string($individual["email"])."\" limit 1";

        $result = sqlite_query($dbhandle, $hasMatchingResultQuery, $error);
        if (!$result) {
            echo "Cannot execute query $error.";
            return;
        }

        $hasMatchingResult = 0;
        while ($row = sqlite_fetch_array($result)) {
            $hasMatchingResult = $row['hasResult'];
            break;
        }

        if (!$hasMatchingResult) {
            $insertStatement = "insert into referral (".implode(",", $orderedColumns) . "," . implode(",", $specialDateCols) . ") values (";

            $individualInsert = $insertStatement;

            $comma = "";
            foreach ($orderedColumns as $col) {
                $individualInsert .= $comma . "\"" . sqlite_escape_string(str_replace("\\\"", "", $individual[$col])) . "\"";
                $comma = ",";
            }

            $individualInsert .= $comma . "strftime(\"%Y-%m-%d\", \"now\")"; # last_import_date_fmt

            $individualInsert .= ");";

            echo "$individualInsert <br />\n";

            $ok = sqlite_exec($dbhandle, $individualInsert, $error);
            if (!$ok)
                echo "Couldn't insert $individual. $error\n";
        } else {
            $updateStatement = "update referral set ";

            $comma = "";
            foreach ($orderedColumns as $col) {
                $updateStatement .= $comma . $col . " = \"" . sqlite_escape_string(str_replace("\\\"", "", $individual[$col])) . "\"";
                $comma = ",";
            }

            $updateStatement .= $comma . "last_import_date_fmt = strftime(\"%Y-%m-%d\", \"now\")"; # last_import_date_fmt

            $updateStatement .= " where email = \"".sqlite_escape_string($individual["email"])."\";";

            echo "$updateStatement <br />\n";

            $ok = sqlite_exec($dbhandle, $updateStatement, $error);
            if (!$ok)
                echo "Couldn't update $individual. $error\n";
         }
    }

    sqlite_close($dbhandle);
} else {
#    echo "<a href=\"./reminders.php?slow=1\">Precompute then process reminder emails.</a><br />";
#    echo "<a href=\"./reminders.php\">Process reminder emails.</a><br />";
#    echo "<a href=\"./adid.php\">Process AdIDs.</a><br />";
    echo "<br /><br />";
    printImportForms();
}

# Once the parsed info form is submitted, write the individuals to the database.

?>

</body>
</html>

