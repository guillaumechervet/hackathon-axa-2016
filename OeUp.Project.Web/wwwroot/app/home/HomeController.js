var oeup;
(function (oeup) {
    'use strict';
    var HomeController = (function () {
        function HomeController($scope, $location, $log) {
            var vm = this;
            $log.info("OverviewController called");
        }
        return HomeController;
    }());
    oeup.HomeController = HomeController;
    var app = angular.module('myapp');
    HomeController.$inject = ["$scope", "$location", "$log"];
    app.controller('HomeController', HomeController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=HomeController.js.map