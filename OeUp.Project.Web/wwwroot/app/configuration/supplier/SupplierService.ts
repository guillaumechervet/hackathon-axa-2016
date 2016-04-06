/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="ISupplier.ts"/>
/// <reference path="ISuppliers.ts"/>
/// <reference path="ISupplierReference.ts"/>
/// <reference path="../../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class SupplierService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("SupplierService called");
        }

        public Suppliers:Array<ISuppliers> = null;
        public getSuppliers() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<ISuppliers>>> {
            this.$log.info("SupplierService getSuppliers called");
            if(this.Suppliers === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<ISuppliers>>>("/api/Supplier")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<ISuppliers>>>) => {
                        _self.Suppliers = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.Suppliers);
        }
        
        public SuppliersReference:Array<ISupplierReference> = null;
        public getSuppliersReference() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<ISupplierReference>>> {
            this.$log.info("SupplierService getSuppliers called");
            if(this.SuppliersReference === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<ISupplierReference>>>("/api/Supplier/References")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<ISupplierReference>>>) => {
                        _self.SuppliersReference = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.SuppliersReference);
        }
        
        public save(newSuppliers:ISuppliers ) {
            this.$log.info("SupplierService savec called: ");
            var data = {
                Data: newSuppliers
            }
            var _self = this;
            return this.$http.post<ICommandResult<ISuppliers>>("/api/Supplier", data)
                .then(function(response) {
                    
                    _self.Suppliers.push(response.data.Data);
                    return response.data;
                });
        }
        
    }

    var module = angular.module('myapp');

    SupplierService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("SupplierService", SupplierService);
}
