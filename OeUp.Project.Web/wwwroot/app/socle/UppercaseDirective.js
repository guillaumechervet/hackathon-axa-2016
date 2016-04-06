var oeup;
(function (oeup) {
    'use strict';
    angular.module('myapp').directive('oeupUppercased', [function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, modelCtrl) {
                    modelCtrl.$parsers.push(function (input) {
                        return input ? input.toUpperCase() : "";
                    });
                    element.css("text-transform", "uppercase");
                }
            };
        }]);
})(oeup || (oeup = {}));
//# sourceMappingURL=UppercaseDirective.js.map