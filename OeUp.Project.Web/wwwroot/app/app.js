var oeup;
(function (oeup) {
    'use strict';
    var app = angular.module('myapp', [
        'ngAnimate',
        'ngRoute',
        'ui.bootstrap',
        'ngFileUpload',
        'mw.validation',
        'uiGmapgoogle-maps',
        'google.places'
    ]);
    app.config(["$routeProvider", "$locationProvider", '$httpProvider', 'uiGmapGoogleMapApiProvider', function ($routeProvider, $locationProvider, $httpProvider, uiGmapGoogleMapApiProvider) {
            $httpProvider.interceptors.push('HttpLoaderInterceptor');
            $httpProvider.interceptors.push('HttpDateInterceptor');
            $httpProvider.interceptors.push('HttpExceptionInterceptor');
            $locationProvider.html5Mode(true).hashPrefix('!');
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyA_JkeKrjvKkqqCcXYhQXRIEoUFIgs6iRY',
                v: '3',
                libraries: 'weather,geometry,visualization'
            });
            $routeProvider.when('/', {
                templateUrl: '/app/home/index.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
                .when('/rechercher', {
                templateUrl: '/app/search/index.html',
                controller: 'SearchController',
                controllerAs: 'vm'
            })
                .when('/resultat', {
                templateUrl: '/app/search/result/index.html',
                controller: 'ResultController',
                controllerAs: 'vm'
            })
                .when('/valider', {
                templateUrl: '/app/search/validate/index.html',
                controller: 'ValidateController',
                controllerAs: 'vm'
            })
                .when('/proposer', {
                templateUrl: '/app/propose/index.html',
                controller: 'ProposeController',
                controllerAs: 'vm'
            })
                .when('/proposer/ajouter', {
                templateUrl: '/app/propose/addBien.html',
                controller: 'AddBienController',
                controllerAs: 'vm'
            })
                .otherwise({
                redirectTo: '/'
            });
        }
    ]);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=app.js.map