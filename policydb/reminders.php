<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Taian Policy Database - Reminders</title>
</head>

<body>
<a href=".">Back to main page.</a><br /><br />

<?php
require_once('db.php');
set_time_limit(2400);
//error_reporting(E_ALL);

$importantColumns = "rowid, citizenship, home_country, expiration_date_fmt, julianday(expiration_date_fmt), expiration_date, effective_date_fmt, julianday(effective_date_fmt), last_reminder_date_fmt, certificate_number, certificate_status, certificate_type, primary_insured_name, insured_name, group_name, primary_email_address, other_email_address, (julianday(\"now\")-julianday(\"expiration_date_fmt\") > -1) as too_late_to_renew, (julianday(\"expiration_date_fmt\")-julianday(\"effective_date_fmt\") > 27) as is_at_least_month, (julianday(\"expiration_date_fmt\")-julianday(\"effective_date_fmt\") > 87) as is_at_least_three_months, should_ignore";

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
            while ($row = sqlite_fetch_array($result)) {
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
            while ($row = sqlite_fetch_array($result)) {
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
                while ($row = sqlite_fetch_array($result)) {
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
                while ($row = sqlite_fetch_array($result)) {
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

您购买的泰安访问学者留学生保险计划A (Student Health Advantage) __EXPIRATION_DATE__ 就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保：  https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $studentAShortRebuy = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划A (Student Health Advantage) __EXPIRATION_DATE__ 就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要继续购买的話，请在过期日期之前提交申请。
请点击购买链接： https://purchase.imglobal.com/Quote/student_health_advantage/pre-quote?imgac=80000699
计划A产品说明链接： http://taianfinancial.com/#l=cn&p=pivot-international-student

请注意，此保险购买三个月或三个月以上，以后就可以按月续保。保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $studentBRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划B(Patriot Exchange Program) __EXPIRATION_DATE__ 就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保： https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $studentBBasicRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险 __EXPIRATION_DATE__ 就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保： https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，购买计划B时，J1签证必须选择Standard Plan。您上次购买的 <font color="red">Basic Plan</font>不符合美国国务院对J1签证保险的标准。如果您持J1鉴证需要购买standard Plan, 请不要点击上面的续保链接。点击下面链接后点击"购买计划B", 填表时选择Standard Plan：  http://taianfinancial.com/#l=cn&p=pivot-international-student 

另外，请选择邮寄接收方式，这样您既可收到 Email confirmation, 又可以在几天后收到IMG邮寄给您的保险卡。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $longTravelRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的国际旅游医疗保险 __EXPIRATION_DATE__ 就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)且还想继续购买的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保： https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $shortTravelRebuy = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的国际旅游医疗保险 __EXPIRATION_DATE__ 就要过期了。 如果您还需要继续购买此保险的話，请点击链接 http://taianfinancial.com/#l=cn&p=pivot-travel-insurance

此保险购买一个月或一个月以上，以后您就可以按月续保，手续非常简单。保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

非常感谢您对我们公司的厚爱和支持。请转告您的亲人和朋友，我们期待着能有机会为您们服务。

__SIGNATURE__
END;

    $studentAExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安保险A（Student Health Advantage)今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，今天是最后一天仍可续保。 请点击下面的链接申请续保： 

https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__
         
请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。
     

如果您今天不能完成续保，以后您需要重新购买时， 请登陆泰安网站： http://taianfinancial.com/#l=cn&p=pivot-international-student

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $studentBExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安保险B（Patriot Exchange Program)今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，今天是最后一天仍可续保。 请点击下面的链接申请续保： 

https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__
         
请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。
     

如果您今天不能完成续保，以后您需要重新购买时， 请登陆泰安网站： http://taianfinancial.com/#l=cn&p=pivot-international-student

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $longTravelExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安保险(Patriot Travel)今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，今天是最后一天仍可续保。 请点击下面的链接申请续保： 

https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__
         
请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。
     

如果您今天不能完成续保，以后您需要重新购买时， 请登陆泰安网站：http://taianfinancial.com/#l=cn&p=pivot-travel-insurance

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $shortTravelExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的国际旅游医疗保险今天就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)且还想继续购买的話，请在今天提交申请。您可以点击下面的链接重新购买爱国者旅游医疗保险：
http://taianfinancial.com/#l=cn&p=pivot-travel-insurance

