var oeup;
(function (oeup) {
    'use strict';
    angular.module('myapp').factory('HttpExceptionInterceptor', ['$q', function ($q) {
            return {
                responseError: function (response) {
                    if (response.status >= 400) {
                        toastr.error("Une erreur inattendue est survenue.", "Erreur serveur");
                    }
                    return $q.reject(response);
                }
            };
        }]);
})(oeup || (oeup = {}));
//# sourceMappingURL=httpException-interceptor.js.map