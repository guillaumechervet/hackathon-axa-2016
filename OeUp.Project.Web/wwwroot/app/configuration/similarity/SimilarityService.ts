/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="ISimilarity.ts"/>
/// <reference path="../../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class SimilarityService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("SimilarityService called");
        }

        public Similarities:Array<ISimilarity> = null;
        public getSimilarities() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<ISimilarity>>> {
            this.$log.info("SimilarityService getSuppliers called");
            if(this.Similarities === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<ISimilarity>>>("/api/Similarity")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<ISimilarity>>>) => {
                        _self.Similarities = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.Similarities);
        }
        
        public save(newSuppliers:ISimilarity ) {
            this.$log.info("SimilarityService savec called: ");
            var data = {
                Data: newSuppliers
            }
            var _self = this;
            return this.$http.post<ICommandResult<ISimilarity>>("/api/Similarity", data)
                .then(function(response) {
                    _self.Similarities.push(response.data.Data);
                    return response.data;
                });
        }
        
    }

    var module = angular.module('myapp');

    SimilarityService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("SimilarityService", SimilarityService);
}
