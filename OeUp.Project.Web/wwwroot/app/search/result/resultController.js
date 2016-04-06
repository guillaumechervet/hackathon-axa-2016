var oeup;
(function (oeup) {
    'use strict';
    var ResultController = (function () {
        function ResultController($scope, $location, $log, uiGmapGoogleMapApi) {
            'ngInject';
            var vm = this;
            $log.info("ResultController called");
            uiGmapGoogleMapApi.then(function (maps) {
                if (typeof _.contains === 'undefined') {
                    _.contains = _.includes;
                }
                if (typeof _.object === 'undefined') {
                    _.object = _.zipObject;
                }
                maps.visualRefresh = true;
                var boueb = {
                    id: 1,
                    position: {
                        latitude: 48.8965812, longitude: 2.318375999999944
                    },
                    click: function () {
                        $location.url('/rechercher');
                    }
                };
                vm.map.pointList.push(boueb);
                var boueb2 = {
                    id: 2,
                    position: {
                        longitude: 48.8971468, latitude: 2.1845104
                    },
                    click: function () {
                        $location.url('/rechercher');
                    }
                };
                vm.map.pointList.push(boueb2);
            });
            vm.map = { center: { latitude: 48.8965812, longitude: 2.318375999999944 }, zoom: 13, pointList: [], options: { streetViewControl: false } };
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