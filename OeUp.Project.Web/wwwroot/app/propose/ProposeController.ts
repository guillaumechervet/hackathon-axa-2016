/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IBien.ts"/>

module oeup {
    'use strict';

    export interface IProposeController extends ng.IScope {
        Vm: ProposeController;
    }

    export class ProposeController {
         public Biens : Array<IBien>;
          
        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("ProposeController called");
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
        }
    }

    var app = angular.module('myapp');
    
    ProposeController.$inject = ["$scope", "$location", "$log"];

    app.controller('ProposeController',ProposeController);
};
