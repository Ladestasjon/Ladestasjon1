(function(){
    "use strict";

    function Main($scope) {

    }

    function getChargerStation(bound) {
        jQuery.ajax({
            type: 'POST',
            url: 'http://nobil.no/api/server/search.php',
            data: { 'apikey': '17a7a832c2e7bb2b593fbd8f0f68906b', 'apiversion': '3',
                'action': "search",
                'type': 'rectangle',
                'northeast': '(59.943921193288915, 10.826683044433594)',
                'southwest': '(59.883683240905256, 10.650901794433594)',
                'existingids': '189,195,199,89,48'},
            dataType: 'json'
        });
    }
})();