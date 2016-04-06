/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="export/IProjectDetail.ts"/>
/// <reference path="ProjectService.ts"/>

module oeup {
    'use strict';

    export interface IProjectController extends ng.IScope {
        Vm: ProjectController;
    }

    export class ProjectController {

        private scope: ng.IScope;
        private log: any;

        public Project: IProjectDetail;
        public Message: string;
        public Vm: IProjectController;
        public navAdd: Function;
        public calculate: Function;

        constructor(scope: any, log: any, $location:any, ProjectService:ProjectService) {
            var vm = this;
            this.log = log;
            this.Message = "Animal Details";
            this.log.info("DetailsController called");
            this.Project = ProjectService.Project;
            
             vm.navAdd = function(id:string){
                $location.path("/projet/" + id + "/export/add");
            }
            
            vm.calculate = function(id:string){
                $location.path("/projet/" + id + "/export/add");
            }
        }
    }

    var app = angular.module('myapp');

    ProjectController.$inject = ["$scope", "$log", "$location", "ProjectService"]

    app.controller('ProjectController',  ProjectController);
};


