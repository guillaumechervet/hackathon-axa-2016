var oeup;
(function (oeup) {
    'use strict';
    var ValidateController = (function () {
        function ValidateController($scope, $location, $log) {
            this.validated = false;
            var vm = this;
            $log.info("ValidateController called");
            vm.Types = ["Parking à la journée",
                "Wifi",
                "CoHomeWorking",
                "Machine à laver",
                "Seche linge",
                "Perceuse",
                "Scie",
                "Tournevis",
                "Co-voiturage",
                "Voiture"
            ];
            vm.Model = { Price: 0 };
            vm.submit = function () {
                vm.validated = true;
                toastr.success("Transaction réalisée", "Transaction réalisé avec success");
            };
            vm.goHome = function () {
                $location.path('');
            };
        }
        return ValidateController;
    }());
    oeup.ValidateController = ValidateController;
    var app = angular.module('myapp');
    ValidateController.$inject = ["$scope", "$location", "$log"];
    app.controller('ValidateController', ValidateController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=ValidateController.js.map