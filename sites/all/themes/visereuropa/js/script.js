(function ($) {
  Drupal.behaviors.visereuropa = {
    attach: function (context, settings) {


      //
      // Settings
      //
      var sitepath = 'http://visereuropa.linusbohman.se'; //Where is the site located? If we need to reference images in JS (markers)
      var requestUrl = sitepath + '/json/all';
      var setBounds = true;


      //
      // Set up global variables and run map_init() as a callback.
      //
      var bounds = new google.maps.LatLngBounds();
      var infoWindow = new google.maps.InfoWindow({ content: 'Loading information...' });
      var map;
      var mapInit = false;
      var mapNodes;
      var markersArray = [];

      jQuery(document).ready(function() {
        map_init();
      });


      //
      // map_init()
      // Sets up the map and everything. If this function
      // was your mother, it'd be HUGE. As in important, since
      // it basically gives birth to the entire map. You dig?
      //
      function map_init() {

        // Save and parse all map markers in an object. Also update mapInit variable
        // to let other functions know this is the first time we build the map.
        mapInit = true;
        jQuery('#map').removeClass('no-js');

        // Initial map load: build map
        var latlng = new google.maps.LatLng(55.596911,12.998478);
        var mapOptions = {
          zoom: 3,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          scrollwheel: false,
          panControl: false,
          mapTypeControl: false,
          zoomControl: true,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          backgroundColor: '#1c2b5c'
        }
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        doRequest(requestUrl);

        mapInit = false;
      }


      //
      // buildNodes()
      // Made to run in the checkFilter function. Ensures bubbles and list
      // is populated with proper information.
      //
      function buildNodes(mapNodes) {
        jQuery.each(mapNodes['nodes'], function(key, value) {
          var lat = this['node']['field_latitude'];
          var lon = this['node']['field_longitude'];
          var link = this['node']['link'];
          addMarker(lat, lon, link);
        });

        for (i=0; i < markersArray.length; i++) {
          google.maps.event.addListener(markersArray[i], 'click', function() {
            window.location.href = this.link;
          });
        }

        if(setBounds === true) {
          map.fitBounds(bounds);
        }
      }


      //
      // General utilities
      //
      function addMarker(lat, lon, link) {
        var location = new google.maps.LatLng(lat, lon);
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          link: link
        });
        markersArray.push(marker);
        if(setBounds === true) {
          bounds.extend(location);
        }
      }

      function removeMarkers() {
        if (markersArray) {
          for (i=0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
          }
          markersArray.length = 0;
        }
      }

      function doRequest(requestUrl) {
        jQuery.getJSON(requestUrl, function(data){
          buildNodes(data);
        });
      }


    }
  };
}(jQuery));