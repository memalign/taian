<html>
<head>
<title>Taian Policy Database - Reminders</title>
</head>

<body>

<?php
require_once('db.php');

$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
if (!$dbhandle) die ($error);

// People who need emails:
// These are the people who will be expired between 20 days prior to today and 10 days from now (or before) who have:
// - Never been reminded
// OR
//   - They haven't been reminded since before the day before expiration
//   AND
//   - They've gotten a reminder and today is later than the day before expiration
$soonToExpireQuery = "select distinct expiration_date_fmt, certificate_number, certificate_status, primary_insured_name, insured_name, primary_email_address, other_email_address from policy where julianday(expiration_date_fmt) >= julianday(\"now\", \"-20 days\") and julianday(expiration_date_fmt) <= julianday(\"now\", \"+10 days\") and ( (last_reminder_date_fmt IS NULL) or (length(last_reminder_date_fmt) = 0) or ( (julianday(last_reminder_date_fmt) < julianday(expiration_date_fmt, \"-1 day\")) AND (julianday(\"now\") >= julianday(expiration_date_fmt, \"-1 day\"))  )   )";

$result = sqlite_query($dbhandle, $soonToExpireQuery, $error);
if (!$result) {
    echo "Cannot execute query $error.";
    return;
}

$allResults = array();
while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
    array_push($allResults, $row);
}


# Prune out any results that aren't relevant.


echo "There are about " . count($allResults) . " policies to process.<br />";

echo array2table(array($allResults[0]));

# Go one at a time?
# How to mark an entry as processed? Just set the date on it?

sqlite_close($dbhandle);

?>

</body>
</html>
