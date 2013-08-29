
<?php

$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
if (!$dbhandle) die ($error);

echo "Opened policy db file.<br />";

#warning have some notion of the last time we bothered a person/group

$stm = "CREATE TABLE policy (phone TEXT, fax TEXT, mailing_country TEXT, mailing_postal_code TEXT, mailing_state TEXT, mailing_county TEXT, mailing_city TEXT, mailing_address_1 TEXT, mailing_address_2 TEXT, mailing_name TEXT, dependent_class TEXT, six_month_rider TEXT, evacuation_plus_rider TEXT, heart_care_plus_rider TEXT, personal_liability_rider TEXT, chaperone_rider TEXT, coinsurance_rider TEXT, terrorism_rider TEXT, citizenship_return_rider TEXT, adventure_sports_rider TEXT, leisure_sports_rider TEXT, supplemental_life_amount TEXT, life_amount TEXT, accidental_death TEXT, deductible TEXT, policy_maximum TEXT, fulfillment_type TEXT, daily_indemnity TEXT, internet_application TEXT, date_of_arrival TEXT, expiration_date TEXT, departure_date TEXT, other_email_address TEXT, current_carrier_information TEXT, primary_destination TEXT, home_country TEXT, citizenship TEXT, gender TEXT, date_of_birth TEXT, insured_name TEXT, insured_id TEXT, application_type TEXT, user_defined_variable TEXT, pri_dep TEXT, trip_lite TEXT, renewal TEXT, certificate_status TEXT, pay_frequency TEXT, currency TEXT, premium TEXT, effective_date TEXT, group_name TEXT, primary_email_address TEXT, government_issued_id_number TEXT, primary_insured_name TEXT, certificate_number TEXT, certificate_type TEXT, product_type TEXT, producer_number TEXT, purchase_date TEXT,"
.
"date_of_arrival_fmt TEXT, expiration_date_fmt TEXT, departure_date_fmt TEXT, date_of_birth_fmt TEXT, effective_date_fmt TEXT, purchase_date_fmt TEXT"
.
");";

$ok = sqlite_exec($dbhandle, $stm, $error);
if (!$ok)
    echo "Couldn't create policy table or it already exists. $error\n";

sqlite_close($dbhandle);

?>
