<?php

drupal_add_js('http://maps.googleapis.com/maps/api/js?sensor=false', 'external');
drupal_add_css('http://fonts.googleapis.com/css?family=Lobster');
drupal_add_css('http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');


// ------------------
// hook_form_alter()
//
// Uses:
// - Configure the create new account screen
// - Move links in login block
// ------------------

function travel_form_alter(&$form, &$form_state, $form_id) {
  // Login block (in header)
  switch($form_id) {
    case 'user_login_block':
      $form['links']['#weight'] = '255';
    break;
  }
}