如有问题请随时与我们联系。

__SIGNATURE__
END;

    $patriotExchangeGroupRenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生团体保险计划B(Patriot Exchange Group) __EXPIRATION_DATE__ 就要过期了。 如果您们仍然满足购买该保险的条件(签证和身份没有变化)并且需要续保的話，请在过期日期申请团体延期。 即使团体中只有一位成员需要续保，团体可以继续存在并延期。请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

您可以发email给IMG，要求团体保险延期。请见下面我们为您写的Email草稿。填入括号中的内容，将Email发给IMG。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__

-----------------------------------------------------------------

Email发给: GroupAdmin.UW@imglobal.com
请抄送给: chris@taianfinancial.com

Dear IMG,

I am (填入您的姓名). I have group policy number __CERTIFICATE_NUMBER__. I would like to extend the coverage of:

(填入需要延期的成员1的姓名和 Insured ID number).
Please extend by (填入成员1需要延期几个月， 例如： two months, five months).

(填入需要延期的成员2的姓名和 Insured ID number).
Please extend by (填入成员2需要延期几个月， 例如： two months, five months).

(填入需要延期的成员3的姓名和 Insured ID number).
Please extend by (填入成员3需要延期几个月， 例如： two months, five months).

....
....

Please charge the credit card on file for this purchase.
Also, please send me an email that shows my coverage has been extended.

Thanks for your help.

(填入您的姓名)
END;

    $patriotExchangeGroupExpiresToday = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生团体保险计划B(Patriot Group Exchange ) 今天就要过期了。 如果您们仍然满足购买该保险的条件(签证和身份没有变化)并且需要延期的話，今天是最后一天仍可申请团体保险延期。 即使团体中只有一位成员需要续保，团体可以继续存在并延期。请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

您可以发email给IMG，要求团体保险延期。请见下面我们为您写的Email草稿。填入括号中的内容，将Email发给IMG。

如果您今天不能完成保险延期，以后您需要重新购买时， 请登陆泰安网站： http://taianfinancial.com/#l=cn&p=pivot-international-student
      
非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__

-----------------------------------------------------------------

Email发给: GroupAdmin.UW@imglobal.com
请抄送给: chris@taianfinancial.com

Dear IMG,

I am (填入您的姓名). I have group policy number __CERTIFICATE_NUMBER__. I would like to extend the coverage of:

(填入需要延期的成员1的姓名和 Insured ID number).
Please extend by (填入成员1需要延期几个月， 例如： two months, five months).

(填入需要延期的成员2的姓名和 Insured ID number).
Please extend by (填入成员2需要延期几个月， 例如： two months, five months).

(填入需要延期的成员3的姓名和 Insured ID number).
Please extend by (填入成员3需要延期几个月， 例如： two months, five months).

....
....

Please charge the credit card on file for this purchase.
Also, please send me an email that shows my coverage has been extended.

Thanks for your help.

