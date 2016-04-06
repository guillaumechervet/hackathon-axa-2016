/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IRefOe.ts"/>
/// <reference path="IRefOes.ts"/>
/// <reference path="../../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class RefOeService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("RefOeService called");
        }

        public RefOes:Array<IRefOes> = null;
        public getRefOes() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<IRefOes>>> {
            this.$log.info("RefOeService getRefOes called");
            if(this.RefOes === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<IRefOes>>>("/api/RefOe")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<IRefOes>>>) => {
                        _self.RefOes = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.RefOes);
        }
        
        public save(newRefOes:IRefOes ) {
            this.$log.info("RefOeService savec called: ");
            var data = {
                Data: newRefOes
            }
            var _self = this;
            return this.$http.post<ICommandResult<IRefOes>>("/api/RefOe", data)
                .then(function(response) {
                    
                    _self.RefOes.push(response.data.Data);
                    return response.data;
                });
        }
        
    }

    var module = angular.module('myapp');

    RefOeService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("RefOeService", RefOeService);
}
