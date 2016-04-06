var oeup;
(function (oeup) {
    'use strict';
    var RefOeService = (function () {
        function RefOeService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.RefOes = null;
            this.$log.info("RefOeService called");
        }
        RefOeService.prototype.getRefOes = function () {
            this.$log.info("RefOeService getRefOes called");
            if (this.RefOes === null) {
                var _self = this;
                return this.$http.get("/api/RefOe")
                    .then(function (result) {
                    _self.RefOes = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.RefOes);
        };
        RefOeService.prototype.save = function (newRefOes) {
            this.$log.info("RefOeService savec called: ");
            var data = {
                Data: newRefOes
            };
            var _self = this;
            return this.$http.post("/api/RefOe", data)
                .then(function (response) {
                _self.RefOes.push(response.data.Data);
                return response.data;
            });
        };
        return RefOeService;
    }());
    oeup.RefOeService = RefOeService;
    var module = angular.module('myapp');
    RefOeService.$inject = ["$http", "$log", "$q"];
    module.service("RefOeService", RefOeService);
})(oeup || (oeup = {}));
//# sourceMappingURL=RefOeService.js.map