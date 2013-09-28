<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Taian Policy Database - AdIDs</title>
</head>

<body>
<a href=".">Back to main page.</a><br /><br />

<?php
require_once('db.php');
set_time_limit(300);
//error_reporting(E_ALL);


$adid = $_GET['adid'];
if (!is_null($adid)) {
    $dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
    if (!$dbhandle) die ($error);

    $query = "select distinct certificate_number from policy where user_defined_variable=\"$adid\"";

    $certNumbers = array();

    $result = sqlite_query($dbhandle, $query, $error);
    if (!$result) {
        echo "Cannot execute cert number query $error.";
    } else {
        while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
            if (strlen($row["certificate_number"])) {
                array_push($certNumbers, $row["certificate_number"]);
            }
        }
    }

    $policies = array();

    # grab all rows with these certificate numbers.
    if (count($certNumbers) > 0) {
        $certNumbersStr = "\"" . implode("\",\"", $certNumbers) . "\"";
        $query = "select $importantColumns from policy where certificate_number in ($certNumbersStr)";

        $result = sqlite_query($dbhandle, $query, $error);
        if (!$result) {
            echo "Cannot execute policies query $error.";
        } else {
            while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                array_push($policies, $row);
            }
        }
    }

    $count = count($policies);
    echo "Policy rows for $adid (found " . $count . ")<br />";
    if ($count) {
        echo array2table($policies, true);
    }

    sqlite_close($dbhandle);
}


echo <<<END
<br />
<form name="importform" action="./adid.php" method="get">
AdID: <input type="text" name="adid" value="$adid" size="30"><br />
<input type="submit" value="Submit">
</form>
END;

?>

</body>
</html>
