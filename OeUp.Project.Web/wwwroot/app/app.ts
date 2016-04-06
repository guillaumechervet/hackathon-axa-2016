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
		    .when('/rechercher', {
			    templateUrl: '/app/search/index.html',
			    controller: 'SearchController',
                controllerAs: 'vm'//,
			    /*resolve: {
				  initProjets: [
						    "ProjectService", (ProjectService) => {
							    return ProjectService.getProjects();
						    }
					    ]
			    }*/
		    })
      
            .when('/proposer', {
			    templateUrl: '/app/propose/index.html',
			    controller: 'ProposeController',
                controllerAs: 'vm',
			   /*  resolve: {
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
			    }*/
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
    

};