var oeup;
(function (oeup) {
    'use strict';
    var ProposeController = (function () {
        function ProposeController($scope, $location, $log) {
            var vm = this;
            $log.info("ProposeController called");
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