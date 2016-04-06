var oeup;
(function (oeup) {
    'use strict';
    var MenuController = (function () {
        function MenuController($scope, $location, $log) {
            var vm = this;
            $log.info("OverviewController called");
            vm.isHome = function () {
                var location = $location.path();
                if (location == '/') {
                    return true;
                }
                return false;
            };
            vm.isActive = function (routePath) {
                var location = $location.path();
                if (routePath == '/') {
                    if (location == '/') {
                        return true;
                    }
                }
                else if (location.slice(0, routePath.length) === routePath) {
                    return true;
                }
                return false;
            };
        }
        return MenuController;
    }());
    oeup.MenuController = MenuController;
    var app = angular.module('myapp');
    MenuController.$inject = ["$scope", "$location", "$log"];
    app.controller('MenuController', MenuController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=MenuController.js.map