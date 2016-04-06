var oeup;
(function (oeup) {
    'use strict';
    var SearchController = (function () {
        function SearchController($scope, $location, $log) {
            var vm = this;
            $log.info("SearchController called");
        }
        return SearchController;
    }());
    oeup.SearchController = SearchController;
    var app = angular.module('myapp');
    SearchController.$inject = ["$scope", "$location", "$log"];
    app.controller('SearchController', SearchController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=SearchController.js.map