<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Taian Policy Database - Reminders</title>
</head>

<body>
<a href=".">Back to main page.</a><br /><br />

<?php
require_once('db.php');
set_time_limit(300);
//error_reporting(E_ALL);

$importantColumns = "rowid, expiration_date_fmt, expiration_date, effective_date_fmt, julianday(effective_date_fmt), last_reminder_date_fmt, certificate_number, certificate_status, certificate_type, primary_insured_name, insured_name, group_name, primary_email_address, other_email_address, (julianday(\"now\")-julianday(\"expiration_date_fmt\") > -1) as too_late_to_renew, (julianday(\"expiration_date_fmt\")-julianday(\"effective_date_fmt\") > 27) as is_at_least_month, should_ignore";

function siblingsAndEmails($dbhandle, $individual) {
    global $importantColumns;

    $siblings = array();

    # Find my email addresses based on what's in primary_email_address, other_email_address, and email addresses for my certificate_number
    $emailAddressMap = array();

    $emailAddressKeys = array("primary_email_address", "other_email_address");
    foreach ($emailAddressKeys as $key) {
        $addy = $individual[$key];

        if (strlen($addy)) {
            $emailAddressMap[$addy] = 1;
        }
    }

    # Make sure we have our email addresses (group policies have the contact info on a separate row)
    $myCertNumber = $individual["certificate_number"];
    if (strlen($myCertNumber)) {
        $query = "select primary_email_address, other_email_address from policy where certificate_number = \"$myCertNumber\"";

        $result = sqlite_query($dbhandle, $query, $error);
        if (!$result) {
            echo "Cannot execute individual email query $error.";
        } else {
            while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                foreach ($emailAddressKeys as $key) {
                    $addy = $row[$key];

                    if (strlen($addy)) {
                        $emailAddressMap[$addy] = 1;
                    }
                }
            }
        }
    }

    # Get other certificate_numbers that match my name then filter them by my email address
    $myName = $individual["insured_name"];
    if (strlen($myName)) {
        $query = "select certificate_number from policy where insured_name = \"$myName\"";

        $potentialCertNumbers = array();

        $result = sqlite_query($dbhandle, $query, $error);
        if (!$result) {
            echo "Cannot execute individual peer cert number query $error.";
        } else {
            while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                if (strlen($row["certificate_number"])) {
                    array_push($potentialCertNumbers, $row["certificate_number"]);
                }
            }
        }

        $actualCertNumbers = array();

        if ((count($potentialCertNumbers) > 0) && (count(array_keys($emailAddressMap)) > 0)) {
            $certNumbers = "\"" . implode("\",\"", $potentialCertNumbers) . "\"";
            $emailAddresses = "\"" . implode("\",\"", array_keys($emailAddressMap)) . "\"";
            $query = "select certificate_number from policy where certificate_number in ($certNumbers) and ( (primary_email_address in ($emailAddresses)) or (other_email_address in ($emailAddresses)) )";

            $result = sqlite_query($dbhandle, $query, $error);
            if (!$result) {
                echo "Cannot execute individual peer cert number query $error.";
            } else {
                while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                    if (strlen($row["certificate_number"])) {
                        array_push($actualCertNumbers, $row["certificate_number"]);
                    }
                }
            }
        }
        # given the actualCertNumbers, find the rows with that cert number and insured_name
        if (count($actualCertNumbers) > 0) {
            $actualCertNumbersString = "\"" . implode("\",\"", $actualCertNumbers) . "\"";
            $query = "select $importantColumns from policy where certificate_number in ($actualCertNumbersString) and insured_name = \"$myName\" and rowid != ".$individual["rowid"];

            $result = sqlite_query($dbhandle, $query, $error);
            if (!$result) {
                echo "Cannot execute individual sibling query $error.";
            } else {
                while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
                    array_push($siblings, $row);
                }
            }
        }
    }

    return array($siblings, array_keys($emailAddressMap));
}

