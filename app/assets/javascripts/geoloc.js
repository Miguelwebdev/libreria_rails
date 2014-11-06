//documentación en https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.429462, -3.630941)
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


  /*var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.429462, -3.630941),
      map: map,
      title: 'Hello World!'
  });*/
  var iconBase = 'https://maps.google.com/mapfiles/kml/pal2/';
  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(40.429438, -3.630955),
      map: map,
      icon: iconBase + 'icon4.png'
  });

 // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Hola paco'
      });

      map.setCenter(pos);
    }, 
    function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
