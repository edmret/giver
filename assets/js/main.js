require.config({
    packages: [],
    paths: {
        angular: "/bower_components/angular/angular",
        'angular-route': "/bower_components/angular-route/angular-route",
        angularAMD: "/bower_components/angularAMD/angularAMD",
        'ngload': '/bower_components/angularAMD/ngload'
    },
    shim: {
        angular: {
            exports: "angular"
        },
        'angular-route': {
            deps: ["angular"]
        },

        ngload: [
          'angularAMD'
        ],

        angularAMD: {
          deps: ["angular"]
        },
        'app':{
          deps: ["angular"]
        }
    },
    deps: ['app']
});
