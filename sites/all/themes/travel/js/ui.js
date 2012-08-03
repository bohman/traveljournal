(function ($) {
  Drupal.behaviors.travel = {
    attach: function (context, settings) {


      // -------------
      // GENERAL UI ELEMENTS
      // -------------

      //
      // Colorbox on gallery images
      //
      function gallery_init() {
        $('.gallery a').addClass('gallery-image').colorbox({
          'initialWidth' : '200',
          'initialHeight' : '200',
          'opacity' : '0.6',
          'maxHeight' : '700',
          'maxWidth' : '800',
          'rel' : 'gallery-image',
          'current' : ''
        });
      }


      // -------------
      // MAP
      // -------------

      //
      // Settings
      //
      var sitepath = 'http://travel.linusbohman.se'; //Where is the site located? If we need to reference images in JS (markers)
      var requestUrl = sitepath + '/json/all';
      var setBounds = true;


      //
      // Set up global variables
      //
      var bounds = new google.maps.LatLngBounds();
      var infoWindow = new google.maps.InfoWindow({ content: 'Loading information...' });
      var map;
      var mapInit = false;
      var mapNodes;
      var markersArray = [];


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
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        doRequest(requestUrl);

        mapInit = false;
      }


      //
      // buildNodes()
      // Ensures map is populated with proper information.
      //
      function buildNodes(mapNodes) {
        jQuery.each(mapNodes['nodes'], function(key, value) {
          var lat = this['node']['field_latitude'];
          var lon = this['node']['field_longitude'];
          var link = this['node']['link'];
          var status = this['node']['status'];
          var name = this['node']['title'];
          addMarker(lat, lon, link, status, name);
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
      function addMarker(lat, lon, link, status, name) {
        var markername = 'marker-heart';

        if(status === 'Not yet visited, but want to') { markername = 'marker-stop' }
        if(status === 'Visited but not documented') { markername = 'marker-snow' }

        var image = new google.maps.MarkerImage(
          sitepath + '/sites/all/themes/travel/img/' + markername + '.png',
          new google.maps.Size(43,66),
          new google.maps.Point(0,0),
          new google.maps.Point(22,66)
        );

        var shadow = new google.maps.MarkerImage(
          sitepath + '/sites/all/themes/travel/img/marker-shadow.png',
          new google.maps.Size(79,66),
          new google.maps.Point(0,0),
          new google.maps.Point(22,66)
        );

        var shape = {
          coord: [39,0,41,1,42,2,42,3,42,4,42,5,42,6,42,7,42,8,42,9,42,10,42,11,42,12,42,13,42,14,42,15,42,16,42,17,42,18,42,19,42,20,42,21,42,22,42,23,42,24,42,25,42,26,42,27,42,28,42,29,42,30,42,31,42,32,42,33,42,34,42,35,42,36,42,37,42,38,42,39,42,40,41,41,40,42,39,43,30,44,29,45,29,46,28,47,28,48,28,49,28,50,27,51,27,52,27,53,26,54,26,55,26,56,26,57,25,58,25,59,25,60,25,61,24,62,24,63,24,64,23,65,19,65,18,64,18,63,17,62,17,61,17,60,17,59,16,58,16,57,16,56,16,55,15,54,15,53,15,52,15,51,14,50,14,49,14,48,14,47,13,46,13,45,12,44,3,43,1,42,0,41,0,40,0,39,0,38,0,37,0,36,0,35,0,34,0,33,0,32,0,31,0,30,0,29,0,28,0,27,0,26,0,25,0,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,0,16,0,15,0,14,0,13,0,12,0,11,0,10,0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,1,1,3,0,39,0],
          type: 'poly'
        };

        var location = new google.maps.LatLng(lat, lon);

        var marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: image,
          shadow: shadow,
          shape: shape,
          link: link,
          title: name
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


      // -------------
      // RUN STUFF
      // -------------

      jQuery(document).ready(function() {
        map_init();
        gallery_init();
      });


    }
  };
}(jQuery));