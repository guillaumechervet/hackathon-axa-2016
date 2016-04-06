var oeup;
(function (oeup) {
    'use strict';
    var ConfigurationService = (function () {
        function ConfigurationService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Configuration = null;
            this.$log.info("ConfigurationService called");
        }
        ConfigurationService.prototype.getConfiguration = function () {
            this.$log.info("ConfigurationService getConfiguration called");
            if (this.Configuration === null) {
                var _self = this;
                return this.$http.get("/api/Configuration")
                    .then(function (result) {
                    _self.Configuration = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.Configuration);
        };
        return ConfigurationService;
    }());
    oeup.ConfigurationService = ConfigurationService;
    var module = angular.module('myapp');
    ConfigurationService.$inject = ["$http", "$log", "$q"];
    module.service("ConfigurationService", ConfigurationService);
})(oeup || (oeup = {}));
//# sourceMappingURL=ConfigurationService.js.map