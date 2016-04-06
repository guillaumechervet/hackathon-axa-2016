/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
declare var _:any; // hacky hacky ^^
module oeup {
    'use strict';

    export interface IResultController extends ng.IScope {
        Vm: ResultController;
    }

    export class ResultController {
          public map:any;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService,uiGmapGoogleMapApi:any) {
            'ngInject';
            var vm = this;
            $log.info("ResultController called");
            
            
            
            
            uiGmapGoogleMapApi.then((maps:any) => {
                // lodash est pété
                if( typeof _.contains === 'undefined' ) {
                    _.contains = _.includes;
                }
                if( typeof _.object === 'undefined' ) {
                    _.object = _.zipObject;
                }
                 maps.visualRefresh = true;

                 
            });
            
            vm.map =  {center: { latitude: 48.8965812, longitude: 2.318375999999944 }, zoom: 13, pointList: [], options: {streetViewControl: false}};
            

        
            
            
        }
    }

    var app = angular.module('myapp');
    
    ResultController.$inject = ["$scope", "$location", "$log","uiGmapGoogleMapApi"];

    app.controller('ResultController',ResultController);
};