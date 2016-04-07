var oeup;
(function (oeup) {
    'use strict';
    var SearchController = (function () {
        function SearchController($scope, $location, $log) {
            var vm = this;
            $log.info("SearchController called");
            vm.Types = ["Parking à la journée",
                "Wifi",
                "CoHomeWorking",
                "Machine à laver",
                "Seche linge",
                "Perceuse",
                "Scie",
                "Tournevis",
                "Co-voiturage",
                "Voiture",
                "Raquette de tennis"
            ];
            vm.Model = { Price: 0 };
            vm.submit = function () {
                $location.path('/resultat');
            };
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