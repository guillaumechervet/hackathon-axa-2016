var oeup;
(function (oeup) {
    'use strict';
    var ProposeController = (function () {
        function ProposeController($scope, $location, $log) {
            var vm = this;
            $log.info("ProposeController called");
            vm.Biens = [];
            vm.Biens.push({
                Photos: ["http://localhost:5000/images/Hydrangeas.jpg", "http://localhost:5000/images/Hydrangeas.jpg"],
                Titre: 'Place de Parking',
                EstLoue: true,
                Tarif: 4,
                DateDebut: new Date(2016, 1, 1, 9, 30),
                DateFin: new Date(2016, 1, 1, 18, 30),
                Frequence: 'Chaque jour',
                MainPhoto: 'http://localhost:5000/images/Desert.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail'
            });
            vm.Biens.push({
                Photos: ["", ""],
                Titre: 'Connexion wifi',
                EstLoue: true,
                Tarif: 5,
                DateDebut: new Date(2016, 1, 1, 9, 30),
                DateFin: new Date(2016, 1, 1, 18, 30),
                Frequence: 'Chaque jour',
                MainPhoto: 'http://localhost:5000/images/Hydrangeas.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail'
            });
            vm.Biens.push({
                Photos: ["", ""],
                Titre: 'Parking',
                EstLoue: true,
                Tarif: 3,
                DateDebut: new Date(2016, 1, 1, 9, 30),
                DateFin: new Date(2016, 1, 1, 18, 30),
                Frequence: 'Chaque jour',
                MainPhoto: 'http://localhost:5000/images/Jellyfish.jpg',
                Description: 'Ce parking est à louer pendant mes horaires de travail'
            });
            vm.navAdd = function () {
                $location.path('/proposer/ajouter');
            };
            vm.edit = function () {
                $location.path('/proposer/modifier');
            };
            vm.remove = function () {
                $location.path('/proposer');
            };
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