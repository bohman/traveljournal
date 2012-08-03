(function ($) {
  Drupal.behaviors.traveladmin = {
    attach: function (context, settings) {


      // ------------------
      // Geocoding on the admin side of things
      // TODO: display map to ensure things are done correctly
      // ------------------

      function getLatLongFromAddress() {
        var address = jQuery('#edit-field-location-und-0-value').val();
        if(address) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ 'address': address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var latitude = results[0].geometry.location.lat();
              var longitude = results[0].geometry.location.lng();
              jQuery('#edit-field-latitude-und-0-value').val(latitude);
              jQuery('#edit-field-longitude-und-0-value').val(longitude);
            }
          });
        }
      }

      jQuery('#edit-field-location-und-0-value').blur(function() {
        getLatLongFromAddress();
      });


    }
  };
}(jQuery));