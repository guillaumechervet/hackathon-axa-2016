var oeup;
(function (oeup) {
    'use strict';
    var AddBienController = (function () {
        function AddBienController($scope, $location, $log) {
            var vm = this;
            $log.info("SearchController called");
        }
        return AddBienController;
    }());
    oeup.AddBienController = AddBienController;
    var app = angular.module('myapp');
    AddBienController.$inject = ["$scope", "$location", "$log"];
    app.controller('AddBienController', AddBienController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=AddBien.js.map