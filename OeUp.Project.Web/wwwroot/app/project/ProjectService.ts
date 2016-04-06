/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>
/// <reference path="IProject.ts"/>
/// <reference path="export/IProjectDetail.ts"/>
/// <reference path="../socle/ICommandResult.ts"/>

module oeup {
    'use strict';

    export class ProjectService {
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private $q: ng.IQService) {
            this.$log.info("ProjectService called");
        }

        public Projects:Array<IProject> = null;
        public getProjects() : ng.IHttpPromiseCallbackArg<ICommandResult<Array<IProject>>> {
            this.$log.info("ProjectService getProjects called");
            if(this.Projects === null) {
                var _self = this;
                    return this.$http.get<ICommandResult<Array<IProject>>>("/api/Project")
                    .then((result: ng.IHttpPromiseCallbackArg<ICommandResult<Array<IProject>>>) => {
                        _self.Projects = result.data.Data;
                        return result.data;
                    });
                }
             return this.$q.when(this.Projects);
        }
        
        public save(newSuppliers:IProject) {
            this.$log.info("ProjectService savec called: ");
            var data = {
                Data: newSuppliers
            }
            var _self = this;
            return this.$http.post<ICommandResult<IProject>>("/api/Project", data)
                .then(function(response) {
                    _self.Projects.push(response.data.Data);
                    return response.data.Data;
                });
        }
            
            
        public Project:IProjectDetail = null;
         
        public getProject(id: string) : ng.IHttpPromiseCallbackArg<IProjectDetail> {
            this.$log.info("ProjectService getProject called: " + id);
            this.$log.info(id);
            
            if(this.Project === null || this.Project.Id !== id){
                var _self = this;
                return this.$http.get<ICommandResult<IProjectDetail>>("/api/Project/" + id)
                    .then((result) => {
                     _self.Project = result.data.Data;
                    return result.data.Data;
                });
            }
            
            return this.$q.when(this.Project);
        }
        
        public remove(id: string) {
            this.$log.info("ProjectService remove called: " + id);
            this.$log.info(id);
              var _self = this;
            return this.$http.delete("/api/Project/" + id)
                .then(function(response) {
                    
                    var projects = _self.Projects;
                    if(projects != null){
                        
                        var i = -1;
                        for (var index = 0; index < projects.length; index++) {
                            var element = projects[index];
                            if(element.Id === id){
                                i = index;
                                break;
                            }
                        }
                        
                        if (i > -1) {
                            projects.splice(i, 1);
                        }
                    }
                    
                    return response.data;
                });
        }
        
       
        
    }

    var module = angular.module('myapp');

    ProjectService.$inject = ["$http", "$log","$q"];
    // this code can be used with uglify
    module.service("ProjectService", ProjectService);
}
