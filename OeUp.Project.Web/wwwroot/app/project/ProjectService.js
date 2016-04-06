var oeup;
(function (oeup) {
    'use strict';
    var ProjectService = (function () {
        function ProjectService($http, $log, $q) {
            this.$http = $http;
            this.$log = $log;
            this.$q = $q;
            this.Projects = null;
            this.Project = null;
            this.$log.info("ProjectService called");
        }
        ProjectService.prototype.getProjects = function () {
            this.$log.info("ProjectService getProjects called");
            if (this.Projects === null) {
                var _self = this;
                return this.$http.get("/api/Project")
                    .then(function (result) {
                    _self.Projects = result.data.Data;
                    return result.data;
                });
            }
            return this.$q.when(this.Projects);
        };
        ProjectService.prototype.save = function (newSuppliers) {
            this.$log.info("ProjectService savec called: ");
            var data = {
                Data: newSuppliers
            };
            var _self = this;
            return this.$http.post("/api/Project", data)
                .then(function (response) {
                _self.Projects.push(response.data.Data);
                return response.data.Data;
            });
        };
        ProjectService.prototype.getProject = function (id) {
            this.$log.info("ProjectService getProject called: " + id);
            this.$log.info(id);
            if (this.Project === null || this.Project.Id !== id) {
                var _self = this;
                return this.$http.get("/api/Project/" + id)
                    .then(function (result) {
                    _self.Project = result.data.Data;
                    return result.data.Data;
                });
            }
            return this.$q.when(this.Project);
        };
        ProjectService.prototype.remove = function (id) {
            this.$log.info("ProjectService remove called: " + id);
            this.$log.info(id);
            var _self = this;
            return this.$http.delete("/api/Project/" + id)
                .then(function (response) {
                var projects = _self.Projects;
                if (projects != null) {
                    var i = -1;
                    for (var index = 0; index < projects.length; index++) {
                        var element = projects[index];
                        if (element.Id === id) {
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
        };
        return ProjectService;
    }());
    oeup.ProjectService = ProjectService;
    var module = angular.module('myapp');
    ProjectService.$inject = ["$http", "$log", "$q"];
    module.service("ProjectService", ProjectService);
})(oeup || (oeup = {}));
//# sourceMappingURL=ProjectService.js.map