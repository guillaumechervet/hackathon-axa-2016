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
                .when('/projets', {
                templateUrl: '/app/project/projects.html',
                controller: 'ProjectsController',
                controllerAs: 'vm',
                resolve: {
                    initProjets: [
                        "ProjectService", function (ProjectService) {
                            return ProjectService.getProjects();
                        }
                    ]
                }
            })
                .when('/configuration/synonymes-constructeurs', {
                templateUrl: '/app/configuration/manufacturerSynonyme/index.html',
                controller: 'ManufacturerSynonymeController',
                controllerAs: 'vm',
                resolve: {
                    initSynonymes: [
                        "ManufacturerSynonymeService", function (ManufacturerSynonymeService) {
                            return ManufacturerSynonymeService.getSynonymes();
                        }
                    ],
                    initManufacturersReference: [
                        "ManufacturerTranscoService", function (ManufacturerTranscoService) {
                            return ManufacturerTranscoService.getManufacturersReference();
                        }
                    ]
                }
            })
                .otherwise({
                redirectTo: '/'
            });
        }
    ]);
    app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
            $scope.uploadFiles = function (files, errFiles) {
                $scope.files = files;
                $scope.errFiles = errFiles;
                angular.forEach(files, function (file) {
                    file.upload = Upload.upload({
                        url: '/api/file/upload',
                        data: { file: file }
                    });
                    file.upload.then(function (response) {
                        $timeout(function () {
                            file.result = response.data;
                        });
                    }, function (response) {
                        if (response.status > 0)
                            $scope.errorMsg = response.status + ': ' + response.data;
                    }, function (evt) {
                        file.progress = Math.min(100, parseInt((100.0 * evt.loaded / evt.total).toString()));
                    });
                });
            };
        }]);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=app.js.map