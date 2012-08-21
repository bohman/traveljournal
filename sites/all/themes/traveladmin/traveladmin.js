(function ($) {

  Drupal.behaviors.traveladmin = {
    attach: function (context, settings) {


      // ------------------
      // Geocoding on the admin side of things
      // TODO: Can be prettier. But it works.
      // ------------------

      var formMap;
      var formMarkersArray = [];

      function insertMap() {
        $('form.node-location-form .field-name-field-location').append('<div class="right-column"><div id="map-canvas"></div></div');
        var latlng = new google.maps.LatLng(55.6,13);
        var mapOptions = {
          zoom: 8,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          disableDefaultUI: true,
          scrollwheel: false
        }
        formMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        setLatLongFromAddress();
      }

      function formAddMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: formMap
        });
        formMarkersArray.push(marker);
      }

      function formRemoveMarkers() {
        if (formMarkersArray) {
          for (i=0; i < formMarkersArray.length; i++) {
            formMarkersArray[i].setMap(null);
          }
          formMarkersArray.length = 0;
        }
      }

      function setLatLongFromAddress(address) {
        if(!address) {
          var address = $('#edit-field-location-und-0-value').val();
        }
        if(address) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ 'address': address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var latitude = results[0].geometry.location.lat();
              var longitude = results[0].geometry.location.lng();
              $('#edit-field-latitude-und-0-value').val(latitude);
              $('#edit-field-longitude-und-0-value').val(longitude);
              formMap.setZoom(10);
              formMap.setCenter(results[0].geometry.location);
              formRemoveMarkers();
              formAddMarker(results[0].geometry.location);
            } else {
              $('#edit-field-latitude-und-0-value').val('');
              $('#edit-field-longitude-und-0-value').val('');
              formRemoveMarkers();
            }
          });
        } else {
          $('#edit-field-latitude-und-0-value').val('');
          $('#edit-field-longitude-und-0-value').val('');
          formRemoveMarkers();
        }
      }

      if($('form.node-location-form').length){
        insertMap();
      }

      var fieldLocation = $('#edit-field-location-und-0-value');
      if(fieldLocation.length) {
        fieldLocation.blur(function() {
          setLatLongFromAddress();
        });
      }


    }
  };
}(jQuery));