(填入您的姓名)
END;

    $renewalSubject = "泰安保险续保通知";
    $patriotExchangeGroupRenewalSubject = "泰安团体保险延期通知";
    $rebuySubject = "泰安保险过期提醒";
    $expiresTodaySubject = "您的泰安保险今天过期";

    $primaryInsuredName = $individuals[0]["primary_insured_name"];
    $expirationDate = $individuals[0]["expiration_date"];
    $certificateNumber = $individuals[0]["certificate_number"];
    $tooLateToRenew = (intval($individuals[0]["too_late_to_renew"]) > 0);
    $isAtLeastMonth = (intval($individuals[0]["is_at_least_month"]) > 0);
    $isAtLeastThreeMonths = (intval($individuals[0]["is_at_least_three_months"]) > 0);

    /*
        // These rules are not quite right for SHA policies. To renew the first time, the policy must be >= 3 months. Subsequent renewals can happen only 1 month apart.
        Student A renewal  - Start with SHA, policy at least 1 months
        Student A short rebuy - Start with SHA, policy < 1 months

        Student B renewal - start with EPSN; Also TaiAn Patriot Exchange (for individuals) which start with TPE(followed by numbers), TPEY. Be careful -- TPE isn't enough since group is TPEG.
        Student B Basic plan renewal - start with EPBN
        Long term travel plan renew - PATA, PATI, PPLA  plus initial term (effective date to termination date) one month or more
        Short term travel plan rebuy (under one month can't renew) - PATA, PATI, PPLA  plus initial term (effective date to termination date) under one month
        Student A expires today rebuy - Start with SHA
        Student B expires today rebuy - start with EPSN; Also TaiAn Patriot Exchange (for individuals) which start with TPE(followed by numbers), TPEY. Be careful -- TPE isn't enough since group is TPEG.
        Long term travel rebuy - PATA, PATI, PPLA  plus initial term (effective date to termination date) one month or more
        Patriot Exchange group renewal - Starts with EPSWN; Also TaiAn Patriot Exchange Group which start with TPEG (and TPEGY)
        Patriot Exchange group rebuy - Starts with EPSWN; Also TaiAn Patriot Exchange Group which start with TPEG (and TPEGY)
     */
    $renewEmail = "";
    $subject = "";
    if (startsWith($certificateNumber, "SHA")) {
        if ($tooLateToRenew) {
            $renewEmail = $studentAExpiresToday;
            $subject = $expiresTodaySubject;
        } else {
            if (!$isAtLeastMonth) {
                $renewEmail = $studentAShortRebuy;
                $subject = $rebuySubject;
            } else {
                $renewEmail = $studentARenew;
                $subject = $renewalSubject;
            }
        }
    } elseif (startsWith($certificateNumber, "EPSN") ||
              startsWith($certificateNumber, "TPEY") ||
              (startsWith($certificateNumber, "TPE") && !startsWith($certificateNumber, "TPEG"))) {
        if ($tooLateToRenew) {
            $renewEmail = $studentBExpiresToday;
            $subject = $expiresTodaySubject;
        } else {
            $renewEmail = $studentBRenew;
            $subject = $renewalSubject;
        }
    } elseif (startsWith($certificateNumber, "EPBN")) {
        $renewEmail = $studentBBasicRenew;
        $subject = $renewalSubject;
    } elseif (startsWith($certificateNumber, "PATA") ||
              startsWith($certificateNumber, "PATI") ||
              startsWith($certificateNumber, "PPLA")) {
        if ($tooLateToRenew) {
            if ($isAtLeastMonth) {
                $renewEmail = $longTravelExpiresToday;
                $subject = $expiresTodaySubject;
            } else {
                $renewEmail = $shortTravelExpiresToday;
                $subject = $expiresTodaySubject;
            }
        } else {
             if ($isAtLeastMonth) {
                  $renewEmail = $longTravelRenew;
                  $subject = $renewalSubject;
             } else {
                  $renewEmail = $shortTravelRebuy;
                  $subject = $rebuySubject;
             }
        }
    } elseif (startsWith($certificateNumber, "EPSWN") ||
              startsWith($certificateNumber, "TPEG")) {
        if ($tooLateToRenew) {
            $renewEmail = $patriotExchangeGroupExpiresToday;
            $subject = $expiresTodaySubject;
        } else {
            $renewEmail = $patriotExchangeGroupRenew;
            $subject = $patriotExchangeGroupRenewalSubject;
        }
    }


    $emailSignature = <<<END
再次深表感谢，祝福平安健康！

