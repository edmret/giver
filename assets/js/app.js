
define(['angularAMD', 'angular-route', 'angular-material','ngmap', 'geolocation','controllers/MapController'], function (angularAMD, ngRoute, ngMaterial, ngMap, geolocation,MapController) {

    var app = angular.module("giver", [
      'ngRoute',
      'ngMaterial',
      'ngMap',
      'geolocation',
      'giver.controllers.MapController'
  ]);


    app.config(function ($routeProvider, $httpProvider, $mdThemingProvider) {

        //index Route
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl',
            controllerUrl: 'Controllers/HomeCtrl'
        }))

        .when("/user/login", angularAMD.route({
            templateUrl: '/views/collaborate_new.html',
            controller: 'CollaborateNewCtrl',
            controllerUrl: 'Controllers/CollaborateNewCtrl'
        }))

        .when("/collaborate/new", angularAMD.route({
            templateUrl: '/views/collaborate_new.html',
            controller: 'CollaborateNewCtrl',
            controllerUrl: 'Controllers/CollaborateNewCtrl'
        }));


        //request interceptor for the response
        /*$httpProvider.interceptors.push(function($q) {
          return {
           'request': function(config) {
               // same as above
            },

            'response': function(response) {
               // same as above
            }
          };
        });*/

    });


    return angularAMD.bootstrap(app);
});
