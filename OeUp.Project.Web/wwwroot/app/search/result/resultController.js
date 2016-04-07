var oeup;
(function (oeup) {
    'use strict';
    var ResultController = (function () {
        function ResultController($scope, $location, $log, uiGmapGoogleMapApi) {
            'ngInject';
            this.HighlightObject = function (point) {
                point.class = "black";
            };
            this.UnHighlightObject = function (point) {
                point.class = "white";
            };
            var vm = this;
            $log.info("ResultController called");
            vm.objects = [{
                    img: "http://www.lettre-gratuite.fr/files/2013/03/place-parking.jpg",
                    texte: "Place sur parking privé, idéal pour se garer au webcenter de Lille",
                    price: 10,
                    id: 1,
                    position: {
                        latitude: 48.8965812, longitude: 2.318375999999944
                    },
                    class: "white"
                },
                {
                    img: "http://img0.gtsstatic.com/faits-divers/mal-foutue-cette-place-de-parking_646_w620.jpg",
                    texte: "Place idéalement placé à l'ombre d'un arbre",
                    price: 15,
                    id: 2,
                    position: {
                        latitude: 48.8971468, longitude: 2.1845104
                    },
                    class: "white"
                }
            ];
            uiGmapGoogleMapApi.then(function (maps) {
                if (typeof _.contains === 'undefined') {
                    _.contains = _.includes;
                }
                if (typeof _.object === 'undefined') {
                    _.object = _.zipObject;
                }
                maps.visualRefresh = true;
                vm.objects.forEach(function (point) {
                    point.click = function () {
                        $location.url('/valider');
                    };
                    point.mouseover = function () {
                        vm.HighlightObject(point);
                    };
                    vm.map.pointList.push(point);
                });
            });
            vm.map = { center: { latitude: 48.8965812, longitude: 2.2 }, zoom: 11, pointList: [], options: { streetViewControl: false } };
            vm.map.markers2Events = {
                mouseover: function (marker, eventName, model, args) {
                    vm.HighlightObject(model);
                },
                mouseout: function (marker, eventName, model, args) {
                    vm.UnHighlightObject(model);
                }
            };
        }
        return ResultController;
    }());
    oeup.ResultController = ResultController;
    var app = angular.module('myapp');
    ResultController.$inject = ["$scope", "$location", "$log", "uiGmapGoogleMapApi"];
    app.controller('ResultController', ResultController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=resultController.js.map