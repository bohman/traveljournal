<?php
  if ($classes) {
    $classes = ' class="'. $classes . ' "';
  }

  if ($id_node) {
    $id_node = ' id="'. $id_node . '"';
  }

  hide($content['comments']);
  hide($content['links']);
  hide($content['field_gallery_images']);
  hide($content['field_background_image']);
?>

  <?php print $mothership_poorthemers_helper; ?>

  <?php print render($title_prefix); ?>
    <h2 class="title"><?php print $title; ?></h2>
  <?php print render($title_suffix); ?>

  <?php
    print render($content);
    print render($content['field_gallery_images']);
  ?>

  <img id="back" src="<?php print render($content['field_background_image']); ?>">