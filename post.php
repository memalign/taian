<?
$message = "Form submission from ".$_SERVER["REMOTE_ADDR"]."\n";

foreach ($_POST as $key => $value) {
    if ($key != "successPage") {
        $message .= $key." = ".$value."\n";
    }
}

$result = mail("taianfinancialllc@gmail.com", "Form submission", $message);
header("Location: ".$_POST["successPage"]);
?>

