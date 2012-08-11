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

<div class="wysiwyg">
  <?php if(render($content)) {
    print render($content);
  } else if(render($field_been_here[0]['tid']) == 3) { ?>
    <p>I've visited this place, but unfortunately I didn't document it properly. This likely means I went here before I started this project in mid 2012.</p>
  <?php } else { ?>
    <p>This place is on the wishlist. I intend to go here pretty soon.</p>
  <?php } ?>
</div>

<?php print render($content['field_gallery_images']); ?>