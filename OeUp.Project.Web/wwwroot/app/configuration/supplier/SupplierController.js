var oeup;
(function (oeup) {
    'use strict';
    var SupplierController = (function () {
        function SupplierController($scope, $location, $log, SupplierService) {
            var vm = this;
            $log.info("OverviewController called");
            vm.Model = {
                Id: null,
                Title: '',
                Comment: '',
                Date: new Date(),
                Suppliers: []
            };
            vm.File = '';
            vm.Suppliers = SupplierService.Suppliers;
            var isFileError = false;
            var validateFile = function () {
                if (vm.Model.Suppliers.length > 0) {
                    return { success: true, message: '' };
                }
                return { success: false, message: vm.File };
            };
            var customFile = {
                custom: {
                    message: vm.File,
                    validateView: validateFile,
                    validateModel: validateFile
                }
            };
            vm.Rules = {
                Comment: [{ maxLength: 1024 }],
                Date: ["required", "date"],
                Title: ["required", { maxLength: 40 }],
                File: ["required", customFile]
            };
            var _excelFindByColIndex = function (element, index) {
                var _index = 0;
                for (var name in element) {
                    if (_index === index) {
                        return element[name];
                    }
                    _index++;
                }
                return '';
            };
            var _getSupplierId = function (numeqp) {
                for (var j = 0; j < SupplierService.SuppliersReference.length; j++) {
                    var supplierReference = SupplierService.SuppliersReference[j];
                    if (supplierReference.Label.toUpperCase() === numeqp.toUpperCase()) {
                        return parseInt(supplierReference.Id);
                    }
                }
                return null;
            };
            var nbTry = 0;
            vm.onChange = function (data) {
                nbTry++;
                $log.info("SupplierController onChange excel called");
                vm.File = 'loading';
                $scope.form.uFile.$setDirty(true);
                try {
                    vm.Model.Suppliers.length = 0;
                    if (data !== undefined && data !== null) {
                        for (var name in data) {
                            var tab = data[name];
                            for (var index = 0; index < tab.length; index++) {
                                var element = tab[index];
                                var numeqp = _excelFindByColIndex(element, 2);
                                var isPrioritary = _excelFindByColIndex(element, 5).toLowerCase() === "x";
                                if (isPrioritary && numeqp !== '') {
                                    var supplierId = _getSupplierId(numeqp);
                                    if (supplierId === null) {
                                        throw new Error("Equipementier " + numeqp + " non présent dans la liste de référence");
                                    }
                                    vm.Model.Suppliers.push({ Label: numeqp, HerNr: supplierId, Id: null });
                                }
                            }
                        }
                    }
                    var numberResult = vm.Model.Suppliers.length;
                    if (vm.Model.Suppliers.length <= 0) {
                        throw new Error("Aucun équipementier toppé n'a été trouvé");
                    }
                    vm.File = 'success' + nbTry;
                    return numberResult + ' équipementier chargé';
                }
                catch (error) {
                    $log.error("SupplierController onChange called error ");
                    vm.File = "Impossible de parser ce fichier : " + error.message;
                    vm.Model.Suppliers.length = 0;
                }
            };
            vm.submit = function (form) {
                if (form.$valid) {
                    SupplierService.save(vm.Model).then(function () {
                        vm.File = '';
                        vm.Model.Id = null;
                        vm.Model.Title = null;
                        vm.Model.Comment = null;
                        vm.Model.Date = new Date();
                        vm.Model.Suppliers.length = 0;
                        form.$setPristine(true);
                        toastr.success("Ajout équipementier réalisée", "Sauvegarde success");
                    });
                }
            };
        }
        return SupplierController;
    }());
    oeup.SupplierController = SupplierController;
    var app = angular.module('myapp');
    SupplierController.$inject = ["$scope", "$location", "$log", "SupplierService"];
    app.controller('SupplierController', SupplierController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=SupplierController.js.map