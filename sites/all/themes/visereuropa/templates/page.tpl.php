<?php print $mothership_poorthemers_helper; ?>

<h1 class="logo"><?php print l('Vi ser Europa!', '<front>'); ?></h1>

<div id="map">
  <div id="map-canvas"></div>
</div>

<div id="main-content">
  <?php print render($page['content_pre']); ?>
  <?php print render($page['content']); ?>
  <?php print render($page['content_post']); ?>
</div>