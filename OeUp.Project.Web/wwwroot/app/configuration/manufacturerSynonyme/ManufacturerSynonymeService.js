var oeup;
(function (oeup) {
    'use strict';
    var ManufacturerSynonymeService = (function () {
        function ManufacturerSynonymeService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Synonymes = null;
            this.$log.info("ProjectService called");
        }
        ManufacturerSynonymeService.prototype.getSynonymes = function () {
            this.$log.info("ProjectService getAnimals called");
            if (this.Synonymes === null) {
                var _self = this;
                return this.$http.get("/api/ManufacturerSynonyme")
                    .then(function (result) {
                    _self.Synonymes = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.Synonymes);
        };
        ManufacturerSynonymeService.prototype.save = function (newSynonymes) {
            this.$log.info("ProjectService remove called: ");
            var data = {
                Data: newSynonymes
            };
            var _self = this;
            return this.$http.post("/api/ManufacturerSynonyme", data)
                .then(function (response) {
                _self.Synonymes.length = 0;
                angular.copy(newSynonymes, _self.Synonymes);
                return response.data;
            });
        };
        return ManufacturerSynonymeService;
    }());
    oeup.ManufacturerSynonymeService = ManufacturerSynonymeService;
    var module = angular.module('myapp');
    ManufacturerSynonymeService.$inject = ["$http", "$log", "$q"];
    module.service("ManufacturerSynonymeService", ManufacturerSynonymeService);
})(oeup || (oeup = {}));
//# sourceMappingURL=ManufacturerSynonymeService.js.map