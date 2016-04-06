/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IExport.ts"/>
/// <reference path="../ProjectService.ts"/>
/// <reference path="../../configuration/refoe/IRefOes.ts"/>
/// <reference path="../../configuration/refoe/IRefOe.ts"/>
/// <reference path="../../configuration/refoe/RefOeService.ts"/>


module oeup {
    'use strict';

    export interface IAddExportController extends ng.IScope {
        Vm: AddExportController;
    }

    export class AddExportController {

        public Model: any;
        public submit: Function;
        public DisplayRefOes: Function;
        public DisplayRefOe: Function;
        public onSupplierCheck : Function;
        public getSelectedRefOes : Function;
        public onRefOeChange : Function;
        public Vm: IAddExportController;
        public Rules : any;
        public Project : IProjectDetail;
        public ListRefOes : Array<IRefOe>;
        public RefOes : Array<IRefOes>;
        public RefOeSelected : string;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService, $filter: ng.IFilterService, ProjectService : ProjectService, RefOeService:RefOeService) {
            var vm = this;
            $log.info("OverviewController called");
            vm.Project = ProjectService.Project;
            vm.Model ={ 
                Comment:"", 
                Date: new Date(), 
                Id:null, 
                Title: "",
                SelectedRefOe :null,
                RefOes:{}
         };
         vm.RefOes = RefOeService.RefOes;
            vm.ListRefOes = [];
            
            var selectRefOe = function(id:string) : IRefOe{
                for (var index = 0; index <  vm.ListRefOes.length; index++) {
                    var element =  vm.ListRefOes[index];
                    
                    if(element.Id === id){
                        return element;
                    }
                }
                return null;
            }
            
            var listSelectedRefOes: Array<IRefOe> =[];
            vm.getSelectedRefOes = function(): Array<IRefOe> {
                var results = listSelectedRefOes;
                results.length = 0;
                for(var id in  vm.Model.RefOes){
                    if(vm.Model.RefOes[id]){
                        var refOe =  selectRefOe(id);
                        if(refOe != null) {
                            results.push(refOe);
                        }
                    }
                }
                return results;
            }
            
             vm.DisplayRefOes = function(refOes: IRefOes){
               return refOes.Title + ' - ' + $filter('date')(refOes.Date, 'dd/MM/yyyy');
            };
            
            vm.DisplayRefOe = function (refOe) {
                return refOe.HerNr + ' - ' + refOe.Label + ' - ' + refOe.Manufacturer; 
            };
                        
                      var validate =function(value : string){
                          var exports = ProjectService.Project.Exports;
                        for (var index = 0; index < exports.length; index++) {
                            var element = exports[index];
                            var date1 = $filter('date')(element.Date, 'dd/MM/yyyy');
                            var date2 = $filter('date') (vm.Model.Date, 'dd/MM/yyyy');
                            
                            if(element.Title == value && date1 == date2) {
                               return false;
                            }
                        }
                        return true;
                    };
            
            var customUnicity = {
                custom: {
                    message:'Le couple titre/date doit être unique.', 
                    validateView:validate,
                    validateModel:validate
                }
            }; 
            
            var validateRefOe =function(value : string){
                       
                       if(!vm.Model.SelectedRefOe){
                           return true;
                       }
                       
                       if(vm.getSelectedRefOes().length <=0){
                           return false;
                       }
                        
                        return true;
                    };
            
             var customRefOe = {
                custom: {
                    message:'Une ReOE doit au moins être séléctionné.', 
                    validateView:validateRefOe,
                    validateModel:validateRefOe
                }
            }; 
            
            vm.Rules = {
                Comment:[ {maxLength:1024}],
                Version:["required", {maxLength:40}],
                Date:["required", "date"],
                Title: ["required", {maxLength:40}, customUnicity],
                SimilarityThreshold : ["required","digit", {min:50}, {max:500}],
                Refoe: ["required"],
                RefOeSelected : [customRefOe]
            };
            //vm.Project = ProjectService.Project;
           
            vm.submit = function(form:any){
                if(form.$valid) {
                    
                    // TODO save
                    
                    $location.path("/projet/" + ProjectService.Project.Id);
                }
            }
            
              vm.onSupplierCheck = function(form:any) {
               // Met à jour la validation du champ caché
                 form.uRefOeSelected.$setDirty(true);
                 vm.RefOeSelected = vm.RefOeSelected + "1";
           }
            
            vm.onRefOeChange = function(form:any) {
                
                // Met à jour la validation du champ caché
                 vm.RefOeSelected = vm.RefOeSelected + "1";
                
                // Met a jour la liste
                var selectedSuppliers = vm.Model.SelectedRefOes;      
                
                vm.ListRefOes.length = 0;
                
                if(selectedSuppliers && selectedSuppliers.RefOes) {
                    for (var index = 0; index < selectedSuppliers.RefOes.length; index++) {
                        var element = selectedSuppliers.RefOes[index];
                        vm.ListRefOes.push({
                           Hit : element.Hit,
                            HerNr : element.HerNr,
                            Label: element.Label,
                            Manufacturer: element.Manufacturer,
                            Id: element.Id
                        });
                    }
                    $filter('orderBy')(vm.ListRefOes, 'Label');
                }
            }
            
        }
    }

    var app = angular.module('myapp');
    
    AddExportController.$inject = ["$scope", "$location", "$log", "$filter", "ProjectService", "RefOeService"];

    app.controller('AddExportController',AddExportController);
};