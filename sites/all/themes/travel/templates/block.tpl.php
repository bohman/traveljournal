<?php
  if ($classes) {
    $classes = ' class="'. $classes . '"';
  }

  // Add a aria role search if this is the search block
  if($variables['block_html_id'] == 'block-search-form') {
    $role = ' role="search"';
  } else {
    $role = '';
  }
?>

  <?php if ($block->subject) {
    print render($title_prefix); ?>
      <h2<?php print $title_attributes; ?>><?php print $block->subject ?></h2>
    <?php print render($title_suffix);
  }

  if (!theme_get_setting('mothership_classes_block_contentdiv') AND $block->module == "block") { ?>
    <div class="wysiwyg">
  <?php }

  print $content;

  if (!theme_get_setting('mothership_classes_block_contentdiv') AND $block->module == "block") { ?>
    </div>
  <?php } ?>