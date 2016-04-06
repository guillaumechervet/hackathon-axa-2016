/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
module oeup {
'use strict'; 
// register the interceptor as a service
angular.module('myapp').factory('HttpLoaderInterceptor', ['$q', 'Loader', function ($q, loader) {
    return {
        // optional method
        'request': function (config) {

            var method = config.method;

            if (config.headers.method) {
                method = config.headers.method;
                delete config.headers.method;
            }

            if (!config.headers.disableLoader) {

                if (config.headers.loaderMessage) {
                    loader.add(config.headers.loaderMessage);
                    delete config.headers.loaderMessage;
                } else {
                    if (method === "POST" || method === "PUT") {
                        loader.add("Enregistrement...");
                    } else if (method == "DELETE") {
                        loader.add("Supression...");
                    } else {
                        loader.add();
                    }
                }
            }

            if (config.headers.disableLoader !== undefined) {
                delete config.headers.disableLoader;
            }
            

            // do something on success
            return config;
            //return config || $q.when(config);
        },

        // optional method
        'requestError': function (rejection) {
            // do something on error
            loader.clear();
            return $q.reject(rejection);
        },
        // optional method
        'response': function (response) {
            // do something on success
            loader.remove();
            return response || $q.when(response);
        },

        // optional method
        'responseError': function (rejection) {
            // do something on error
            loader.clear();
            return $q.reject(rejection);
        }
    };
}]);

}