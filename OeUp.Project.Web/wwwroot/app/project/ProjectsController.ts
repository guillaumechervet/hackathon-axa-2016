/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IProject.ts"/>
/// <reference path="EnumProjectState.ts"/>
/// <reference path="ProjectService.ts"/>
/// <reference path="../../../bower_components/DefinitelyTyped/toastr/toastr.d.ts"/>

module oeup {
    'use strict';

    export interface IProjectsController extends ng.IScope {
        Vm: ProjectsController;
    }

    export class ProjectsController {

        private scope: ng.IScope;
        
        public Projects: IProject[];
        public Message: string;
        public navigate: Function;
        public navAdd: Function;
        public getStatus: Function;
        public remove: Function;
        public Vm: IProjectsController;
        public Sort :any;
         public order: Function;

        constructor($scope: any, $location: ng.ILocationService, $log: ng.ILogService, $window:ng.IWindowService, ProjectService : ProjectService) {
            var vm = this;
            vm.Message = "Overview";
            $log.info("OverviewController called");
            vm.Projects = ProjectService.Projects;
            
            var order = function(predicate) {
                vm.Sort.reverse = (vm.Sort.predicate === predicate) ? !vm.Sort.reverse : false;
                vm.Sort.predicate = predicate;
            };
            
            vm.Sort = {
                predicate : 'Date',
                reverse : true,
                order: order
            }
            
            vm.navigate = function(id:string){
                $location.path("/projet/" + id);
            }
            
             vm.navAdd = function(){
                $location.path("/projet/add");
            }
            
             vm.getStatus = function(project: IProject) : string{
               if(project.State == ProjectState.Starting){
                   return "Oeuf";
               }
               if(project.State == ProjectState.Running){
                   return "En cours";
               }
               return "Terminé";
            }
            
            vm.remove = function (id:string) {
                var isOk = $window.confirm("Etes-vous sur de supprimer cet élément?")     
                if(isOk){
                    ProjectService.remove(id).then(function(){
                          toastr.success("Supression projet réalisée", "Supression success");
                    })
                }
            }
            
        }
    }

    var app = angular.module('myapp');
    
    ProjectsController.$inject = ["$scope", "$location", "$log","$window", "ProjectService"];

    app.controller('ProjectsController', ProjectsController);
};