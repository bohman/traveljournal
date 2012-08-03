<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)) {
  print $title;
}

foreach ($rows as $id => $row) {
  print $row;
} ?>
