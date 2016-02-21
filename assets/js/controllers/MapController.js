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


        $scope.fakeGeopoints = [
          ['Center 1', 25.679162, -100.350792, 4],
          ['Center 2', 25.679041, -100.346822, 5],
          ['Center 3', 25.653856, -100.399993, 3],
          ['Center 4', 25.682363, -100.330694, 2],
          ['Center 5', 225.681327, -100.249056, 1]
        ];




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
