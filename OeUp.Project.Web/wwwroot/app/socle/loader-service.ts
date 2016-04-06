/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
     'use strict'; 
angular.module('myapp').factory('Loader', [ '$rootScope',
    function ($rootScope) {

        var numberLoader = 0;
		
		  $rootScope.$on("$routeChangeSuccess", function (scope, next, current) {
		      remove();
			});

    $rootScope.$on('$routeChangeStart', function (next, current) {
        add();
		});
 
    function add(message: string=null) {
        if (message) {
            $rootScope.loader.message = message;
        }

            numberLoader += 1;
            setLoader();
        }

    function remove() {

            if (numberLoader > 0) {
                numberLoader -= 1;
                setLoader();
            }
        }

        function clear() {
            numberLoader = 0;
            setLoader();
        }

        $rootScope.loader = { isLoading: false, message: "Chargement..." };

        function setLoader() {
            if (numberLoader <= 0) {
                $rootScope.loader.isLoading = false;
                $rootScope.loader.message = "Chargement...";
            } else {
                $rootScope.loader.isLoading = true;
            }
        }

        return {
            add: add,
            remove: remove,
            clear: clear
        };


    } ]);


}