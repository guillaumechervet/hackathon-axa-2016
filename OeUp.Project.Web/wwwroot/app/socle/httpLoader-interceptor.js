var oeup;
(function (oeup) {
    'use strict';
    angular.module('myapp').factory('HttpLoaderInterceptor', ['$q', 'Loader', function ($q, loader) {
            return {
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
                        }
                        else {
                            if (method === "POST" || method === "PUT") {
                                loader.add("Enregistrement...");
                            }
                            else if (method == "DELETE") {
                                loader.add("Supression...");
                            }
                            else {
                                loader.add();
                            }
                        }
                    }
                    if (config.headers.disableLoader !== undefined) {
                        delete config.headers.disableLoader;
                    }
                    return config;
                },
                'requestError': function (rejection) {
                    loader.clear();
                    return $q.reject(rejection);
                },
                'response': function (response) {
                    loader.remove();
                    return response || $q.when(response);
                },
                'responseError': function (rejection) {
                    loader.clear();
                    return $q.reject(rejection);
                }
            };
        }]);
})(oeup || (oeup = {}));
//# sourceMappingURL=httpLoader-interceptor.js.map