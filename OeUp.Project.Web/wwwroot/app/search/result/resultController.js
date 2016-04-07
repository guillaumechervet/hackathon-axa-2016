var oeup;
(function (oeup) {
    'use strict';
    var ResultController = (function () {
        function ResultController($scope, $location, $log, uiGmapGoogleMapApi) {
            'ngInject';
            var vm = this;
            $log.info("ResultController called");
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
            vm.Model = { Type: "Parking à la journée", Ou: "Paris, France" };
            vm.objects = [{
                    img: "images/place-parking.jpg",
                    user: "images/photo1.png",
                    texte: "Place sur parking privé, idéal pour se garer au webcenter de Lille.",
                    dispo: "Disponible du 28/03/2016 au 31/03/2017 de 10h à 16h.",
                    icon: '/images/72orange.png',
                    price: 72,
                    id: 1,
                    position: {
                        latitude: 48.8965812, longitude: 2.318375999999944
                    },
                    class: "white"
                },
                {
                    img: "images/mal-foutue-cette-place-de-parking_646_w620.jpg",
                    user: "images/photo2.png",
                    texte: "Place à l'ombre d'un arbre.",
                    dispo: "Disponible du 28/03/2016 au 29/04/2016 de 10h à 11h.",
                    icon: '/images/80orange.png',
                    price: 80,
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
                        point.icon = '/images/' + point.price + 'bleu.png';
                    };
                    point.mouseout = function () {
                        point.icon = '/images/' + point.price + 'orange.png';
                    };
                    vm.map.pointList.push(point);
                });
            });
            vm.map = { center: { latitude: 48.8965812, longitude: 2.2 }, zoom: 10, pointList: [], options: { streetViewControl: false } };
            vm.map.markers2Events = {
                mouseover: function (marker, eventName, model, args) {
                    vm.HighlightObject(model);
                },
                mouseout: function (marker, eventName, model, args) {
                    vm.UnHighlightObject(model);
                }
            };
            vm.HighlightObject = function (point) {
                point.class = "black";
            };
            vm.UnHighlightObject = function (point) {
                point.class = "white";
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