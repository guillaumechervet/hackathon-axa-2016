/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IProject.ts"/>
/// <reference path="ProjectService.ts"/>
/// <reference path="../configuration/supplier/ISuppliers.ts"/>
/// <reference path="../configuration/similarity/SimilarityService.ts"/>
/// <reference path="../configuration/similarity/ISimilarity.ts"/>
/// <reference path="../configuration/ConfigurationService.ts"/>
/// <reference path="../configuration/IConfiguration.ts"/>

/// <reference path="../configuration/supplier/SupplierService.ts"/>
/// <reference path="../configuration/supplier/ISuppliers.ts"/>
/// <reference path="../configuration/supplier/ISupplier.ts"/>

/// <reference path="../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>


module oeup {
    'use strict';

    export interface IAddProjectController extends ng.IScope {
        Vm: AddProjectController;
    }

    export class AddProjectController {

        public Model: any;
        public submit: Function;
        public onSupplierChange : Function;
        public onSupplierCheck : Function;
        public Vm: IAddProjectController;
        public Rules : any;
        public Suppliers : Array<ISuppliers>;
        public ListSuppliers : Array<ISupplierPremium>;
        public Similarities: Array<ISimilarity>;
        public SupplierSelected : string = '';
        public IsEnabled : boolean = false;
        
           public DisplaySupplier : Function;
            public DisplaySimilarity : Function;
            
             public getSelectedSuppliers : Function;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService, $filter: ng.IFilterService, ConfigurationService: ConfigurationService, SupplierService:SupplierService, SimilarityService:SimilarityService, ProjectService:ProjectService) {
            var vm = this;
            $log.info("OverviewController called");
            vm.Model ={ 
                Comment:"", 
                Date: new Date(), 
                Id:null, 
                Title: "",
                Version: ConfigurationService.Configuration.VersionNumber,
                Connector: "",
                SelectedSuppliers:null,
                SelectedSimilarity:null,
                Suppliers:{}
            };
            vm.IsEnabled = ConfigurationService.Configuration.VersionNumber !== '';
            
            var selectSupplier = function(id:string) : ISupplierPremium{
                for (var index = 0; index <  vm.ListSuppliers.length; index++) {
                    var element =  vm.ListSuppliers[index];
                    
                    if(element.HerNr.toString() === id){
                        return element;
                    }
                }
                return null;
            }
            
            var listSelectedSuppliers: Array<ISupplierPremium> =[];
            vm.getSelectedSuppliers = function(): Array<ISupplierPremium> {
                var results = listSelectedSuppliers;
                results.length = 0;
                for(var id in  vm.Model.Suppliers){
                    if(vm.Model.Suppliers[id]){
                        var supplier =  selectSupplier(id);
                        if(supplier != null) {
                            results.push(supplier);
                        }
                    }
                }
                return results;
            }
            
            vm.Suppliers = SupplierService.Suppliers;
            
            /*  { Id:"1", Title:"Similarities1", Date : new Date(), Comment : "", Suppliers : [{ Id:"1",  Label:"Supplier 1"  }, { Id:"2",  Label:"Supplier 2" }]},
                { Id:"2", Title:"Similarities2", Date : new Date(), Comment : "", Suppliers : [{Id:"3",   Label:"Supplier 3" }, { Id:"4",   Label:"Supplier 4" }]}
            ];*/
            
            vm.DisplaySupplier = function(suppliers: ISuppliers){
               return suppliers.Title + ' - ' + $filter('date')(suppliers.Date, 'dd/MM/yyyy');
            }
            
            vm.ListSuppliers = [];
            
             vm.DisplaySimilarity = function(similarity: ISimilarity){
               return similarity.Title + ' - ' + $filter('date')(similarity.Date, 'dd/MM/yyyy');
            }
            
            vm.Similarities = SimilarityService.Similarities;
             /* { Id:"1", Title:"Similarities1", Date : new Date(), Comment : "", Datas : [{  Key:"Key1", Value: "Value2" }]},
                { Id:"2", Title:"Similarities2", Date : new Date(), Comment : "", Datas : [{ Key:"Key1", Value: "Value2" }]}
            ];*/
            
                      var validate =function(value : string){
                        for (var index = 0; index < ProjectService.Projects.length; index++) {
                            var element = ProjectService.Projects[index];
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
            
           var validateSupplier =function(value : string){
                       
                       if(!vm.Model.SelectedSuppliers){
                           return true;
                       }
                       
                       if(vm.getSelectedSuppliers().length <=0){
                           return false;
                       }
                        
                        return true;
                    };
            
             var customSupplier = {
                custom: {
                    message:'Un équipementier doit au moins être séléctionné.', 
                    validateView:validateSupplier,
                    validateModel:validateSupplier
                }
            }; 
                        
            vm.Rules = {
                Comment:[ {maxLength:1024}],
                Version:["required", {maxLength:40}],
                Date:["required", "date"],
                Title: ["required", {maxLength:40}, customUnicity],
                Connector: ["required","digit", {min:0}, {max:10000}],
                Supplier: ["required"],
                Similarity:"required",
                SupplierSelected : [customSupplier]
            };
           
            vm.submit = function(form:ng.IFormController){
                if(form.$valid) {
                    var supplierPremiums = vm.getSelectedSuppliers();
                    
                    var project = {
                        Id : null,
                        Title : vm.Model.Title,
                        Version: vm.Model.Version,
                        Comment: vm.Model.Comment,
                        State: ProjectState.Starting,
                        Connector: parseInt(vm.Model.Connector),
                        Date: vm.Model.Date,
                        SimilarityId: vm.Model.SelectedSimilarity.Id,
                        SuppliersId: vm.Model.SelectedSuppliers.Id,
                        Suppliers : supplierPremiums
                    };
                    
                    ProjectService.save(project).then(function(data){
                        toastr.success("Ajout projet réalisée", "Sauvegarde success");
                       // $location.path("/projet/" + data.Data.Id );
                         $location.path("/projets");
                    })
                                        
                }
            }
            
           vm.onSupplierCheck = function(form:any) {
               // Met à jour la validation du champ caché
                 form.uSupplierSelected.$setDirty(true);
                 vm.SupplierSelected = vm.SupplierSelected + "1";
           }
            
            vm.onSupplierChange = function(form:any) {
                
                // Met à jour la validation du champ caché
                // form.uSupplierSelected.$setDirty(true);
                 vm.SupplierSelected = vm.SupplierSelected + "1";
                
                // Met a jour la liste
                var selectedSuppliers = vm.Model.SelectedSuppliers;      
                
                vm.ListSuppliers.length = 0;
                
                if(selectedSuppliers && selectedSuppliers.Suppliers) {
                    for (var index = 0; index < selectedSuppliers.Suppliers.length; index++) {
                        var element = selectedSuppliers.Suppliers[index];
                        vm.ListSuppliers.push({
                           SupplierId : element.Id,
                            HerNr : element.HerNr,
                            Label: element.Label,
                            Id: null
                        });
                    }
                    $filter('orderBy')(vm.ListSuppliers, 'Label');
                }
            }
        }
    }

    var app = angular.module('myapp');
    
    AddProjectController.$inject = ["$scope", "$location", "$log", '$filter', "ConfigurationService", "SupplierService", "SimilarityService", "ProjectService"];

    app.controller('AddProjectController',AddProjectController);
};