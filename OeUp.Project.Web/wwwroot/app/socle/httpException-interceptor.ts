/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>

module oeup {
'use strict'; 
    // register the interceptor as a service
    angular.module('myapp').factory('HttpExceptionInterceptor', ['$q', function ($q) {

        return {
            // optional method
            responseError: function (response) {
                if (response.status >= 400/* && response.config.url.indexOf(params.baseUrl) != -1*/) {
                	//exceptionService.setIsInError(true);
                	toastr.error("Une erreur inattendue est survenue.", "Erreur serveur");
                }

                return $q.reject(response);
            }
        };
    }]);
}
