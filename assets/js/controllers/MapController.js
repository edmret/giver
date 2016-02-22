define(['angular','ngmap', 'geolocation'], function (angular,ngmap, geolocation) {

    /*app.controller('MapController', function ($scope, $geolocation) {


      angular.extend($scope, {
        image:{
          url: '/images/pointer.png',
          size: [20, 32],
          origin: [0,0],
          anchor: [0, 32]
        }
      });

      geolocation.getLocation().then(function(data){
        $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      });

    });*/

    'use strict';
    angular.module('giver.controllers.MapController', ['ngMap','geolocation'])
    .controller('MapController', function ($scope, geolocation,NgMap) {
        $scope.image = {
          url: '/images/pointer.png',
          size: [20, 32],
          origin: [0,0],
          anchor: [0, 32]
        };


        /*$scope.fakeGeopoints = [
          ['Center 1', 25.679162, -100.350792, 4],
          ['Center 2', 25.679041, -100.346822, 5],
          ['Center 3', 25.653856, -100.399993, 3],
          ['Center 4', 25.682363, -100.330694, 2],
          ['Center 5', 25.681327, -100.249056, 1]
        ];*/


        geolocation.getLocation().then(function(data){
          $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};

          var maxlatlon = 0.028506999999997618 * 3.5;

          var fakeGeo = [];

          for(var i=1; i < 61; i++){

            var left = Math.round(Math.random());
            var down = Math.round(Math.random());

            var lon = (Math.random() * maxlatlon) * (left * -1);
            var lat = (Math.random() * maxlatlon) * (down * -1);

            fakeGeo.push([
              'Center ' + i,
              $scope.coords.lat + lat,
              $scope.coords.long + lon
            ]);

          }

          console.log(fakeGeo);

          $scope.fakeGeopoints = fakeGeo;


          //clustering positions
          $scope.dynMarkers = [];

          NgMap.getMap().then(function(map) {
            for (var i=0; i < $scope.fakeGeopoints.length ; i++) {
              var latLng = new google.maps.LatLng($scope.fakeGeopoints[i][1], $scope.fakeGeopoints[i][2]);
              $scope.dynMarkers.push(new google.maps.Marker({position:latLng, icon: 'images/pointer.png'}));
            }
            $scope.markerClusterer = new MarkerClusterer(map, $scope.dynMarkers,{});
          });

        });






  });


});
