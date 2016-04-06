var oeup;
(function (oeup) {
    'use strict';
    var ManufacturerTranscoController = (function () {
        function ManufacturerTranscoController($scope, $location, $log, ManufacturerTranscoService) {
            var vm = this;
            var validateSupplierReference = function (value) {
                var supplierReference = _findSupplierReference(value);
                if (supplierReference) {
                    return { message: "", success: true };
                }
                return { message: "Cet équipementier n'existe pas.", success: false };
            };
            vm.getTranscoRules = function (Transco) {
                var validate = function (value) {
                    for (var index = 0; index < vm.Transcos.length; index++) {
                        var element = vm.Transcos[index];
                        if (element.Transco != null && value != null) {
                            if (element !== Transco && element.Transco.toLowerCase() === value.toLowerCase()) {
                                return { message: 'Un élément ne peut pas être en doublons en source.', success: false };
                            }
                        }
                    }
                    if (value && vm.Model.Label && value.toLowerCase() === vm.Model.Label.toLowerCase()) {
                        return { message: 'La source ne peut être égale à la cible.', success: false };
                    }
                    return { message: "", success: true };
                };
                var customDest = {
                    custom: {
                        validateView: validate,
                        validateModel: validate
                    }
                };
                var rules = {
                    Dest: ["required", { maxLength: 40 }, customDest]
                };
                return rules.Dest;
            };
            vm.getLabelRules = function (Transco) {
                var validate = function (value) {
                    var val = validateSupplierReference(value);
                    if (!val.success) {
                        return val;
                    }
                    for (var index = 0; index < vm.Transcos.length; index++) {
                        var element = vm.Transcos[index];
                        if (element.Transco != null && value != null) {
                            if (element !== Transco && element.Transco.toLowerCase() === value.toLowerCase()) {
                                return { message: 'Cet élément est présent en source.', success: false };
                            }
                        }
                    }
                    return { message: "", success: true };
                };
                var customDest = {
                    custom: {
                        validateView: validate,
                        validateModel: validate
                    }
                };
                var rules = {
                    Dest: ["required", { maxLength: 40 }, customDest]
                };
                return rules.Dest;
            };
            var _findSupplierReference = function name(label) {
                if (label) {
                    var references = ManufacturerTranscoService.ManufacturersReference;
                    for (var index = 0; index < references.length; index++) {
                        var element = references[index];
                        if (element.Label.toLowerCase() === label.toLowerCase()) {
                            return element;
                        }
                    }
                }
                return null;
            };
            $log.info("ManufacturerTransco called");
            vm.Model = { Transco: "", Label: "", HerNr: null };
            vm.Transcos = [];
            vm.ManufacturersReference = ManufacturerTranscoService.ManufacturersReference;
            angular.copy(ManufacturerTranscoService.Transcos, vm.Transcos);
            vm.add = function (form) {
                if (form.$valid) {
                    var Transco = { Transco: "", Label: "", HerNr: null };
                    angular.copy(vm.Model, Transco);
                    Transco.HerNr = _findSupplierReference(vm.Model.Label).HerNr;
                    vm.Transcos.push(Transco);
                    vm.Model.Transco = "";
                    vm.Model.Label = "";
                    form.$setPristine(true);
                }
            };
            vm.remove = function (Transco) {
                var index = vm.Transcos.indexOf(Transco);
                if (index > -1) {
                    vm.Transcos.splice(index, 1);
                }
            };
            vm.submit = function (form) {
                if (form.$valid) {
                    ManufacturerTranscoService.save(vm.Transcos).then(function () {
                        toastr.success("Sauvegarde Transcos réalisée", "Sauvegarde success");
                    });
                }
            };
        }
        return ManufacturerTranscoController;
    }());
    oeup.ManufacturerTranscoController = ManufacturerTranscoController;
    var app = angular.module('myapp');
    ManufacturerTranscoController.$inject = ["$scope", "$location", "$log", "ManufacturerTranscoService"];
    app.controller('ManufacturerTranscoController', ManufacturerTranscoController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=ManufacturerTranscoController.js.map