/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    export interface IAddBienController extends ng.IScope {
        Vm: AddBienController;
    }

    export class AddBienController {

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("SearchController called");
        }
    }

    var app = angular.module('myapp');
    
    AddBienController.$inject = ["$scope", "$location", "$log"];

    app.controller('AddBienController',AddBienController);
};