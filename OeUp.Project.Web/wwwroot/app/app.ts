/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    var app = angular.module('myapp', [
        'ngAnimate',
        'ngRoute',
        'ui.bootstrap',
        'ngFileUpload',
        'mw.validation'
    ]);

    app.config(["$routeProvider", "$locationProvider", '$httpProvider', ($routeProvider, $locationProvider,$httpProvider) => {
        
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
						    "ProjectService", (ProjectService) => {
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
						    "ManufacturerSynonymeService", (ManufacturerSynonymeService) => {
							    return ManufacturerSynonymeService.getSynonymes();
						    }
					    ],
                  initManufacturersReference: [
						    "ManufacturerTranscoService", (ManufacturerTranscoService) => {
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
    $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: '/api/file/upload',//'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
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
    }
}]);

};