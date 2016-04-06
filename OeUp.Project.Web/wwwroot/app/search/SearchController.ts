/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    export interface ISearchController extends ng.IScope {
        Vm: SearchController;
    }

    export class SearchController {
        public Types : Array<string>;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("SearchController called");
            vm.Types = ["Parking à la journée", "Wifi", "CoHomeWorking", "Machine à laver"];
        }
    }

    var app = angular.module('myapp');
    
    SearchController.$inject = ["$scope", "$location", "$log"];

    app.controller('SearchController',SearchController);
};