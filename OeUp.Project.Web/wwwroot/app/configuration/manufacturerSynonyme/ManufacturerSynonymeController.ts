/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IManufacturerSynonyme.ts"/>
/// <reference path="ManufacturerSynonymeService.ts"/>
/// <reference path="../../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>

module oeup {
    'use strict';

    export interface IManufacturerSynonymeController extends ng.IScope {
        Vm: ManufacturerSynonymeController;
    }

    export class ManufacturerSynonymeController {

        public Model: IManufacturerSynonyme;
        public Synonymes: Array<IManufacturerSynonyme>;
       // public ManufacturersReference : Array<IManufacturerReference>;
        public submit: Function;
        public remove: Function;
        public getSourceRules: Function;
        public getDestRules: Function;
        public add: Function;
        public Vm: IManufacturerSynonymeController;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService, ManufacturerSynonymeService: ManufacturerSynonymeService, ManufacturerTranscoService:any ) {
            var vm = this;
            
            
            var validateSupplierReference =function(value: string){
                        var supplierReference = _findSupplierReference(value);
                        if(supplierReference){
                            return { message:"", success:true};
                        }
                        return { message:"Cet équipementier n'existe pas.", success:false};
                };
                      
           vm.getSourceRules=function(synonyme: IManufacturerSynonyme){
               
                   var validate = function(value: string){
                       
                       var val  =validateSupplierReference(value);
                       if(!val.success){
                           return val;
                       }
                        
                        for (var index = 0; index < vm.Synonymes.length; index++) {
                            var element = vm.Synonymes[index];
                            if(element.Source != null && value != null) {
                                if(element !== synonyme && element.Source.toLowerCase() === value.toLowerCase()){
                                   return { message:'Un élément ne peut pas être en doublons en source.', success:false};
                                }
                            }
                        }
                        if(value && vm.Model.Dest && value.toLowerCase() === vm.Model.Dest.toLowerCase() ){
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
           
           vm.getDestRules=function(synonyme: IManufacturerSynonyme){
               
                   var validate =function(value : string){
                       
                        var val  =validateSupplierReference(value);
                       if(!val.success){
                           return val;
                       }
                        
                        for (var index = 0; index < vm.Synonymes.length; index++) {
                            var element = vm.Synonymes[index];
                            if(element.Source != null && value != null) {
                                if(element !== synonyme && element.Source.toLowerCase() === value.toLowerCase()){
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
           
           var _findSupplierReference = function name(label:string) :any {
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
            
            
            $log.info("OverviewController called");
            vm.Model ={ Source: "", Dest: "" , HerNrDest : null, HerNrSource: null };
            vm.Synonymes= [];
         //   vm.ManufacturersReference = ManufacturerTranscoService.ManufacturersReference;
            angular.copy(ManufacturerSynonymeService.Synonymes, vm.Synonymes);
            vm.add = function(form:any){
                if(form.$valid) {
                    
                    
                    var synonyme = { Source:"", Dest :"" , HerNrDest : null, HerNrSource: null };
                    angular.copy<IManufacturerSynonyme>(vm.Model, synonyme);
                    
                    synonyme.HerNrDest = _findSupplierReference(vm.Model.Dest).HerNr;
                    synonyme.HerNrSource = _findSupplierReference(vm.Model.Source).HerNr;
                    
                    vm.Synonymes.push(synonyme);
                    vm.Model.Dest="";
                    vm.Model.Source="";
                    form.$setPristine(true);
                }
            }
            
            vm.remove = function(synonyme:IManufacturerSynonyme){
                    var index = vm.Synonymes.indexOf(synonyme);
                    if (index > -1) {
                       vm.Synonymes.splice(index, 1);
                    }
            }
           
            vm.submit = function(form:ng.IFormController){
                if(form.$valid) {
                    ManufacturerSynonymeService.save(vm.Synonymes).then(function(){
                        toastr.success("Sauvegarde synonymes réalisée", "Sauvegarde success");
                    });
                }
            }
            
        }
    }

    var app = angular.module('myapp');
    
    ManufacturerSynonymeController.$inject = ["$scope", "$location", "$log", "ManufacturerSynonymeService", "ManufacturerSynonymeService"];

    app.controller('ManufacturerSynonymeController',ManufacturerSynonymeController);
};