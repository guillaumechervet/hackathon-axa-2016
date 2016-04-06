/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    export interface IProposeController extends ng.IScope {
        Vm: ProposeController;
    }

    export class ProposeController {

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("SearchController called");
        }
    }

    var app = angular.module('myapp');
    
    ProposeController.$inject = ["$scope", "$location", "$log"];

    app.controller('ProposeController',ProposeController);
};