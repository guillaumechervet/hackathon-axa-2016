var oeup;
(function (oeup) {
    'use strict';
    var ManufacturerTranscoService = (function () {
        function ManufacturerTranscoService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Transcos = null;
            this.ManufacturersReference = null;
            this.$log.info("ProjectService called");
        }
        ManufacturerTranscoService.prototype.getTranscos = function () {
            this.$log.info("ProjectService getAnimals called");
            if (this.Transcos === null) {
                var _self = this;
                return this.$http.get("/api/ManufacturerTransco")
                    .then(function (result) {
                    _self.Transcos = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.Transcos);
        };
        ManufacturerTranscoService.prototype.getManufacturersReference = function () {
            this.$log.info("ManufacturerService getManufacturers called");
            if (this.ManufacturersReference === null) {
                var _self = this;
                return this.$http.get("/api/ManufacturerTransco/References")
                    .then(function (result) {
                    _self.ManufacturersReference = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.ManufacturersReference);
        };
        ManufacturerTranscoService.prototype.save = function (newTranscos) {
            this.$log.info("ProjectService remove called: ");
            var data = {
                Data: newTranscos
            };
            var _self = this;
            return this.$http.post("/api/ManufacturerTransco", data)
                .then(function (response) {
                _self.Transcos.length = 0;
                angular.copy(newTranscos, _self.Transcos);
                return response.data;
            });
        };
        return ManufacturerTranscoService;
    }());
    oeup.ManufacturerTranscoService = ManufacturerTranscoService;
    var module = angular.module('myapp');
    ManufacturerTranscoService.$inject = ["$http", "$log", "$q"];
    module.service("ManufacturerTranscoService", ManufacturerTranscoService);
})(oeup || (oeup = {}));
//# sourceMappingURL=ManufacturerTranscoService.js.map