function emailTemplateForIndividuals($individuals) {
    $studentARenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划A (Student Health Advantage) （__EXPIRATION_DATE__）就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保：  https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，续保时请选择邮寄接收方式，这样您既可收到 Email confirmation, 又可以在几天后收到IMG邮寄的保险卡。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

再次深表感谢，祝您平安健康！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $studentBRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划B(Patriot Exchange Program) （__EXPIRATION_DATE__）就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保： https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，续保时请选择邮寄接收方式，这样您既可收到 Email confirmation, 又可以在几天后收到IMG邮寄的保险卡。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

再次深表感谢，祝您平安健康！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $studentBBasicRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险(__EXPIRATION_DATE__)就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保： https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，购买计划B时，J1签证必须选择Standard Plan。您上次购买的 <font color="red">Basic Plan</font>不符合美国国务院对J1签证保险的标准。如果您持J1鉴证需要购买standard Plan, 请不要点击上面的续保链接。点击下面链接后点击"购买计划B", 填表时选择Standard Plan：  http://taianfinancial.com/#l=cn&p=pivot-international-student 

另外，请选择邮寄接收方式，这样您既可收到 Email confirmation, 又可以在几天后收到IMG邮寄给您的保险卡。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

再次深表感谢，祝您平安健康！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $longTravelRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的国际旅游医疗保险（__EXPIRATION_DATE__）就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)且还想继续购买的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保： https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，续保时请选择邮寄接收方式，这样您既可收到 Email confirmation, 又可以在几天后收到IMG邮寄的保险卡。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

再次深表感谢，祝您平安健康！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $shortTravelRebuy = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的国际旅游医疗保险（__EXPIRATION_DATE__）就要过期了。 如果您还需要继续购买此保险的話，请点击链接 http://taianfinancial.com/#l=cn&p=pivot-travel-insurance

此保险购买一个月或一个月以上，以后您就可以按月续保，手续非常简单。保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

非常感谢您对我们公司的厚爱和支持。请转告您的亲人和朋友，我们期待着能有机会为您们服务。

祝您平安健康！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $studentAExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划A（Student Health Advantage)今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)且还想继续购买的話，请在今天点击下面的链接购买计划A（Student Health Advantage) ：
http://taianfinancial.com/#l=cn&p=pivot-international-student

如有问题请随时与我们联系。

非常感谢您对我们公司的厚爱和支持。祝您平安幸福！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $studentBExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划B（Patriot Exchange Program)今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)且还想继续购买的話，请点击下面的链接购买计划B：
http://taianfinancial.com/#l=cn&p=pivot-international-student

如有问题请随时与我们联系。

非常感谢您对我们公司的厚爱和支持。祝您平安幸福！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $travelExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的国际旅游医疗保险今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)且还想继续购买的話，请在今天提交申请。您可以点击下面的链接重新购买爱国者旅游医疗保险：
http://taianfinancial.com/#l=cn&p=pivot-travel-insurance

如有问题请随时与我们联系。

非常感谢您对我们公司的厚爱和支持。祝您平安幸福！

Chris
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;

    $primaryInsuredName = $individuals[0]["primary_insured_name"];
    $expirationDate = $individuals[0]["expiration_date"];
    $certificateNumber = $individuals[0]["certificate_number"];
    $tooLateToRenew = (intval($individuals[0]["too_late_to_renew"]) > 0);
    $isAtLeastMonth = (intval($individuals[0]["is_at_least_month"]) > 0);

    /*
        Student A renewal  - Start with SHA
        Student B renewal - start with EPSN
        Student B Basic plan renewal - start with EPBN
        Long term travel plan renew - PATA, PATI, PPLA  plus initial term (effective date to termination date) one month or more
        Short term travel plan rebuy (under one month can't renew) - PATA, PATI, PPLA  plus initial term (effective date to termination date) under one month
        Student A expires today rebuy - Start with SHA
        Student B expires today rebuy - start with EPSN
        Long term travel rebuy - PATA, PATI, PPLA  plus initial term (effective date to termination date) one month or more
     */
    $renewEmail = "";
    if (startsWith($certificateNumber, "SHA")) {
        if ($tooLateToRenew) {
            $renewEmail = $studentAExpiresToday;
        } else {
            $renewEmail = $studentARenew;
        }
    } elseif (startsWith($certificateNumber, "EPSN")) {
        if ($tooLateToRenew) {
            $renewEmail = $studentBExpiresToday;
        } else {
            $renewEmail = $studentBRenew;
        }
    } elseif (startsWith($certificateNumber, "EPBN")) {
        $renewEmail = $studentBBasicRenew;
    } elseif (startsWith($certificateNumber, "PATA") ||
              startsWith($certificateNumber, "PATI") ||
              startsWith($certificateNumber, "PPLA")) {
        if ($tooLateToRenew) {
            $renewEmail = $travelExpiresToday;
        } else {
             if ($isAtLeastMonth) {
                  $renewEmail = $longTravelRenew;
             } else {
                  $renewEmail = $shortTravelRebuy;
             }
        }
    }

    $renewEmail = str_replace("__PRIMARY_INSURED_NAME__", $primaryInsuredName, $renewEmail);
    $renewEmail = str_replace("__EXPIRATION_DATE__", $expirationDate, $renewEmail);
    $renewEmail = str_replace("__CERTIFICATE_NUMBER__", $certificateNumber, $renewEmail);

    return $renewEmail;
}

