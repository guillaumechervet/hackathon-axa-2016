/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
declare var _:any; // hacky hacky ^^
module oeup {
    'use strict';

    export interface IResultController extends ng.IScope {
        Vm: ResultController;
    }

    export class ResultController {
          public map:any;
          public objects:any;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService,uiGmapGoogleMapApi:any) {
            'ngInject';
            var vm = this;
            $log.info("ResultController called");
            vm.objects = [{
                img :"http://www.lettre-gratuite.fr/files/2013/03/place-parking.jpg",
                texte : "Place sur parking privé, idéal pour se garer au webcenter de Lille",
                price :10,
               
                    id:1,
                     position:{
                        latitude: 48.8965812, longitude: 2.318375999999944
                     },
                class:"white"
            },
            {
                img :"http://img0.gtsstatic.com/faits-divers/mal-foutue-cette-place-de-parking_646_w620.jpg",
                texte : "Place idéalement placé à l'ombre d'un arbre",
                price :15,
                 id:2,
                     position:{
                        latitude: 48.8971468, longitude: 2.1845104
                },
                class:"white"
            }
            
            ];
            
            
            
            
            uiGmapGoogleMapApi.then((maps:any) => {
                // lodash est pété
                if( typeof _.contains === 'undefined' ) {
                    _.contains = _.includes;
                }
                if( typeof _.object === 'undefined' ) {
                    _.object = _.zipObject;
                }
                 maps.visualRefresh = true;
                 vm.objects.forEach((point:any) => {
                     point.click =()=>{
                          $location.url('/valider')
                     };
                     
                     point.mouseover = ()=>{
                          vm.HighlightObject(point);
                     };
                     
                     vm.map.pointList.push(point);
                     
                 });             
                 
            });
            
            vm.map =  {center: { latitude: 48.8965812, longitude: 2.2 }, zoom: 11, pointList: [], options: {streetViewControl: false}};        
            vm.map.markers2Events = {
    mouseover: function (marker, eventName, model, args) {
       vm.HighlightObject(model);
    },
    mouseout: function (marker, eventName, model, args) {
       vm.UnHighlightObject(model);
    }
  };    
        }
        
        vm.HighlightObject = function(point:any){
             
            point.class="black";
        } 
        
        vm.UnHighlightObject = function(point:any){
             
            point.class="white";
        } 
        
    }

    var app = angular.module('myapp');
    
    ResultController.$inject = ["$scope", "$location", "$log","uiGmapGoogleMapApi"];

    app.controller('ResultController',ResultController);
};