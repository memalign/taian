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

$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
if (!$dbhandle) die ($error);

$importantColumns = "purchase_date, effective_date, premium, certificate_status, certificate_number, primary_insured_name, insured_name, group_name, user_defined_variable";

$adid = $_GET['adid'];
if (!is_null($adid)) {
    $query = "select distinct certificate_number from policy where user_defined_variable=\"$adid\"";

    $certNumbers = array();

    $result = sqlite_query($dbhandle, $query, $error);
    if (!$result) {
        echo "Cannot execute cert number query $error.";
    } else {
        while ($row = sqlite_fetch_array($result)) {
            if (strlen($row["certificate_number"])) {
                array_push($certNumbers, $row["certificate_number"]);
            }
        }
    }

    $policies = array();

    # grab all rows with these certificate numbers.
    if (count($certNumbers) > 0) {
        $certNumbersStr = "\"" . implode("\",\"", $certNumbers) . "\"";
        $query = "select distinct $importantColumns from policy where certificate_number in ($certNumbersStr)";

        $result = sqlite_query($dbhandle, $query, $error);
        if (!$result) {
            echo "Cannot execute policies query $error.";
        } else {
            while ($row = sqlite_fetch_array($result)) {
                array_push($policies, $row);
            }
        }
    }

    $count = count($policies);
    echo "Policy rows for $adid (found " . $count . ")<br />";
    if ($count) {
        echo array2table($policies, true);

        echo "<br />========================================<br />";

        $header = str_replace(", ", "\t", $importantColumns);
        echo "$header<br />";
        foreach ($policies as $policy) {
            $policyStr = implode("\t", $policy);
            echo "$policyStr<br />";
        }
    }
}


echo <<<END
<br />
<form name="importform" action="./adid.php" method="get">
AdID: <input type="text" name="adid" value="$adid" size="30"><br />
<input type="submit" value="Submit">
</form>
<br />
END;

$query = "select distinct user_defined_variable from policy order by user_defined_variable asc";

$result = sqlite_query($dbhandle, $query, $error);
if (!$result) {
    echo "Cannot execute variable query $error.";
} else {
    while ($row = sqlite_fetch_array($result)) {
        $var = $row["user_defined_variable"];
        if (strlen($var) > 0) {
            echo "<a href='./adid.php?adid=".$var."'>$var</a> ";
        }
    }
}


sqlite_close($dbhandle);

?>

</body>
</html>
