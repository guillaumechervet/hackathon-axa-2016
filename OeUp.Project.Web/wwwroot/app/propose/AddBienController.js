var oeup;
(function (oeup) {
    'use strict';
    var AddBienController = (function () {
        function AddBienController($scope, $location, $log) {
            var vm = this;
            $log.info("AddBienController called");
            vm.Biens = [];
            vm.navAdd = function () {
                $location.path('/proposer');
            };
        }
        return AddBienController;
    }());
    oeup.AddBienController = AddBienController;
    var app = angular.module('myapp');
    AddBienController.$inject = ["$scope", "$location", "$log"];
    app.controller('AddBienController', AddBienController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=AddBienController.js.map