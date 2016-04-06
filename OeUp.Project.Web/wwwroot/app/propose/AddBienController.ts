/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IBien.ts"/>

module oeup {
    'use strict';

    export interface IAddBienController extends ng.IScope {
        Vm: AddBienController;
    }

    export class AddBienController {
         public Biens : Array<IBien>;
         public navAdd : Function;
          
        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("AddBienController called");
            vm.Biens = [];
            vm.Biens.push({
                Titre: 'Parking',
                Photos: [],
                EstLoue: true,
                DateDebut: new Date(2016, 1, 1, 9, 30),
                DateFin: new Date(2016, 1, 1, 18, 30),
                Tarif: 4,
                Frequence: 'chaque jour'
            });
            
            
            vm.navAdd = function(){
                $location.path('/proposer/ajouter');
            }
        }
    }

    var app = angular.module('myapp');
    
    AddBienController.$inject = ["$scope", "$location", "$log"];

    app.controller('AddBienController',AddBienController);
};
