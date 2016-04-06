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
            .when('/projet/add', {
			    templateUrl: '/app/project/add-project.html',
			    controller: 'AddProjectController',
                controllerAs: 'vm',
			   resolve: {
				  initProjects: [
						    "ProjectService", (ProjectService) => {
							    return ProjectService.getProjects();
						    }
					    ],
                        initConfiguration: [
                            "ConfigurationService", (ConfigurationService) => { return ConfigurationService.getConfiguration(); }
                        ],
                          initSupplier: [
                            "SupplierService", (SupplierService) => { return SupplierService.getSuppliers(); }
                        ],
                         initSimilarity: [
						    "SimilarityService", (SimilarityService) => {
							    return SimilarityService.getSimilarities();
						    }
					    ]
			    }
		    })
            .when('/projet/:id/export/add', {
			    templateUrl: '/app/project/export/add-export.html',
			    controller: 'AddExportController',
                controllerAs: 'vm',
			    resolve: {
				  initProject:  [
						    "$route", "ProjectService", ($route, ProjectService) => {
							    return ProjectService.getProject($route.current.params.id);
						    }
					    ],
                        initRefOes:  [
						    "RefOeService", (RefOeService) => {
							    return RefOeService.getRefOes();
						    }
					    ]
			    }
		    })
            .when('/projet/:id', {
			    templateUrl: '/app/project/project.html',
			    controller: 'ProjectController',
                controllerAs: 'vm',
			    resolve: {
				  ProjectService: "ProjectService",
					    project: [
						    "$route", "ProjectService", ($route, ProjectService) => {
							    return ProjectService.getProject($route.current.params.id);
						    }
					    ]
			    }
		    })
            .when('/configuration/equipementier', {
			    templateUrl: '/app/configuration/supplier/index.html',
			    controller: 'SupplierController',
                controllerAs: 'vm',
			     resolve: {
				  initSuppliers: [
						    "SupplierService", (SupplierService) => {
							    return SupplierService.getSuppliers();
						    }
					    ],
                  initSuppliersReference: [
						    "SupplierService", (SupplierService) => {
							    return SupplierService.getSuppliersReference();
						    }
					    ]
			    }
		    })
            .when('/configuration/RefOE', {
			    templateUrl: '/app/configuration/refoe/index.html',
			    controller: 'RefOeController',
                controllerAs: 'vm',
			     resolve: {
				  initRefOes:  [
						    "RefOeService", (RefOeService) => {
							    return RefOeService.getRefOes();
						    }
					    ],
                        initTranscos: [
						    "ManufacturerTranscoService", (ManufacturerTranscoService) => {
							    return ManufacturerTranscoService.getTranscos();
						    }
					    ],
                        initSynonymes: [
						    "ManufacturerTranscoService", (ManufacturerTranscoService) => {
							    return ManufacturerTranscoService.getManufacturersReference();
						    }
					    ],
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
            .when('/configuration/trancodification-constructeurs', {
			    templateUrl: '/app/configuration/manufacturerTransco/index.html',
			    controller: 'ManufacturerTranscoController',
                controllerAs: 'vm',
			     resolve: {
				 initTranscos: [
						    "ManufacturerTranscoService", (ManufacturerTranscoService) => {
							    return ManufacturerTranscoService.getTranscos();
						    }
					    ],
                 initManufacturersReference: [
						    "ManufacturerTranscoService", (ManufacturerTranscoService) => {
							    return ManufacturerTranscoService.getManufacturersReference();
						    }
					    ]
			    }
		    })
            .when('/configuration/equipementier-premium', {
			    templateUrl: '/app/configuration/supplier/premium.html',
			    controller: 'ProjectsController',
                controllerAs: 'vm',
			    resolve: {
				  ProjectService: "ProjectService",
					    projects: [
						    "ProjectService", (ProjectService) => {
							    return ProjectService.getProjects();
						    }
					    ]
			    }
		    })
            .when('/configuration/similarite', {
			    templateUrl: '/app/configuration/similarity/add-similarity.html',
			    controller: 'AddSimilarityController',
                controllerAs: 'vm',
			     resolve: {
				  initSimilarity: [
						    "SimilarityService", (SimilarityService) => {
							    return SimilarityService.getSimilarities();
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