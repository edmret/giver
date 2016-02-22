require.config({
    packages: [],
    paths: {
        angular: "../bower_components/angular/angular",
        'angular-animate': "../bower_components/angular-animate/angular-animate",
        'angular-route': "../bower_components/angular-route/angular-route",
        'angular-aria': "../bower_components/angular-aria/angular-aria",
        'angular-messages': "../bower_components/angular-messages/angular-messages",
        'angular-material': "../bower_components/angular-material/angular-material",
        angularAMD: "../bower_components/angularAMD/angularAMD",
        'ngload': '../bower_components/angularAMD/ngload',
        'ngmap': '../bower_components/ngmap/build/scripts/ng-map',
        'geolocation': '../bower_components/angularjs-geolocation/src/geolocation',
        'angular-resource':'../bower_components/angular-resource/angular-resource',
        'angular-sanitize':'../bower_components/angular-sanitize/angular-sanitize',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies'
    },
    shim: {
        angular: {
            exports: "angular"
        },

        'angular-animate': {
            deps: [
              "angular"
            ]
        },

        'angular-sanitize': {
          deps: [
            "angular"
          ]
        },

        'angular-cookies': {
          deps: [
            "angular"
          ]
        },

        'geolocation': {
          deps: [
            "angular"
          ]
        },


        'angular-messages': {
            deps: [
              "angular"
            ]
        },

        'angular-resource': {
          deps: [
            "angular"
          ]
        },

        'angular-aria': {
            deps: [
              "angular"
            ]
        },

        'angular-material': {
            deps: [
              "angular",
              "angular-animate",
              "angular-messages",
              "angular-aria"
            ]
        },

        'angular-animate': {
            deps: [
              "angular"
            ]
        },


        'angular-route': {
            deps: ["angular"]
        },

        ngload: [
          'angularAMD'
        ],

        ngmap: {
          deps: [
            "angular"
          ]
        },

        angularAMD: {
          deps: ["angular"]
        },
        'app':{
          deps: ["angular"]
        }
    },
    deps: ['app']
});
