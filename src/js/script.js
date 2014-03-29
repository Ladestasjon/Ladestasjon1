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


var ladestasjonApp = angular.module('ladestasjon1', []);

ladestasjonApp.controller('LadestasjonReq', function ($scope, $http) {
    $http.jsonp('http://nobil.no/api/server/search.php?callback=JSON_CALLBACK', {
        params: {'apikey': '17a7a832c2e7bb2b593fbd8f0f68906b', 'apiversion': '3',
            'action': "search",
            'type': 'rectangle',
            'northeast': '(59.943921193288915, 10.826683044433594)',
            'southwest': '(59.883683240905256, 10.650901794433594)',
            'existingids': '189,195,199,89,48'}
    }).
        success(function (data, status, headers, config) {
            $scope.data = data;
        }).error(function (data, status, headers, config) {
            $scope.data = "error getting stuff";
        });
});

