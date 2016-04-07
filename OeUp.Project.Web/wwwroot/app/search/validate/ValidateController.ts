/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="../../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>

module oeup {
    'use strict';

    export interface IValidateController extends ng.IScope {
        Vm: ValidateController;
    }

    export class ValidateController {
        public Types : Array<string>;
        public Model : any;
        public validated: boolean = false;  
        public submit: Function;
        public goHome: Function;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("ValidateController called");
            vm.Types = ["Parking à la journée", 
            "Wifi", 
            "CoHomeWorking", 
            "Machine à laver",
            "Seche linge",
            "Perceuse",
            "Scie",
            "Tournevis",
            "Co-voiturage",
            "Voiture"
            ];
            
             vm.Model = {Price:0};
             
             vm.submit = function(){
                  vm.validated = true;
                  toastr.success("Transaction réalisée", "Transaction réalisé avec success");
             };
             
              vm.goHome = function(){
                  $location.path('/');
             };
        }
    }

    var app = angular.module('myapp');
    
    ValidateController.$inject = ["$scope", "$location", "$log"];

    app.controller('ValidateController',ValidateController);
};