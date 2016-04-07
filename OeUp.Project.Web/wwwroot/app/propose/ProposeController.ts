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
                Photos: ['http://www.lettre-gratuite.fr/files/2013/03/place-parking.jpg','http://img0.gtsstatic.com/faits-divers/mal-foutue-cette-place-de-parking_646_w620.jpg'],
                Titre: 'Place de Parking',
                EstLoue: true,
                Tarif: 4,
                DateDebut: new Date(2016,1,1,9,30),
                DateFin : new Date(2016,1,1,18,30),
                Frequence : 'Chaque jour',
                MainPhoto : 'http://localhost:5000/images/place-parking.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail',
                Id : 1
            });
            vm.Biens.push({
                Photos: ['',''],
                Titre: 'Connexion wifi',
                EstLoue: true,
                Tarif: 5,
                DateDebut: new Date(2016,1,1,9,30),
                DateFin : new Date(2016,1,1,18,30),
                Frequence : 'Chaque jour',
                MainPhoto : 'http://localhost:5000/images/wifi.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail',
                Id : 2
            });
            vm.Biens.push({
                Photos: ['',''],
                Titre: 'Espace de travail',
                EstLoue: true,
                Tarif: 3,
                DateDebut: new Date(2016,1,1,9),
                DateFin : new Date(2016,3,1,18),
                Frequence : 'Chauque mois',
                MainPhoto : 'http://localhost:5000/images/bureau.jpg',
                Description: 'Partager une tasse de café avec un collègue vous tente bien. Vous voulez avoir le confort d\'un bureau spacieux et sans vous ruiner. Le coworking est la solution. Dans ce cadre, nous proposons le partage de nos bureaux situé au 420 rue de rouges barres, à Marcq en Baroeul',
                Id : 250 
            });
            
            
            vm.navAdd = function(){
                $location.path('/proposer/ajouter');
            };
            
            vm.edit = function(bienId){
                
                $location.path('/proposer/ajouter');
            };
            
            vm.remove = function(bienId){
                var index = vm.Biens.indexOf(bienId, 0);
                if (index > -1) {
                    vm.Biens.splice(index, 1);
                }
                $location.path('/proposer');
            };
        };
    }

    var app = angular.module('myapp');
    
    ProposeController.$inject = ["$scope", "$location", "$log"];

    app.controller('ProposeController',ProposeController);
};
