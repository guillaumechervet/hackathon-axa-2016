var oeup;
(function (oeup) {
    'use strict';
    var SimilarityService = (function () {
        function SimilarityService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Similarities = null;
            this.$log.info("SimilarityService called");
        }
        SimilarityService.prototype.getSimilarities = function () {
            this.$log.info("SimilarityService getSuppliers called");
            if (this.Similarities === null) {
                var _self = this;
                return this.$http.get("/api/Similarity")
                    .then(function (result) {
                    _self.Similarities = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.Similarities);
        };
        SimilarityService.prototype.save = function (newSuppliers) {
            this.$log.info("SimilarityService savec called: ");
            var data = {
                Data: newSuppliers
            };
            var _self = this;
            return this.$http.post("/api/Similarity", data)
                .then(function (response) {
                _self.Similarities.push(response.data.Data);
                return response.data;
            });
        };
        return SimilarityService;
    }());
    oeup.SimilarityService = SimilarityService;
    var module = angular.module('myapp');
    SimilarityService.$inject = ["$http", "$log", "$q"];
    module.service("SimilarityService", SimilarityService);
})(oeup || (oeup = {}));
//# sourceMappingURL=SimilarityService.js.map