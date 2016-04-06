var oeup;
(function (oeup) {
    'use strict';
    var AddBienController = (function () {
        function AddBienController($scope, $location, $log) {
            var vm = this;
            $log.info("AddBienController called");
            vm.Biens = [];
            vm.Biens.push({
                Titre: 'Parking',
                Photos: [],
                EstLoue: true,
                DateDebut: new Date(2016, 1, 1, 9, 30),
                DateFin: new Date(2016, 1, 1, 18, 30),
                Tarif: 4,
                Frequence: 'chaque jour'
            });
            vm.navAdd = function () {
                $location.path('/proposer/ajouter');
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
//# sourceMappingURL=ProposerController.js.map