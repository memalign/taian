<?

$importantColumns = "rowid, expiration_date_fmt, expiration_date, effective_date_fmt, julianday(effective_date_fmt), last_reminder_date_fmt, certificate_number, certificate_status, certificate_type, primary_insured_name, insured_name, group_name, primary_email_address, other_email_address, (julianday(\"now\")-julianday(\"expiration_date_fmt\") > -1) as too_late_to_renew, (julianday(\"expiration_date_fmt\")-julianday(\"effective_date_fmt\") > 27) as is_at_least_month, (julianday(\"expiration_date_fmt\")-julianday(\"effective_date_fmt\") > 87) as is_at_least_three_months, should_ignore";

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
function array2table($array, $unique = false, $recursive = false, $null = '&nbsp;') {
    // Sanity check
    if (empty($array) || !is_array($array)) {
        return false;
    }

    if (!isset($array[0]) || !is_array($array[0])) {
        $array = array($array);
    }

    $uniqueLines = null;
    if ($unique)
        $uniqueLines = array();

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
        $rowText = "\t<tr>";
        $rowCompareText = "";
        foreach ($row as $colName => $cell) {
            $valueText = "";
            $valueText .= '<td>';

            // Cast objects
            if (is_object($cell)) { $cell = (array) $cell; }

            if ($recursive === true && is_array($cell) && !empty($cell)) {
                // Recursive mode
                $valueText .= "\n" . array2table($cell, false, true, true) . "\n";
            } else {
                $valueText .= (strlen($cell) > 0) ?  htmlspecialchars((string) $cell) : $null;
            }

            $valueText .= '</td>';

            $rowText .= $valueText;
            if ($colName != "rowid")
                $rowCompareText .= $valueText;
        }

        $rowText .= "</tr>\n";

        if ($unique) {
            if (!isset($uniqueLines[$rowCompareText])) {
                $table .= $rowText;
                $uniqueLines[$rowCompareText] = true;
            }
        } else {
            $table .= $rowText;
        }
    }
    $table .= '</table>';
    return $table;
}

?>

