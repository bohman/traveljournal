<?php
  if ($classes) {
    $classes = ' class="' . $classes . '"';
  }

  if ($id_node) {
    $id_node = ' id="' . $id_node . '"';
  }

  hide($content['comments']);
  hide($content['links']);
  hide($content['field_gallery_images']);
  hide($content['field_background_image']);
  hide($content['field_been_here']);
?>

<?php if(render($field_been_here[0]['tid']) == 1) {
  if(render($content)) { ?>
    <div class="wysiwyg">
      <?php print render($content); ?>
    </div>
  <?php }
} else if(render($field_been_here[0]['tid']) == 3) { ?>
  <div class="wysiwyg">
    <p>I've visited this place, but unfortunately I didn't document it properly. This likely means I went here before I started this project in mid 2012.</p>
  </div>
<?php } else { ?>
  <div class="wysiwyg">
    <p>This place is on the wishlist. I intend to go here pretty soon.</p>
  </div>
<?php } ?>

<?php print render($content['field_gallery_images']); ?>