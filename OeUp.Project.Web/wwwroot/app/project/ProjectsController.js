var oeup;
(function (oeup) {
    'use strict';
    var ProjectsController = (function () {
        function ProjectsController($scope, $location, $log, $window, ProjectService) {
            var vm = this;
            vm.Message = "Overview";
            $log.info("OverviewController called");
            vm.Projects = ProjectService.Projects;
            var order = function (predicate) {
                vm.Sort.reverse = (vm.Sort.predicate === predicate) ? !vm.Sort.reverse : false;
                vm.Sort.predicate = predicate;
            };
            vm.Sort = {
                predicate: 'Date',
                reverse: true,
                order: order
            };
            vm.navigate = function (id) {
                $location.path("/projet/" + id);
            };
            vm.navAdd = function () {
                $location.path("/projet/add");
            };
            vm.getStatus = function (project) {
                if (project.State == oeup.ProjectState.Starting) {
                    return "Oeuf";
                }
                if (project.State == oeup.ProjectState.Running) {
                    return "En cours";
                }
                return "Terminé";
            };
            vm.remove = function (id) {
                var isOk = $window.confirm("Etes-vous sur de supprimer cet élément?");
                if (isOk) {
                    ProjectService.remove(id).then(function () {
                        toastr.success("Supression projet réalisée", "Supression success");
                    });
                }
            };
        }
        return ProjectsController;
    }());
    oeup.ProjectsController = ProjectsController;
    var app = angular.module('myapp');
    ProjectsController.$inject = ["$scope", "$location", "$log", "$window", "ProjectService"];
    app.controller('ProjectsController', ProjectsController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=ProjectsController.js.map