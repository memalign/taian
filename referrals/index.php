<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Taian Referrals Database</title>
</head>

<body>
<a href=".">Go to beginning</a><br /><br />

<?php
require_once('db.php');
set_time_limit(2400);
//error_reporting(E_ALL);

$importantColumns = "rowid, chinese_name, pinyin_name, date_of_birth, phone, email, university, period, visa, last_import_date_fmt, last_reminder_date_fmt, (julianday(\"now\")-julianday(\"last_reminder_date_fmt\")) as days_since_last_reminder, has_purchased";


function emailTemplateForIndividual($individual) {
    $studentARenew = <<<END
Dear __PRIMARY_INSURED_NAME__,

您购买的泰安访问学者留学生保险计划A (Student Health Advantage) __EXPIRATION_DATE__ 就要过期了。 如果您仍然满足购买该保险的条件(您的签证和身份没有变化)并且需要续保的話，请在过期日期之前提交申请以完成续保。

请点击此链接申请续保：  https://purchase.imglobal.com/beginrenewal?CertificateNumber=__CERTIFICATE_NUMBER__

请注意，保险期间所产生的疾病续保时就不是 pre-existing condition，而重新购买新保险就不具备这个好处。

另外，在续保输入信息时，您可以更改您的电话号码，Email address, 邮寄地址。您还可以选择邮寄方式接收还是Email only。

非常感谢您对我们公司的信任和支持。对我们工作的不足之处，请给我们一个提醒。把我们泰安介绍给您的家人朋友和同事是对我们工作的最大的肯定。泰安公司非常希望得到您的继续支持。

__SIGNATURE__
END;

    $renewalSubject = "泰安保险续保通知";

    $primaryInsuredName = $individual["chinese_name"];
    if (is_null($primaryInsuredName)) {
        $primaryInsuredName = $individual["pinyin_name"];
    }
    
    $renewEmail = $studentARenew;
    $subject = $renewalSubject;


    $emailSignature = <<<END
再次深表感谢，祝福平安健康！

客服中心
美国泰安国际医疗保险 (IMG中文销售中心)
美国电话: (317) 318-8258 (中文), (317) 318-8259 (英语)
中国电话: 950-4044-2336 (中文, 北京时间 晚上8:00-12:00, 直接拨号, 无长途费)
taianfinancial.com/chinese
END;
    
    $renewEmail = str_replace("__SIGNATURE__", $emailSignature, $renewEmail);
    $renewEmail = str_replace("__PRIMARY_INSURED_NAME__", $primaryInsuredName, $renewEmail);

    return $subject . "\n" . $renewEmail;
}

function startsWith($haystack, $needle) {
    return $needle === "" || strpos($haystack, $needle) === 0;
}

function updateAsReminded($dbhandle, $row, $reason) {
    $rowid = $row['rowid'];

    if ($_GET['debug'])
        echo "Updating db to ignore $rowid. Already ignored? ".$row['should_ignore'].". Reason? $reason<br />";

    if (intval($row['should_ignore']) == 0) {
        $query = "update referral set should_ignore = 1 where rowid in ($rowid)";
        $ok = sqlite_exec($dbhandle, $query, $error);
        if (!$ok) {
            echo "Couldn't update ignored rows $query. $error<br />\n";
        }
    } else {
        if ($_GET['debug'])
            echo "Skipping ...<br />";
    }
}


$dbhandle = sqlite_open('/home1/taianfin/referrals.db', 0666);
if (!$dbhandle) die ("Couldn't create dbhandle!");

if (!is_null($_POST['processedRows'])) {
    $query = "update referral set last_reminder_date_fmt = strftime(\"%Y-%m-%d\", \"now\") where rowid in (".sqlite_escape_string($_POST['processedRows']).")";
    echo "Query: $query<br />";
    $ok = sqlite_exec($dbhandle, $query, $error);
    if (!$ok) {
        echo "Couldn't update processed rows $query. $error<br />\n";
    } else {
        $count = count(explode(",", $_POST['processedRows']));
        echo "Processed $count rows.<br /><br />";
    }
}

if (!is_null($_POST['purchasedRows'])) {
    $query = "update referral set has_purchased = 1 where rowid in (".sqlite_escape_string($_POST['purchasedRows']).")";
    echo "Query: $query<br />";
    $ok = sqlite_exec($dbhandle, $query, $error);
    if (!$ok) {
        echo "Couldn't update processed rows $query. $error<br />\n";
    } else {
        $count = count(explode(",", $_POST['purchasedRows']));
        echo "Processed $count rows.<br /><br />";
    }
}


$needsFollowUpQuery = "select $importantColumns from referral where (has_purchased = 0) and ( (last_reminder_date_fmt IS NULL) or (length(last_reminder_date_fmt) = 0) or (julianday(last_reminder_date_fmt) <= julianday(\"now\", \"-5 days\")) ) order by rowid asc";

$result = sqlite_query($dbhandle, $needsFollowUpQuery, $error);
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
    echo "You have requested to skip $requestedSkips referral".($requestedSkips == 1 ? "" : "s").".<br />";
}
$count = count($allResults);
echo "There ".($count == 1 ? "is" : "are")." " . $count . " referral".($count == 1 ? "" : "s")." to process.<br />";

for ($i = 0; $i < $requestedSkips && $i < $count; $i = $i+1) {
    next($allResults);
}

$currentKey = key($allResults);

$individual = $allResults[$currentKey];

echo "<br />";

echo "Referral:<br />";
echo array2table($individual);

$nextSkipCount = $requestedSkips + 1;
$rowid = $individual['rowid'];

    echo <<<END
<br />
<form name="importform" action="./index.php" method="post">
<input type="hidden" name="processedRows" value="$rowid">
<input type="hidden" name="requestedSkips" value="$requestedSkips">
<input type="submit" value="Mark as Processed">
</form>
<form name="boughtform" action="./index.php" method="post">
<input type="hidden" name="purchasedRows" value="$rowid">
<input type="hidden" name="requestedSkips" value="$requestedSkips">
<input type="submit" value="Mark as Purchased">
</form>
<form name="skipform" action="./index.php" method="post">
<input type="hidden" name="requestedSkips" value="$nextSkipCount">
<input type="submit" value="Skip">
</form>
END;


# Suggest an email template and try to fill it in
$emailTemplate = emailTemplateForIndividual($individual);

echo "Copy and paste this email:<br />";
echo "<div id='faketextarea' style='border: 1px solid black; width:900px; overflow:auto' contenteditable>";
echo $individual['email'] . "<br />";
echo nl2br($emailTemplate);
echo "</div>";

sqlite_close($dbhandle);

?>

</body>
</html>
