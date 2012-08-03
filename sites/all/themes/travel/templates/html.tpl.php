<!doctype html <?php print $rdf_namespaces; ?>>
<!--[if IEMobile 7]><html class="no-js iem7 oldie"><![endif]-->
<!--[if lt IE 7]><html class="no-js ie6 oldie" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?>><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js ie7 oldie" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?>><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js ie8 oldie" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?>><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?>><!--<![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html class="no-js" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?>><!--<![endif]-->

<head profile="<?php print $grddl_profile; ?>">
  <title><?php print $head_title; ?></title>

  <?php
    print $head;
    print $appletouchicon;
  ?>

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <?php if(theme_get_setting('mothership_viewport')) { ?>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <?php }
    print $styles;
    if(isset($respondjs)) { print $respondjs; }
  ?>

  <!--[if lt IE 9]>
    <script src="<?php print '/' . drupal_get_path('theme', 'mothership'); ?>/js/html5.js"></script>
  <![endif]-->

  <?php
    print $selectivizr;
    if(!theme_get_setting('mothership_script_place_footer')) { print $scripts; }
  ?>
</head>

<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <?php
    print $page_top;
    print $page;
    if(theme_get_setting('mothership_script_place_footer')) { print $scripts; }
    print $page_bottom;
  ?>
</body>
</html>