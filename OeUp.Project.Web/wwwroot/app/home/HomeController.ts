/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    export interface IHomeController extends ng.IScope {
        Vm: HomeController;
    }

    export class HomeController {

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("OverviewController called");
        }
    }

    var app = angular.module('myapp');
    
    HomeController.$inject = ["$scope", "$location", "$log"];

    app.controller('HomeController',HomeController);
};