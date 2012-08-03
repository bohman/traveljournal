<?php /* ?><div class="<?php print $classes; ?>"> */ ?>
  <?php if ($title) {
    print render($title_prefix);
    print $title;
    print render($title_suffix);
  }

  if ($header) {
    print $header;
  }

  if ($exposed) { ?>
    <div class="view-filters">
      <?php print $exposed; ?>
    </div>
  <?php }

  if ($attachment_before) {
    print $attachment_before;
  }

  if ($rows) {
    print $rows;
  } elseif ($empty) { ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php }

  if ($pager) {
    print $pager;
  }

  if ($attachment_after) {
    print $attachment_after;
  } 

  if ($more) {
    print $more;
  }

  if ($footer) {
    print $footer;
  }

  if ($feed_icon) {
    print $feed_icon;
  } ?>

<?php /* ?></div> */ ?>