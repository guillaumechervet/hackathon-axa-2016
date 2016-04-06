/// <reference path="../../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="ISupplier.ts"/>
/// <reference path="ISuppliers.ts"/>
/// <reference path="SupplierService.ts"/>
/// <reference path="../../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>

module oeup {
    'use strict';

    export interface ISupplierController extends ng.IScope {
        Vm: SupplierController;
    }

    export class SupplierController {

        public Model: ISuppliers;
        public File: string;
        public submit: Function;
        public onChange: Function;
        public Vm: ISupplierController;
        public Rules : any;
        public Suppliers:Array<ISuppliers>;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService, SupplierService: SupplierService) {
            var vm = this;
            $log.info("OverviewController called");
            vm.Model = { 
                Id: null,
                Title:'',
                Comment:'',
                Date: new Date(),
                Suppliers: []
            };
            vm.File = '';
            vm.Suppliers = SupplierService.Suppliers;
            
            var isFileError = false;
            
            var validateFile = function(){
                if(vm.Model.Suppliers.length > 0){
                    return { success:true, message: ''};
                }
                return { success:false, message: vm.File};
            }
            
            var customFile = {
                custom: {
                    message: vm.File, 
                    validateView:validateFile,
                    validateModel:validateFile
                }
            }; 
                        
            vm.Rules = {
                Comment:[{maxLength:1024}],
                Date:["required", "date"],
                Title: ["required", {maxLength:40}],
                File : ["required", customFile]
            };
            
            var _excelFindByColIndex = function (element: any, index: number): string{
                var _index = 0;
                for(var name in element) {
                     if(_index === index){
                       return element[name];
                     }
                      _index++;
                   }
                   return '';
            };
            
            var _getSupplierId = function(numeqp: string) : number
            {
                  for (var j = 0; j < SupplierService.SuppliersReference.length; j++) {
                                        var supplierReference = SupplierService.SuppliersReference[j];
                                        if(supplierReference.Label.toUpperCase() === numeqp.toUpperCase())
                                        {
                                            return parseInt(supplierReference.Id);
                                        }
                                    }
                                    
                                    return null;
            }
           
           var nbTry = 0;
            vm.onChange = function(data:any){
                nbTry++;
                $log.info("SupplierController onChange excel called");
                vm.File = 'loading';
                $scope.form.uFile.$setDirty(true);
                try {
                    vm.Model.Suppliers.length = 0;
                    if(data !== undefined && data !== null) {
                        for(var name in  data) {
                            var tab = data[name];
                            for (var index = 0; index < tab.length; index++) {
                                var element = tab[index];
                                
                                var numeqp = _excelFindByColIndex(element, 2);
                                var isPrioritary = _excelFindByColIndex(element, 5).toLowerCase() === "x";
                                
                                // Vérifier que le NUMEQP est bien dans la liste des NUMEQP de référence
                                if(isPrioritary && numeqp !== '') {
                                    var supplierId = _getSupplierId(numeqp);
                                    
                                    if(supplierId === null) {
                                        throw new Error("Equipementier " + numeqp  + " non présent dans la liste de référence");
                                    } 
                                    vm.Model.Suppliers.push({Label:numeqp, HerNr: supplierId, Id:null }); 
                                }
                            }
                        }
                    }
                    // Gestion erreur si pas d'équipementier trouvé en topper
                    var numberResult = vm.Model.Suppliers.length;
                    if(vm.Model.Suppliers.length <= 0 ){
                        throw new Error("Aucun équipementier toppé n'a été trouvé");
                    }
                     vm.File = 'success'  +nbTry;
                    return  numberResult + ' équipementier chargé';
                } catch(error){
                    $log.error("SupplierController onChange called error ");
                    vm.File = "Impossible de parser ce fichier : " + error.message;
                    vm.Model.Suppliers.length = 0;
                } 
                
                
                
            }
           
            vm.submit = function(form:any){
                if(form.$valid) {
                   SupplierService.save(vm.Model).then(function(){
                       
                       vm.File = '';
                       vm.Model.Id= null;
                        vm.Model.Title= null;
                        vm.Model.Comment= null;
                        vm.Model.Date= new Date();
                        vm.Model.Suppliers.length = 0;
                        form.$setPristine(true);
                         toastr.success("Ajout équipementier réalisée", "Sauvegarde success");
                   });
                                     
                }
            }
            
        }
    }

    var app = angular.module('myapp');
    
    SupplierController.$inject = ["$scope", "$location", "$log", "SupplierService"];

    app.controller('SupplierController',SupplierController);
};