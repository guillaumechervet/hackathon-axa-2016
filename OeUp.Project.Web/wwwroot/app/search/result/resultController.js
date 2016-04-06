var oeup;
(function (oeup) {
    'use strict';
    var ResultController = (function () {
        function ResultController($scope, $location, $log, uiGmapGoogleMapApi) {
            var _this = this;
            var vm = this;
            $log.info("ResultController called");
            uiGmapGoogleMapApi.then(function (maps) {
                if (typeof _.contains === 'undefined') {
                    _.contains = _.includes;
                }
                if (typeof _.object === 'undefined') {
                    _.object = _.zipObject;
                }
                _this.map = { center: { latitude: 48.8965812, longitude: 2.318375999999944 }, zoom: 13, pointList: [], options: { streetViewControl: false } };
            });
        }
        return ResultController;
    }());
    oeup.ResultController = ResultController;
    var app = angular.module('myapp');
    ResultController.$inject = ["$scope", "$location", "$log"];
    app.controller('ResultController', ResultController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=resultController.js.map