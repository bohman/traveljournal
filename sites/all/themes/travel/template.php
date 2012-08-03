<?php

drupal_add_js('http://maps.googleapis.com/maps/api/js?sensor=false', 'external');
drupal_add_css('http://fonts.googleapis.com/css?family=Lobster');
drupal_add_css('http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');


// ------------------
// template_preprocess_field()
//
// Uses:
// - Add wysiwyg class to body
// - Add wysiwyg class to comment body
// ------------------

function visereuropa_preprocess_field(&$variables) {
  if($variables['element']['#field_name'] == 'body') {
    $variables['classes_array'][] = 'wysiwyg';
  }
  if($variables['element']['#field_name'] == 'comment_body') {
    $variables['classes_array'][] = 'wysiwyg';
  }
}