function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}

function updateToIgnore($dbhandle, $rowid) {
    if ($_GET['debug'])
        echo "Updating db to ignore $rowid<br />";

    $query = "update policy set should_ignore = 1 where rowid in ($rowid)";
    $ok = sqlite_exec($dbhandle, $query, $error);
    if (!$ok) {
        echo "Couldn't update ignored rows $query. $error<br />\n";
    }
}


$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
if (!$dbhandle) die ($error);

if (!is_null($_POST['processedRows'])) {
    $query = "update policy set last_reminder_date_fmt = strftime(\"%Y-%m-%d\", \"now\") where rowid in (".sqlite_escape_string($_POST['processedRows']).")";
    echo "Query: $query<br />";
    $ok = sqlite_exec($dbhandle, $query, $error);
    if (!$ok) {
        echo "Couldn't update processed rows $query. $error<br />\n";
    } else {
        $count = count(explode(",", $_POST['processedRows']));
        echo "Processed $count rows.<br /><br />";
    }
}

// People who need emails:
// These are the people who will be expired between 20 days prior to today and at most 10 days from now who have:
// - Never been reminded
// OR
//   - They haven't been reminded since before the day before expiration
//   AND
//   - They've gotten a reminder and today is later than the day before expiration
$soonToExpireQuery = "select $importantColumns from policy where (should_ignore = 0) and julianday(expiration_date_fmt) >= julianday(\"now\", \"-18 days\") and julianday(expiration_date_fmt) <= julianday(\"now\", \"+10 days\") and ( (last_reminder_date_fmt IS NULL) or (length(last_reminder_date_fmt) = 0) or ( (julianday(last_reminder_date_fmt) < julianday(expiration_date_fmt, \"-1 day\")) AND (julianday(\"now\") >= julianday(expiration_date_fmt, \"-1 day\"))  )   ) order by rowid desc";

$result = sqlite_query($dbhandle, $soonToExpireQuery, $error);
if (!$result) {
    echo "Cannot execute query $error.";
    return;
}

$allResults = array();
while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
    array_push($allResults, $row);
}

$requestedSkips = intval($_POST['requestedSkips']);
if ($requestedSkips > 0) {
    echo "You have requested to skip $requestedSkips polic".($requestedSkips == 1 ? "y" : "ies").".<br />";
}
echo "There are about " . count($allResults) . " policies to process.<br />";

# Prune ones that are no longer relevant - "CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED", "PENDNG RENEWAL"
$pruneStatuses = array("CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED", "PENDNG RENEWAL");
foreach ($allResults as $key=>$value) {
    if (in_array($value["certificate_status"], $pruneStatuses)) {
        updateToIgnore($dbhandle, $value['rowid']);
        unset($allResults[$key]);
    }
}

echo "After pruning by certificate status, there are about " . count($allResults) . " policies to process.<br />";

# Prune rows that lack an insured_name. These are group policy contact info rows.

foreach ($allResults as $key=>$value) {
    if (!strlen($value["insured_name"])) {
        updateToIgnore($dbhandle, $value['rowid']);
        unset($allResults[$key]);
    }
}

echo "After pruning by insured name, there are about " . count($allResults) . " policies to process.<br />";


# Prune ones with a newer effective date for the same person - find the siblings and check their effective date.
# To improve performance, I can find the first non-nuked entry in $allResults and then only bother with other entries on the same certificate number
$relevantCertificateNumber = null;
$skipCount = 0;

