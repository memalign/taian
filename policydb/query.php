<html>
<head>
<title>Taian Policy Database Query</title>
</head>

<body>
<?php
$query = stripslashes($_POST['query']);
?>

<form name="queryform" action="query.php" method="post">
<?php
 echo '<input type="text" name="query" size=300'. (!is_null($query) ? " value='$query'" : "") .'><br />';
?>
<input type="submit" value="Submit">
</form>


<?php
/**
 * Translate a result array into a HTML table
 *
 * @author      Aidan Lister <aidan@php.net>
 * @version     1.3.2
 * @link        http://aidanlister.com/2004/04/converting-arrays-to-human-readable-tables/
 * @param       array  $array      The result (numericaly keyed, associative inner) array.
 * @param       bool   $recursive  Recursively generate tables for multi-dimensional arrays
 * @param       string $null       String to output for blank cells
 */
function array2table($array, $recursive = false, $null = '&nbsp;') {
    // Sanity check
    if (empty($array) || !is_array($array)) {
        return false;
    }

    if (!isset($array[0]) || !is_array($array[0])) {
        $array = array($array);
    }

    // Start the table
    $table = "<table>\n";

    // The header
    $table .= "\t<tr>";


    // Take the keys from the first row as the headings
    foreach (array_keys($array[0]) as $heading) {
        $table .= '<th>' . $heading . '</th>';
    }

    $table .= "</tr>\n";

    // The body
    foreach ($array as $row) {
        $table .= "\t<tr>";
        foreach ($row as $cell) {
            $table .= '<td>';

            // Cast objects
            if (is_object($cell)) { $cell = (array) $cell; }

            if ($recursive === true && is_array($cell) && !empty($cell)) {
                // Recursive mode
                $table .= "\n" . array2table($cell, true, true) . "\n";
            } else {
                $table .= (strlen($cell) > 0) ?  htmlspecialchars((string) $cell) : $null;
            }

            $table .= '</td>';
        }
        $table .= "</tr>\n";
    }
    $table .= '</table>';
    return $table;
}

if (!is_null($_POST['query'])) {
    echo "Results for query: " . $_POST['query'] . "<br />";

    $dbhandle = sqlite_open('/home1/taianfin/policy.db', 0666, $error);
    if (!$dbhandle) {
        echo $error;
        return;
    }

    $result = sqlite_query($dbhandle, stripslashes($_POST['query']));
    if (!$result) {
        echo "Cannot execute query.";
        return;
    }

    $allResults = array();
    while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
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
