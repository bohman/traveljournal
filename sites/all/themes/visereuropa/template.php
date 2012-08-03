<?php

drupal_add_js('http://maps.googleapis.com/maps/api/js?sensor=false', 'external');
drupal_add_css('http://fonts.googleapis.com/css?family=Lobster');

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