Chris
泰安国际医疗保险 （IMG授权的独立的IMG中文销售中心） 
美国电话: +1 (317)318-8258 (中文), +1 (317)318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间上午7-11点，直接拨号，无长途费)
taianfinancial.com/chinese
END;
    
    $renewEmail = str_replace("__SIGNATURE__", $emailSignature, $renewEmail);
    $renewEmail = str_replace("__PRIMARY_INSURED_NAME__", $primaryInsuredName, $renewEmail);
    $renewEmail = str_replace("__EXPIRATION_DATE__", $expirationDate, $renewEmail);
    $renewEmail = str_replace("__CERTIFICATE_NUMBER__", $certificateNumber, $renewEmail);

    return $subject . "\n" . $renewEmail;
}

function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}

function updateToIgnore($dbhandle, $row, $reason) {
    $rowid = $row['rowid'];

    if ($_GET['debug'])
        echo "Updating db to ignore $rowid. Already ignored? ".$row['should_ignore'].". Reason? $reason<br />";

    if (intval($row['should_ignore']) == 0) {
        $query = "update policy set should_ignore = 1 where rowid in ($rowid)";
        $ok = sqlite_exec($dbhandle, $query, $error);
        if (!$ok) {
            echo "Couldn't update ignored rows $query. $error<br />\n";
        }
    } else {
        if ($_GET['debug'])
            echo "Skipping ...<br />";
    }
}


$dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666);
if (!$dbhandle) die ("Couldn't create dbhandle!");

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
// These are the people who will be expired between 8 days prior to today and at most 6 days from now who have:
// - Never been reminded
// OR
//   - They haven't been reminded since before the day before expiration
//   AND
//   - They've gotten a reminder and today is later than the day of expiration
$soonToExpireQuery = "select $importantColumns from policy where (should_ignore = 0) and julianday(expiration_date_fmt) >= julianday(\"now\", \"-8 days\") and julianday(expiration_date_fmt) <= julianday(\"now\", \"+6 days\") and ( (last_reminder_date_fmt IS NULL) or (length(last_reminder_date_fmt) = 0) or ( (julianday(last_reminder_date_fmt) < julianday(expiration_date_fmt, \"-1 day\")) AND (julianday(\"now\") >= julianday(expiration_date_fmt))  )   ) order by rowid desc";

$result = sqlite_query($dbhandle, $soonToExpireQuery, $error);
if (!$result) {
    echo "Cannot execute query $error.";
    return;
}

$allResults = array();
while ($row = sqlite_fetch_array($result)) {
    array_push($allResults, $row);
}

$requestedSkips = max(intval($_POST['requestedSkips']), intval($_GET['requestedSkips']));
if ($requestedSkips > 0) {
    echo "You have requested to skip $requestedSkips polic".($requestedSkips == 1 ? "y" : "ies").".<br />";
}
echo "There are about " . count($allResults) . " policies to process.<br />";

# Prune ones that are no longer relevant - "CANCELLED TO INCEPTION", "DECLINED, PAYMENT", "SOLD, PART TERMINATED", "PENDNG RENEWAL"
$pruneTerminalStatuses = array("CANCELLED TO INCEPTION", "SOLD, PART TERMINATED");
$pruneStatuses = array_merge(array("DECLINED, PAYMENT", "PENDNG RENEWAL"), $pruneTerminalStatuses);
foreach ($allResults as $key=>$value) {
    if (in_array($value["certificate_status"], $pruneStatuses)) {
        updateToIgnore($dbhandle, $value, "pruned status");
        unset($allResults[$key]);
    }
}

echo "After pruning by certificate status, there are about " . count($allResults) . " policies to process.<br />";

# Prune rows that lack an insured_name. These are group policy contact info rows.

