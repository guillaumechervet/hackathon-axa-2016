var oeup;
(function (oeup) {
    'use strict';
    var RefOeController = (function () {
        function RefOeController($scope, $location, $log, RefOeService, ManufacturerTranscoService) {
            var vm = this;
            $log.info("RefOeController called");
            vm.Model = {
                Id: null,
                Title: '',
                Comment: '',
                Date: new Date(),
                RefOes: []
            };
            vm.File = '';
            vm.RefOes = RefOeService.RefOes;
            var isFileError = false;
            var validateFile = function () {
                if (vm.Model.RefOes.length > 0) {
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
            var _getManufacturerTransco = function (brand) {
                var brandUpper = brand.toUpperCase();
                var references = ManufacturerTranscoService.Transcos;
                for (var j = 0; j < references.length; j++) {
                    var reference = references[j];
                    if (brand && reference.Transco.toUpperCase() === brandUpper) {
                        return reference;
                    }
                }
                return null;
            };
            var _accentsTidy = function (s) {
                var r = s.toLowerCase();
                var non_asciis = { 'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]' };
                for (var i in non_asciis) {
                    r = r.replace(new RegExp(non_asciis[i], 'g'), i);
                }
                return r;
            };
            var _getManufacturerReference = function (brand) {
                var brandUpper = _accentsTidy(brand);
                var references = ManufacturerTranscoService.ManufacturersReference;
                for (var j = 0; j < references.length; j++) {
                    var reference = references[j];
                    if (brand && (_accentsTidy(reference.Label) === brandUpper || _accentsTidy(reference.LabelLong) === brandUpper)) {
                        return reference;
                    }
                }
                return null;
            };
            var nbTry = 0;
            vm.onChange = function (data) {
                nbTry++;
                $log.info("RefOeController onChange excel called");
                vm.File = 'loading';
                $scope.form.uFile.$setDirty(true);
                try {
                    vm.Model.RefOes.length = 0;
                    if (data !== undefined && data !== null) {
                        for (var name in data) {
                            var tab = data[name];
                            for (var index = 0; index < tab.length; index++) {
                                var element = tab[index];
                                var brand = _excelFindByColIndex(element, 0);
                                if (!brand) {
                                    throw new Error('Le champ "brand" ne peut pas être vide, ligne ' + index);
                                }
                                var transco = _getManufacturerTransco(brand);
                                if (transco != null) {
                                    brand = transco.Label;
                                }
                                var manufacturerReference = _getManufacturerReference(brand);
                                if (manufacturerReference === null) {
                                    throw new Error('HerNr non trouvée dans la table des équipementiers, brand ' + brand + ', ligne ' + index);
                                }
                                var refOe = _excelFindByColIndex(element, 2).replace("*", "");
                                var hit = parseInt(_excelFindByColIndex(element, 3));
                                vm.Model.RefOes.push({ Label: brand, HerNr: manufacturerReference.HerNr, Id: null, Hit: hit, Manufacturer: refOe });
                            }
                        }
                    }
                    var numberResult = vm.Model.RefOes.length;
                    if (vm.Model.RefOes.length <= 0) {
                        throw new Error("Aucune référence n'a été trouvée");
                    }
                    vm.File = 'success' + nbTry;
                    return numberResult + ' références chargées';
                }
                catch (error) {
                    $log.error("RefOeController onChange called error ");
                    vm.File = "Impossible de parser ce fichier: " + error.message;
                    vm.Model.RefOes.length = 0;
                }
            };
            vm.submit = function (form) {
                if (form.$valid) {
                    RefOeService.save(vm.Model).then(function () {
                        vm.File = '';
                        vm.Model.Id = null;
                        vm.Model.Title = null;
                        vm.Model.Comment = null;
                        vm.Model.Date = new Date();
                        vm.Model.RefOes.length = 0;
                        form.$setPristine(true);
                        toastr.success("Ajout RefOe réalisée", "Sauvegarde success");
                    });
                }
            };
        }
        return RefOeController;
    }());
    oeup.RefOeController = RefOeController;
    var app = angular.module('myapp');
    RefOeController.$inject = ["$scope", "$location", "$log", "RefOeService", "ManufacturerTranscoService"];
    app.controller('RefOeController', RefOeController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=RefOeController.js.map