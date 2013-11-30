<html>
<head>
<title>Taian Policy Database Query</title>
</head>

<body>
<?php
require_once('db.php');

$query = stripslashes($_POST['query']);
?>

<?php
 echo '<form name="queryform" action="query.php'.(!is_null($_GET['exec']) ? '?exec=1' : '').'" method="post">';
 echo '<input type="text" name="query" size=300'. (!is_null($query) ? " value='$query'" : "") .'><br />';
?>
<input type="submit" value="Submit">
</form>


<?php

if (!is_null($_POST['query'])) {
    echo "Results for query: " . $_POST['query'] . "<br />";

    $dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666);
    if (!$dbhandle) {
        echo "Couldn't create dbhandle!\n";
        return;
    }

    if (!is_null($_GET['exec'])) {
        $ok = sqlite_exec($dbhandle, stripslashes($_POST['query']), $error);
        if (!$ok) {
            echo "Couldn't execute query. $error\n";
            return;
        }
    } else {
        $result = sqlite_query($dbhandle, stripslashes($_POST['query']), $error);
        if (!$result) {
            echo "Cannot execute query $error.";
            return;
        }
    }

    $allResults = array();
    while ($row = sqlite_fetch_array($result)) {
        #print_r($row);
        #echo "<br />";
        array_push($allResults, $row);
    }

    echo array2table($allResults);

    sqlite_close($dbhandle);
}

?>

</body>
</html>
