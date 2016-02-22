define(['angular','angular-resource','angular-cookies'], function (angular,ngResource, ngCookies) {
  'use strict';
  angular.module('giver.services.authService', ['ngResource','ngCookies'])
    .service('authService', function ($http,$cookies) {

      /**
      the cookie to display if logged in
      */
      var authCookieName = "giverAuth";


      return {
        isLoggedIn: function(){
          return !!$cookies.get(authCookieName);
        }
      };
    });
});
