/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
    'use strict';

    export interface IMenuController extends ng.IScope {
        Vm: MenuController;
    }

    export class MenuController {

        public isHome : Function;
        public isActive : Function;
            
        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("OverviewController called");
            
            vm.isHome = function () {
                 var location = $location.path();
                     if (location == '/') {
                         return true;
                     }
             	return false;
             };

           vm.isActive = function (routePath) {
                 var location = $location.path();

                 if (routePath == '/') {
                     if (location == '/') {
                         return true;
                     }
                 } else if (location.slice(0, routePath.length) === routePath) {
             		return true;
             	}
             	return false;
             };
            
        }
    }

    var app = angular.module('myapp');
    
    MenuController.$inject = ["$scope", "$location", "$log"];

    app.controller('MenuController',MenuController);
};