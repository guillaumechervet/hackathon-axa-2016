/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IManufacturerTransco.ts"/>
/// <reference path="ManufacturerTranscoService.ts"/>
/// <reference path="IManufacturerReference.ts"/>
/// <reference path="../../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>

module oeup {
    'use strict';

    export interface IManufacturerTranscoController extends ng.IScope {
        Vm: ManufacturerTranscoController;
    }

    export class ManufacturerTranscoController {

        public Model: IManufacturerTransco;
        public Transcos: Array<IManufacturerTransco>;
        public ManufacturersReference : Array<IManufacturerReference>;
        public submit: Function;
        public remove: Function;
        public getTranscoRules: Function;
        public getLabelRules: Function;
        public add: Function;
        public Vm: IManufacturerTranscoController;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService, ManufacturerTranscoService: ManufacturerTranscoService) {
            var vm = this;
            
            
            var validateSupplierReference =function(value: string){
                        var supplierReference = _findSupplierReference(value);
                        if(supplierReference){
                            return { message:"", success:true};
                        }
                        return { message:"Cet équipementier n'existe pas.", success:false};
                };
                      
           vm.getTranscoRules=function(Transco: IManufacturerTransco){
               
                   var validate = function(value: string){
                       
                      /* var val  =validateSupplierReference(value);
                       if(!val.success){
                           return val;
                       }*/
                        
                        for (var index = 0; index < vm.Transcos.length; index++) {
                            var element = vm.Transcos[index];
                            if(element.Transco != null && value != null) {
                                if(element !== Transco && element.Transco.toLowerCase() === value.toLowerCase()){
                                   return { message:'Un élément ne peut pas être en doublons en source.', success:false};
                                }
                            }
                        }
                        if(value && vm.Model.Label && value.toLowerCase() === vm.Model.Label.toLowerCase() ){
                             return { message:'La source ne peut être égale à la cible.', success:false};
                        }
                        
                       return { message:"", success:true};
                    };
               
               var customDest = {
                custom: {
                    validateView:validate,
                    validateModel:validate
                }
            }; 
            
            
               
               var rules = {
                   Dest: ["required", {maxLength:40}, customDest]
                };
            
            return rules.Dest;   
           }
           
           vm.getLabelRules=function(Transco: IManufacturerTransco){
               
                   var validate =function(value : string){
                       
                        var val  =validateSupplierReference(value);
                       if(!val.success){
                           return val;
                       }
                        
                        for (var index = 0; index < vm.Transcos.length; index++) {
                            var element = vm.Transcos[index];
                            if(element.Transco != null && value != null) {
                                if(element !== Transco && element.Transco.toLowerCase() === value.toLowerCase()){
                                    return { message:'Cet élément est présent en source.', success:false};
                                }
                            }
                        }
                        
                        return { message:"", success:true};
                    };
               
               var customDest = {
                custom: {
                    validateView:validate,
                    validateModel:validate
                }
            }; 
               
               var rules = {
                   Dest: ["required", {maxLength:40}, customDest]
                };
            
            return rules.Dest;   
           }
           
           var _findSupplierReference = function name(label:string) :IManufacturerReference {
               if(label){
                var references = ManufacturerTranscoService.ManufacturersReference;
                for (var index = 0; index < references.length; index++) {
                    var element = references[index];
                    if(element.Label.toLowerCase() === label.toLowerCase()){
                        return element;
                    }
                }
               }
               return null;
           }
            
            
            $log.info("ManufacturerTransco called");
            vm.Model ={ Transco:"", Label :"" , HerNr: null };
            vm.Transcos= [];
            vm.ManufacturersReference = ManufacturerTranscoService.ManufacturersReference;
            angular.copy(ManufacturerTranscoService.Transcos, vm.Transcos);

            vm.add = function(form:any){
                if(form.$valid) {
                    var Transco = { Transco:"", Label :"" , HerNr: null };
                    angular.copy<IManufacturerTransco>(vm.Model, Transco);
                    
                    Transco.HerNr = _findSupplierReference(vm.Model.Label).HerNr;
                    
                    vm.Transcos.push(Transco);
                    vm.Model.Transco="";
                    vm.Model.Label="";
                    form.$setPristine(true);
                }
            }
            
            vm.remove = function(Transco:IManufacturerTransco){
                    var index = vm.Transcos.indexOf(Transco);
                    if (index > -1) {
                       vm.Transcos.splice(index, 1);
                    }
            }
           
            vm.submit = function(form:ng.IFormController){
                if(form.$valid) {
                    ManufacturerTranscoService.save(vm.Transcos).then(function(){
                        toastr.success("Sauvegarde Transcos réalisée", "Sauvegarde success");
                    });
                }
            }
            
        }
    }

    var app = angular.module('myapp');
    
    ManufacturerTranscoController.$inject = ["$scope", "$location", "$log", "ManufacturerTranscoService"];

    app.controller('ManufacturerTranscoController',ManufacturerTranscoController);
};