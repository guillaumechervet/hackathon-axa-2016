/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IExport.ts"/>
/// <reference path="IExportDetail.ts"/>
/// <reference path="../../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class ExportService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("ExportService called");
        }
        
        public save(newSuppliers:IExport) {
            this.$log.info("ExportService savec called: ");
            var data = {
                Data: newSuppliers
            }
            var _self = this;
            return this.$http.post<ICommandResult<IExport>>("/api/Export", data)
                .then(function(response) {
                 //   _self.Exports.push(response.data.Data);
                    return response.data.Data;
                });
        }
            
            
        public Export:IExportDetail = null;
         
        public getExport(id: string) : ng.IHttpPromiseCallbackArg<IExportDetail> {
            this.$log.info("ExportService getExport called: " + id);
            this.$log.info(id);
            
            if(this.Export === null || this.Export.Id !== id){
                var _self = this;
                return this.$http.get<ICommandResult<IExportDetail>>("/api/Export/" + id)
                    .then((result) => {
                     _self.Export = result.data.Data;
                    return result.data.Data;
                });
            }
            
            return this.$q.when(this.Export);
        }
        
        public remove(id: string) {
            this.$log.info("ExportService remove called: " + id);
            this.$log.info(id);
              var _self = this;
            return this.$http.delete("/api/Export/" + id)
                .then(function(response) {
                    
                    var Exports = _self.Exports;
                    if(Exports != null){
                        
                        var i = -1;
                        for (var index = 0; index < Exports.length; index++) {
                            var element = Exports[index];
                            if(element.Id === id){
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
        }
        
       
        
    }

    var module = angular.module('myapp');

    ExportService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("ExportService", ExportService);
}
