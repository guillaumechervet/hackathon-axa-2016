/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IBien.ts"/>

module oeup {
    'use strict';

    export interface IProposeController extends ng.IScope {
        Vm: ProposeController;
    }

    export class ProposeController {
         public Biens : Array<IBien>;
         public navAdd : Function;
         public edit : Function;
         public remove : Function;
          
        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService) {
            var vm = this;
            $log.info("ProposeController called");
            vm.Biens = [];
            vm.Biens.push({
                Photos: ["http://localhost:5000/images/Hydrangeas.jpg","http://localhost:5000/images/Hydrangeas.jpg"],
                Titre: 'Place de Parking',
                EstLoue: true,
                Tarif: 4,
                DateDebut: new Date(2016,1,1,9,30),
                DateFin : new Date(2016,1,1,18,30),
                Frequence : 'Chaque jour',
                MainPhoto : 'http://localhost:5000/images/Desert.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail' 
            })
            vm.Biens.push({
                Photos: ["",""],
                Titre: 'Connexion wifi',
                EstLoue: true,
                Tarif: 5,
                DateDebut: new Date(2016,1,1,9,30),
                DateFin : new Date(2016,1,1,18,30),
                Frequence : 'Chaque jour',
                MainPhoto : 'http://localhost:5000/images/Hydrangeas.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail' 
            })
            vm.Biens.push({
                Photos: ["",""],
                Titre: 'Parking',
                EstLoue: true,
                Tarif: 3,
                DateDebut: new Date(2016,1,1,9,30),
                DateFin : new Date(2016,1,1,18,30),
                Frequence : 'Chaque jour',
                MainPhoto : 'http://localhost:5000/images/Jellyfish.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail' 
            })
            
            
            vm.navAdd = function(){
                $location.path('/proposer/ajouter');
            }
            
            vm.edit = function(){
                $location.path('/proposer/modifier');
            }
            
            vm.remove = function(){
                $location.path('/proposer');
            }
        }
    }

    var app = angular.module('myapp');
    
    ProposeController.$inject = ["$scope", "$location", "$log"];

    app.controller('ProposeController',ProposeController);
};
