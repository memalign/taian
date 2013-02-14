<?
$message = "Form submission from ".$_SERVER["REMOTE_ADDR"]."\n";

foreach ($_POST as $key => $value) {
    if ($key != "successPage") {
        if (preg_match("/^formLabel(\d+)/", $key, $matches)) {
            $userValue = $_POST["formInput".$matches[1]];
            $label = $value;
            $message .= $userValue." = ".$label."\n";
        }
    }
}

$result = mail("taianfinancialllc@gmail.com", "Form submission", $message);
header("Location: ".$_POST["successPage"]);
?>

