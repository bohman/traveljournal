<div class="gallery">
  <?php foreach ($items as $delta => $item) : ?>
    <div class="image">
      <?php
        $thumbnail = image_style_url('gallery-thumbnail', $item['#item']['uri']);
        $lightbox = image_style_url('gallery-lightbox', $item['#item']['uri']);
      ?>
      <a href="<?php print $lightbox; ?>">
        <img src="<?php print $thumbnail; ?>">
      </a>
    </div>
  <?php endforeach; ?>
</div>