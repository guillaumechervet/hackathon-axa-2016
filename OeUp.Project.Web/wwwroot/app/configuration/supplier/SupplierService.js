var oeup;
(function (oeup) {
    'use strict';
    var SupplierService = (function () {
        function SupplierService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Suppliers = null;
            this.SuppliersReference = null;
            this.$log.info("SupplierService called");
        }
        SupplierService.prototype.getSuppliers = function () {
            this.$log.info("SupplierService getSuppliers called");
            if (this.Suppliers === null) {
                var _self = this;
                return this.$http.get("/api/Supplier")
                    .then(function (result) {
                    _self.Suppliers = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.Suppliers);
        };
        SupplierService.prototype.getSuppliersReference = function () {
            this.$log.info("SupplierService getSuppliers called");
            if (this.SuppliersReference === null) {
                var _self = this;
                return this.$http.get("/api/Supplier/References")
                    .then(function (result) {
                    _self.SuppliersReference = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.SuppliersReference);
        };
        SupplierService.prototype.save = function (newSuppliers) {
            this.$log.info("SupplierService savec called: ");
            var data = {
                Data: newSuppliers
            };
            var _self = this;
            return this.$http.post("/api/Supplier", data)
                .then(function (response) {
                _self.Suppliers.push(response.data.Data);
                return response.data;
            });
        };
        return SupplierService;
    }());
    oeup.SupplierService = SupplierService;
    var module = angular.module('myapp');
    SupplierService.$inject = ["$http", "$log", "$q"];
    module.service("SupplierService", SupplierService);
})(oeup || (oeup = {}));
//# sourceMappingURL=SupplierService.js.map