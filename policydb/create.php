
<?php

$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
if (!$dbhandle) die ($error);

echo "Opened policy db file.<br />";

#warning add a group_name
#warning add mailing_address
#warning add phone

$stm = "CREATE TABLE policy (certificate_number TEXT, product_type TEXT, effective_date_str TEXT, expiration_date_str TEXT, deductible TEXT, max_limit TEXT, certificate_type TEXT, premium TEXT, name TEXT, insured_id TEXT, dob_str TEXT, mailing_address TEXT, phone TEXT);";

$ok = sqlite_exec($dbhandle, $stm, $error);
if (!$ok)
    echo "Couldn't create policy table or it already exists. $error\n";

sqlite_close($dbhandle);

?>
