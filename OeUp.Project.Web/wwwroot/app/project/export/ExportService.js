var oeup;
(function (oeup) {
    'use strict';
    var ExportService = (function () {
        function ExportService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Export = null;
            this.$log.info("ExportService called");
        }
        ExportService.prototype.save = function (newSuppliers) {
            this.$log.info("ExportService savec called: ");
            var data = {
                Data: newSuppliers
            };
            var _self = this;
            return this.$http.post("/api/Export", data)
                .then(function (response) {
                return response.data.Data;
            });
        };
        ExportService.prototype.getExport = function (id) {
            this.$log.info("ExportService getExport called: " + id);
            this.$log.info(id);
            if (this.Export === null || this.Export.Id !== id) {
                var _self = this;
                return this.$http.get("/api/Export/" + id)
                    .then(function (result) {
                    _self.Export = result.data.Data;
                    return result.data.Data;
                });
            }
            return this.$q.when(this.Export);
        };
        ExportService.prototype.remove = function (id) {
            this.$log.info("ExportService remove called: " + id);
            this.$log.info(id);
            var _self = this;
            return this.$http.delete("/api/Export/" + id)
                .then(function (response) {
                var Exports = _self.Exports;
                if (Exports != null) {
                    var i = -1;
                    for (var index = 0; index < Exports.length; index++) {
                        var element = Exports[index];
                        if (element.Id === id) {
                            i = index;
                            break;
                        }
                    }
                    if (i > -1) {
                        Exports.splice(i, 1);
                    }
                }
                return response.data;
            });
        };
        return ExportService;
    }());
    oeup.ExportService = ExportService;
    var module = angular.module('myapp');
    ExportService.$inject = ["$http", "$log", "$q"];
    module.service("ExportService", ExportService);
})(oeup || (oeup = {}));
//# sourceMappingURL=ExportService.js.map