var oeup;
(function (oeup) {
    'use strict';
    angular.module('myapp').factory('HttpDateInterceptor', ['$q', function ($q) {
            var dateTimeReviver = function (value) {
                var a;
                if (typeof value === 'string') {
                    a = /([0-9]+)-([0-9]+)-([0-9]+)T.*/.exec(value);
                    if (a) {
                        return new Date(value);
                    }
                }
                return value;
            };
            var convertStringDateToDateObject = function (origin) {
                if (typeof origin === 'string') {
                    return dateTimeReviver(origin);
                }
                for (var propertyName in origin) {
                    var value = origin[propertyName];
                    if (typeof value === 'string') {
                        origin[propertyName] = dateTimeReviver(value);
                    }
                    else if (typeof value === 'object') {
                        convertStringDateToDateObject(value);
                    }
                }
                return origin;
            };
            return {
                response: function (response) {
                    if (response.data) {
                        response.data = convertStringDateToDateObject(response.data);
                    }
                    return response;
                }
            };
        }]);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=httpDate-interceptor.js.map