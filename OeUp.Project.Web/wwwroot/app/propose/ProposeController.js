var oeup;
(function (oeup) {
    'use strict';
    var ProposeController = (function () {
        function ProposeController($scope, $location, $log) {
            var vm = this;
            $log.info("SearchController called");
        }
        return ProposeController;
    }());
    oeup.ProposeController = ProposeController;
    var app = angular.module('myapp');
    ProposeController.$inject = ["$scope", "$location", "$log"];
    app.controller('ProposeController', ProposeController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=ProposeController.js.map