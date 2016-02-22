define(['angularAMD', 'angular-route', 'angular-material','angular-resource', 'angular-sanitize', 'angular-cookies','ngmap', 'geolocation',
//controllers
'controllers/HomeCtrl',
'controllers/MapController',
'controllers/CollaborateNewCtrl',
'controllers/collectCtrl',

//services
'services/authservice'

],
function (angularAMD, ngRoute, ngMaterial, ngResource, ngSanitize, ngCookies, ngMap, geolocation,
  HomeCtrl,
  MapController,
  CollaborateNewCtrl,
  collectCtrl,
  authService
) {

    var app = angular.module("giver", [
      //directives
      'ngRoute',
      'ngResource',
      'ngCookies',
      'ngMaterial',
      'ngMap',
      'geolocation',
      //controllers
      'giver.controllers.HomeCtrl',
      'giver.controllers.MapController',
      'giver.controllers.CollaborateNewCtrl',
      'giver.controllers.collectCtrl',

      //services
      'giver.services.authService'
  ]);


    app.config(function ($routeProvider, $httpProvider, $mdThemingProvider) {

        /*var resolver = function(access) {
          return {
            load: function($q, authService ) {

              if (access && authService.isLoggedIn()) { // fire $routeChangeSuccess
                var deferred = $q.defer();
                deferred.resolve();
                return deferred.promise;
              } else { // fire $routeChangeError
                return $q.reject("/login");
              }
            }
          }
        };*/

        //index Route
        /*$routeProvider
        .when("/", angularAMD.route({
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl',
            controllerUrl: 'controllers/HomeCtrl'
        }))

        .when("/login", angularAMD.route({
            templateUrl: '/views/collaborate_new.html',
            controller: 'CollaborateNewCtrl',
            controllerUrl: 'controllers/CollaborateNewCtrl'
            //resolve: resolver(false)
        }))

        .when("/collect", angularAMD.route({
            templateUrl: '/views/collect.html',
            controller: 'collectCtrl',
            controllerUrl: 'controllers/collectCtrl'
            //resolve: resolver(true)
        }));*/

        $routeProvider
        .when("/", {
            //templateUrl: 'home.html',
            template: "<md-toolbar md-scroll-shrink ng-if=\"true\" class=\"page-header\">\n" +
            "<div class=\"md-toolbar-tools initial-header-toolbar max-width-container\"><a href=\"#/\" class=\"logo\">Giver</a></div></md-toolbar>\n" +
            "<main class=\"main\">\n" +
            "  <section class=\"map-section\">\n" +
            "    <h2><span class=\"ico\"><md-icon md-svg-src=\"images/radar.svg\" cass=\"icon-title\" aria-label=\"deliver\" /></span>Someone needs your help, hug them with a supply!</h2>\n" +
            "    <p>here are the nearest collectors for you</p>\n" +
            "    <div ng-controller=\"MapController\" class=\"map-wrap\">\n" +
            "      <ng-map center=\"current-location\" zoom=\"12\" styles=\"[{stylers:[{hue:'#2C7597'},{visibility:'simplified'},{gamma:0.5},{weight:0.5}]},{elementType:'labels',stylers:[{visibility:'on'}]},{featureType:'water',stylers:[{color:'#61c6f4'}]}]\">\n" +
            "        \n" +
            "      </ng-map>\n" +
            "    </div>\n" +
            "  </section>\n" +
            "  <section class=\"collaborate-section\">\n" +
            "    <h2><span class=\"ico\"><md-icon md-svg-src=\"images/greentech.svg\" cass=\"icon-title\" aria-label=\"deliver\"/> </span>I'm part of logistics</h2>\n" +
            "    <div class=\"custom-button-grid\"><a href=\"#/collect\" class=\"new-collaborator md-button\"><span class=\"ico\"><md-icon md-svg-src=\"images/handshake.svg\" cass=\"icon-title\" aria-label=\"deliver\" /></span>Collector!</a><a href=\"#/deliver/index\" class=\"new-center md-button\"><span class=\"ico\"><md-icon md-svg-src=\"images/delivery.svg\" cass=\"icon-title\" aria-label=\"deliver\" /></span>Deliver man</a><a href=\"#/center/index\" class=\"new-center md-button\"><span class=\"ico\"><md-icon md-svg-src=\"images/product.svg\" cass=\"icon-title\" aria-label=\"deliver\" /></span>Collector Center!</a></div>\n" +
            "  </section>\n" +
            "</main>",
            controller: 'HomeCtrl'
        })

        .when("/login",{
            //templateUrl: '/views/collaborate_new.html',
            template: "<form action=\"auth/login\" method=\"post\">\n" +
            "  <fieldset layout=\"column\" ng-cloak=\"ng-cloak\" layout-padding=\"layout-padding\" class=\"md-inline-form\">\n" +
            "    <div><md-input-container>\n" +
            "      <label for=\"email\">E-mail:</label>\n" +
            "      <input type=\"email\" id=\"email\" name=\"email\"/></md-input-container>\n" +
            "    </div>\n" +
            "    <div><md-input-container>\n" +
            "      <label for=\"password\">Password:</label>\n" +
            "      <input type=\"password\" id=\"password\" name=\"password\"/></md-input-container>\n" +
            "    </div>\n" +
            "    <div><md-button class=\"md-raised md-primary\">Sign up</md-button></div>\n" +
            "  </fieldset>\n" +
            "</form>\n" +
            "<main class=\"main\"></main>",
            controller: 'CollaborateNewCtrl'
            //resolve: resolver(false)
        })

        .when("/collect", {
            templateUrl: '/views/collect.html',
            controller: 'collectCtrl',
            template: "<md-toolbar md-scroll-shrink ng-if=\"true\" class=\"page-header\">\n" +
            "<div class=\"md-toolbar-tools initial-header-toolbar max-width-container\"><a href=\"#/\" class=\"logo\">Giver</a></div></md-toolbar>\n" +
            "<main class=\"main\">\n" +
            "  <h1> <span class=\"ico\"><md-icon md-svg-src=\"images/handshake.svg\" cass=\"icon-title\" aria-label=\"deliver\" /></span> Product Registration</h1>\n" +
            "  <fieldset layout=\"column\" ng-cloak=\"ng-cloak\" layout-padding=\"layout-padding\" class=\"md-inline-form\">\n" +
            "    <div><md-input-container>\n" +
            "      <label for=\"search\">Search:</label>\n" +
            "      <input type=\"search\" id=\"search-product-type\" name=\"search\" ng-model=\"searcWord\"/></md-input-container>\n" +
            "    </div>\n" +
            "    <div></div>\n" +
            "  </fieldset>\n" +
            "  <ul class=\"category-list\">\n" +
            "    <li><a class=\"medicine-ico\">Medicines</a></li>\n" +
            "    <li><a class=\"victuals-ico\">Victuals</a></li>\n" +
            "    <li><a class=\"helpers-ico\">Helpers</a></li>\n" +
            "  </ul>\n" +
            "</main>"
            //resolve: resolver(true)
        });


        //request interceptor for the response
        /*$httpProvider.interceptors.push(function($q) {
          return {
           'request': function(config) {
               // same as above
            },

            'response': function(response) {
               //debugger;
            }
          };
        });*/

    });


    return angularAMD.bootstrap(app);
});
