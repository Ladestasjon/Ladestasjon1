
//map function
var map;
function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(59.91, 10.75)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

//end map