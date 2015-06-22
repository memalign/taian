
<?php

require_once('db.php');

$dbhandle = sqlite_open('/home1/taianfin/referrals.db', 0666);
if (!$dbhandle) die ("Couldn't create dbhandle!");

echo "Opened referrals db file.<br />";

$stm = "CREATE TABLE referral (chinese_name TEXT, pinyin_name TEXT, date_of_birth TEXT, phone TEXT, email TEXT, university TEXT, period TEXT, visa TEXT, last_import_date_fmt TEXT, last_reminder_date_fmt TEXT, has_purchased INTEGER default 0);";

$ok = sqlite_exec($dbhandle, $stm, $error);
if (!$ok)
    echo "Couldn't create referral table or it already exists. $error\n";

$stm = "create index email_index on referral (email)";
$ok = sqlite_exec($dbhandle, $stm, $error);
if (!$ok)
    echo "Couldn't create email_index or it already exists. $error\n";

sqlite_close($dbhandle);

?>
