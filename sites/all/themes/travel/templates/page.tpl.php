<header class="site-head">
  <h1 class="site-name"><?php print l('Fonky Travels', '<front>', array('attributes' => array('class' => array('button')))); ?></h1>
  <?php if ($tabs) { print render($tabs); } ?>
</header>


<div id="map">
  <div id="map-canvas"></div>
  <div id="map-filter">
    <div class="categories"></div>
    <div class="users"></div>
  </div>
</div>


<div id="administration-pane">
  <?php print render($page['administration']); ?>
  <div class="close"><a href="#" class="admin-toggle button dark">&laquo; close</a></div>
  <a href="#" class="admin-toggle"></a>
</div>


<div id="content-pane">
    <?php if($page['highlighted'] OR $page['help'] OR $messages) { ?>
      <div class="drupal-messages">
        <?php
          print render($page['highlighted']);
          print render($page['help']);
          print $messages;
        ?>
      </div>
    <?php }

    if ($title && !$is_front) {
      print render($title_prefix); ?>
        <h2 class="title"><?php print $title; ?></h2>
      <?php print render($title_suffix);
    }

    print render($page['content_pre']);
    print render($page['content']);
    print render($page['content_post']); ?>
</div>