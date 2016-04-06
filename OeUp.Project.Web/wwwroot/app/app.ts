/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    var app = angular.module('myapp', [
        'ngAnimate',
        'ngRoute',
        'ui.bootstrap',
        'ngFileUpload',
        'mw.validation',
        'uiGmapgoogle-maps'
    ]);

    app.config(["$routeProvider", "$locationProvider", '$httpProvider','uiGmapGoogleMapApiProvider', ($routeProvider, $locationProvider,$httpProvider,uiGmapGoogleMapApiProvider) => {
        
        $httpProvider.interceptors.push('HttpLoaderInterceptor');
        $httpProvider.interceptors.push('HttpDateInterceptor');
        $httpProvider.interceptors.push('HttpExceptionInterceptor');
        $locationProvider.html5Mode(true).hashPrefix('!');
        
        uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyA_JkeKrjvKkqqCcXYhQXRIEoUFIgs6iRY',
                v: '3', //defaults to latest 3.X anyhow
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
                controllerAs: 'vm'//,
			    /*resolve: {
				  initProjets: [
						    "ProjectService", (ProjectService) => {
							    return ProjectService.getProjects();
						    }
					    ]
			    }*/
		    })
            .when('/resultat', {
			    templateUrl: '/app/search/result/index.html',
			    controller: 'ResultController',
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
            .otherwise({
                      redirectTo: '/'
                  });
	    }
    ]);
    

};