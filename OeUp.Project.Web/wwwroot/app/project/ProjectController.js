var oeup;
(function (oeup) {
    'use strict';
    var ProjectController = (function () {
        function ProjectController(scope, log, $location, ProjectService) {
            var vm = this;
            this.log = log;
            this.Message = "Animal Details";
            this.log.info("DetailsController called");
            this.Project = ProjectService.Project;
            vm.navAdd = function (id) {
                $location.path("/projet/" + id + "/export/add");
            };
            vm.calculate = function (id) {
                $location.path("/projet/" + id + "/export/add");
            };
        }
        return ProjectController;
    }());
    oeup.ProjectController = ProjectController;
    var app = angular.module('myapp');
    ProjectController.$inject = ["$scope", "$log", "$location", "ProjectService"];
    app.controller('ProjectController', ProjectController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=ProjectController.js.map