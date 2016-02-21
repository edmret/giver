
define(['angularAMD', 'angular-route', 'angular-material'], function (angularAMD, ngRoute) {

    var app = angular.module("giver", ['ngRoute', 'ngMaterial']);


    app.config(function ($routeProvider, $mdThemingProvider) {

        //index Route
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl',
            controllerUrl: 'Controllers/HomeCtrl'
        }))

        .when("/collaborate/new", angularAMD.route({
            templateUrl: '/views/collaborate_new.html',
            controller: 'CollaborateNewCtrl',
            controllerUrl: 'Controllers/CollaborateNewCtrl'
        }));


        /*$mdThemingProvider.theme('default')
        .dark();*/

    });


    return angularAMD.bootstrap(app);
});
