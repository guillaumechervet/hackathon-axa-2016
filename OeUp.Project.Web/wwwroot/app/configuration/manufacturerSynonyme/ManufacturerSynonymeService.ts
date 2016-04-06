/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IManufacturerSynonyme.ts"/>
/// <reference path="../../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class ManufacturerSynonymeService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("ProjectService called");
        }

 public Synonymes:Array<IManufacturerSynonyme> = null;

        public getSynonymes() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<IManufacturerSynonyme>>> {
            this.$log.info("ProjectService getAnimals called");
            if(this.Synonymes === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<IManufacturerSynonyme>>>("/api/ManufacturerSynonyme")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<IManufacturerSynonyme>>>) => {
                        _self.Synonymes = result.data.Data;
                        return result.data;
                    });
                }
                  return this.$q.when(this.Synonymes);
        }
        
        public save(newSynonymes:Array<IManufacturerSynonyme> ) {
            this.$log.info("ProjectService remove called: ");
            var data = {
                Data: newSynonymes
            }
            var _self = this;
            return this.$http.post("/api/ManufacturerSynonyme", data)
                .then(function(response) {
                    _self.Synonymes.length = 0;
                    angular.copy(newSynonymes, _self.Synonymes)
                    return response.data;
                });
        }
        
    }

    var module = angular.module('myapp');

    ManufacturerSynonymeService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("ManufacturerSynonymeService", ManufacturerSynonymeService);
}