foreach ($allResults as $key=>$value) {
    if (!strlen($value["insured_name"])) {
        updateToIgnore($dbhandle, $value, "No insured name");
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
    $expirationDateKey = "julianday(expiration_date_fmt)";
    $myExpirationDate = floatval($value[$expirationDateKey]); 
    $myRowID = intval($value["rowid"]);
    $myRow = $value;

    $nukedSelf = false;

    # Check sibling effective dates, unset us if any sibling has a higher one
    # If effective dates are identical, compare expiration dates.
    foreach ($siblings as $sibling) {
        $isTerminal = in_array($sibling["certificate_status"], $pruneTerminalStatuses) || in_array($myRow["certificate_status"], $pruneTerminalStatuses);
        $sibEffectiveDate = floatval($sibling[$effectiveDateKey]);
        $sibExpirationDate = floatval($sibling[$expirationDateKey]); 
        $sibRowID = intval($sibling["rowid"]);

        #echo "Comparing $sibEffectiveDate to $myEffectiveDate<br />";

        $sameAge = false;
        $iAmNewer = false;

        if (abs($myEffectiveDate - $sibEffectiveDate) < $epsilon) {
            // We've found that terminal certificate statuses (such as CANCELLED) have an expiration date that's the same as the effective date even if
            // the older rows for the same policy have an effective date farther in the future.
            if ($isTerminal || (abs($myExpirationDate - $sibExpirationDate) < $epsilon)) {
                $sameAge = true;
            } elseif ($sibExpirationDate < $myExpirationDate) {
                $iAmNewer = true;
            } else {
                $iAmNewer = false;
            }
        } elseif ($sibEffectiveDate < $myEffectiveDate) {
            $iAmNewer = true;
        } else {
            $iAmNewer = false;
        }


        if ($sameAge) {
            # See if the sibling is dead policy
            if (in_array($sibling["certificate_status"], $pruneStatuses)) {
                # The sibling is a dead version of this policy... is it newer or older than us based on rowid?
                if ($sibling["certificate_number"] == $myRow["certificate_number"]) {
                    if ($sibRowID > $myRowID) {
                        # Sibling is newer, nuke us.
                        updateToIgnore($dbhandle, $myRow, "newer sibling ".$sibRowID);
                        unset($allResults[$key]);
                        $nukedSelf = true;
                        break;
                    } else {
                        # Sibling is older, ignore it.
                        updateToIgnore($dbhandle, $sibling, "older sibling ".$myRowID);
                    }
                } else {
                    # This dead sibling policy will be cleaned up when its certificate_status is evaluated individually
                }
            } else {
                # Both my sibling and I are active policies.
                if (strlen($value["last_reminder_date_fmt"]) > 0) {
                    # My row has been used for reminder emails, ignore sibling
                    updateToIgnore($dbhandle, $sibling, "my row $myRowID has been used for reminder, ignoring sibling");
                } elseif (strlen($sibling["last_reminder_date_fmt"]) > 0) {
                    # Sibling has been used for reminder emails, nuke me
                    updateToIgnore($dbhandle, $myRow, "sibling $sibRowID has been used for reminders");
                    unset($allResults[$key]);
                    $nukedSelf = true;
                    break;
                } else {
                    # Neither of us has been used for reminders. Use the most recent rowid.
                    if ($sibRowID > $myRowID) {
                        # Sibling is newer, nuke us.
                        updateToIgnore($dbhandle, $myRow, "nobody has been used for reminders, nuking older rowid in favor of $sibRowID");
                        unset($allResults[$key]);
                        $nukedSelf = true;
                        break;
                    } else {
                        # Sibling is older, ignore it.
                        updateToIgnore($dbhandle, $sibling, "nobody has been used for reminders, nuking older sib rowid in favor of $myRowID");
                    }
                }
            }
        } elseif ($iAmNewer) {
            updateToIgnore($dbhandle, $sibling, "Ignore sibling, my (effective,expiration) date is newer $myRowID");
        } else {
            updateToIgnore($dbhandle, $myRow, "Sibling has newer (effective,expiration) date $sibRowID");
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
