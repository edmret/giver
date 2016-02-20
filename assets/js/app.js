
define(['angularAMD', 'angular-route'], function (angularAMD, ngRoute) {

    var app = angular.module("giver", ['ngRoute']);


    app.config(function ($routeProvider) {

        //index Route
        $routeProvider.when("/", angularAMD.route({
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl',
            controllerUrl: 'Controllers/HomeCtrl'
        }))
    });


    return angularAMD.bootstrap(app);
});
