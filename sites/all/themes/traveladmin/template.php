<?php

// Include gMaps JS
drupal_add_js('http://maps.googleapis.com/maps/api/js?sensor=false', 'external');


// ------------------
// hook_form_alter()
//
// Uses:
// - Configure the create new account screen
// - Move links in login block
// ------------------

function traveladmin_form_alter(&$form, &$form_state, $form_id) {

  //print '<pre>' . print_r($form['overlay_control'], 1) . '</pre>'; die;

  switch($form_id) {
    // User edit form
    case 'user_profile_form':
      $form['overlay_control'] = '';
      //$form['account']['pass']['#description'] = '';
    break;
  }
}