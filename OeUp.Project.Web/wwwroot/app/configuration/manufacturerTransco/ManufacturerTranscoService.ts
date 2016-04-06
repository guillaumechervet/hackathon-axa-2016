/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IManufacturerTransco.ts"/>
/// <reference path="IManufacturerReference.ts"/>
/// <reference path="../../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class ManufacturerTranscoService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("ProjectService called");
        }

 public Transcos:Array<IManufacturerTransco> = null;

        public getTranscos() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<IManufacturerTransco>>> {
            this.$log.info("ProjectService getAnimals called");
            if(this.Transcos === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<IManufacturerTransco>>>("/api/ManufacturerTransco")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<IManufacturerTransco>>>) => {
                        _self.Transcos = result.data.Data;
                        return result.data;
                    });
                }
                  return this.$q.when(this.Transcos);
        }
        
         public ManufacturersReference:Array<IManufacturerReference> = null;
        public getManufacturersReference() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<IManufacturerReference>>> {
            this.$log.info("ManufacturerService getManufacturers called");
            if(this.ManufacturersReference === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<IManufacturerReference>>>("/api/ManufacturerTransco/References")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<IManufacturerReference>>>) => {
                        _self.ManufacturersReference = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.ManufacturersReference);
        }
        
        public save(newTranscos:Array<IManufacturerTransco> ) {
            this.$log.info("ProjectService remove called: ");
            var data = {
                Data: newTranscos
            }
            var _self = this;
            return this.$http.post("/api/ManufacturerTransco", data)
                .then(function(response) {
                    _self.Transcos.length = 0;
                    angular.copy(newTranscos, _self.Transcos)
                    return response.data;
                });
        }
        
    }

    var module = angular.module('myapp');

    ManufacturerTranscoService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("ManufacturerTranscoService", ManufacturerTranscoService);
}
