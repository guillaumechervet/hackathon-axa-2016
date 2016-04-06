/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IConfiguration.ts"/>
/// <reference path="../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class ConfigurationService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("ConfigurationService called");
        }

        public Configuration:IConfiguration = null;
        public getConfiguration() : ng.IHttpPromiseCallbackArg<ICommandResult<IConfiguration>> {
            this.$log.info("ConfigurationService getConfiguration called");
            if(this.Configuration === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<IConfiguration>>("/api/Configuration")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<IConfiguration>>) => {
                        _self.Configuration = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.Configuration);
        }
        
    }

    var module = angular.module('myapp');

    ConfigurationService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("ConfigurationService", ConfigurationService);
}
