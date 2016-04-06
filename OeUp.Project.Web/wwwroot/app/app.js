var oeup;
(function (oeup) {
    'use strict';
    var app = angular.module('myapp', [
        'ngAnimate',
        'ngRoute',
        'ui.bootstrap',
        'ngFileUpload',
        'mw.validation'
    ]);
    app.config(["$routeProvider", "$locationProvider", '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
            $httpProvider.interceptors.push('HttpLoaderInterceptor');
            $httpProvider.interceptors.push('HttpDateInterceptor');
            $httpProvider.interceptors.push('HttpExceptionInterceptor');
            $locationProvider.html5Mode(true).hashPrefix('!');
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
                .when('/proposer', {
                templateUrl: '/app/propose/index.html',
                controller: 'ProposeController',
                controllerAs: 'vm',
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