foreach ($allResults as $key=>$value) {
    if (($relevantCertificateNumber != null) && ($relevantCertificateNumber != $value['certificate_number'])) {
        continue;
    }

    # Find the siblings
    list($siblings, $emails) = siblingsAndEmails($dbhandle, $value);

    if ($_GET['debug'])
        echo "Siblings of ".$value["certificate_number"]." (exp: ".$value["expiration_date"]."): <br />" . array2table($siblings);

    $epsilon = 0.0001;

    $effectiveDateKey = "julianday(effective_date_fmt)";
    $myEffectiveDate = floatval($value[$effectiveDateKey]);
    $myRowID = intval($value["rowid"]);

    $nukedSelf = false;

    # Check sibling effective dates, unset us if any sibling has a higher one
    foreach ($siblings as $sibling) {
        $sibEffectiveDate = floatval($sibling[$effectiveDateKey]);
        $sibRowID = intval($sibling["rowid"]);

        #echo "Comparing $sibEffectiveDate to $myEffectiveDate<br />";

        if (abs($myEffectiveDate - $sibEffectiveDate) < $epsilon) {
            # See if the sibling is dead policy
            if (in_array($sibling["certificate_status"], $pruneStatuses)) {
                # The sibling is a dead policy... is it newer or older than us based on rowid?
                if ($sibRowID > $myRowID) {
                    # Sibling is newer, nuke us.
                    updateToIgnore($dbhandle, $myRowID);
                    unset($allResults[$key]);
                    $nukedSelf = true;
                    break;
                } else {
                    # Sibling is older, ignore it.
                    updateToIgnore($dbhandle, $sibRowID);
                }
            } else {
                # Both my sibling and I are active policies.
                if (strlen($value["last_reminder_date_fmt"]) > 0) {
                    # My row has been used for reminder emails, ignore sibling
                    updateToIgnore($dbhandle, $sibRowID);
                } elseif (strlen($sibling["last_reminder_date_fmt"]) > 0) {
                    # Sibling has been used for reminder emails, nuke me
                    updateToIgnore($dbhandle, $myRowID);
                    unset($allResults[$key]);
                    $nukedSelf = true;
                    break;
                } else {
                    # Neither of us has been used for reminders. Use the most recent rowid.
                    if ($sibRowID > $myRowID) {
                        # Sibling is newer, nuke us.
                        updateToIgnore($dbhandle, $myRowID);
                        unset($allResults[$key]);
                        $nukedSelf = true;
                        break;
                    } else {
                        # Sibling is older, ignore it.
                        updateToIgnore($dbhandle, $sibRowID);
                    }
                }
            }
        } elseif ($sibEffectiveDate < $myEffectiveDate) {
            # Ignore the sibling, my effective date is newer.
            updateToIgnore($dbhandle, $sibRowID);
        } else {
            # The sibling has a newer effective date, nuke my entry.
            updateToIgnore($dbhandle, $myRowID);
            unset($allResults[$key]);
            $nukedSelf = true;
            break;
        }
    }

    if (is_null($_GET['slow'])) {
        if (!$nukedSelf) {
            if ($skipCount >= $requestedSkips) {
                $relevantCertificateNumber = $value['certificate_number'];
            } else {
                $skipCount++;
                unset($allResults[$key]);
            }
        }
    }
}

echo "After pruning by equivalent updated policies, there are about " . count($allResults) . " policies to process. (This is an over-estimate. Precise numbers take too long to calculate.)<br />";

reset($allResults); # Reset internal next pointer since we've removed some elements
$firstKey = key($allResults);

$policy = $allResults[$firstKey];

$policiesOnSameCertificate = array();

foreach ($allResults as $key=>$value) {
    if ($value["certificate_number"] == $policy["certificate_number"]) {
        array_push($policiesOnSameCertificate, $value);
    }
}


echo "<br />";

$emails = null;
$allSiblings = array();
$rowNumbers = "";
$comma = "";
foreach ($policiesOnSameCertificate as $eachPolicy) {
    $rowNumbers .= $comma . $eachPolicy["rowid"];
    $comma = ",";

    list($siblings, $eachEmails) = siblingsAndEmails($dbhandle, $eachPolicy);
    if (!(count($emails) > 0)) {
        $emails = $eachEmails;
    }
    $allSiblings = array_merge($allSiblings, $siblings);
}

if (count($allSiblings) > 0) {
    echo "Previous history: <br />";
    echo array2table($allSiblings, true);
}
echo "Policies with the same certificate number due for a reminder:<br />";
echo array2table($policiesOnSameCertificate);

$nextSkipCount = $requestedSkips + 1;

    echo <<<END
<br />
<form name="importform" action="./reminders.php" method="post">
<input type="hidden" name="processedRows" value="$rowNumbers">
<input type="hidden" name="requestedSkips" value="$requestedSkips">
<input type="submit" value="Mark as Processed">
</form>
<form name="skipform" action="./reminders.php" method="post">
<input type="hidden" name="requestedSkips" value="$nextSkipCount">
<input type="submit" value="Skip">
</form>
END;


# Suggest an email template and try to fill it in
$emailTemplate = emailTemplateForIndividuals($policiesOnSameCertificate);

echo "Copy and paste this email:<br />";
echo "<div id='faketextarea' style='border: 1px solid black; width:900px; overflow:auto' contenteditable>";
echo implode(", ", $emails) . "<br />";
echo nl2br($emailTemplate);
echo "</div>";

sqlite_close($dbhandle);

?>

</body>
</html>
