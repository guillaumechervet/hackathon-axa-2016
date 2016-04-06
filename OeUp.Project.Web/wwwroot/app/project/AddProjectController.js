var oeup;
(function (oeup) {
    'use strict';
    var AddProjectController = (function () {
        function AddProjectController($scope, $location, $log, $filter, ConfigurationService, SupplierService, SimilarityService, ProjectService) {
            this.SupplierSelected = '';
            this.IsEnabled = false;
            var vm = this;
            $log.info("OverviewController called");
            vm.Model = {
                Comment: "",
                Date: new Date(),
                Id: null,
                Title: "",
                Version: ConfigurationService.Configuration.VersionNumber,
                Connector: "",
                SelectedSuppliers: null,
                SelectedSimilarity: null,
                Suppliers: {}
            };
            vm.IsEnabled = ConfigurationService.Configuration.VersionNumber !== '';
            var selectSupplier = function (id) {
                for (var index = 0; index < vm.ListSuppliers.length; index++) {
                    var element = vm.ListSuppliers[index];
                    if (element.HerNr.toString() === id) {
                        return element;
                    }
                }
                return null;
            };
            var listSelectedSuppliers = [];
            vm.getSelectedSuppliers = function () {
                var results = listSelectedSuppliers;
                results.length = 0;
                for (var id in vm.Model.Suppliers) {
                    if (vm.Model.Suppliers[id]) {
                        var supplier = selectSupplier(id);
                        if (supplier != null) {
                            results.push(supplier);
                        }
                    }
                }
                return results;
            };
            vm.Suppliers = SupplierService.Suppliers;
            vm.DisplaySupplier = function (suppliers) {
                return suppliers.Title + ' - ' + $filter('date')(suppliers.Date, 'dd/MM/yyyy');
            };
            vm.ListSuppliers = [];
            vm.DisplaySimilarity = function (similarity) {
                return similarity.Title + ' - ' + $filter('date')(similarity.Date, 'dd/MM/yyyy');
            };
            vm.Similarities = SimilarityService.Similarities;
            var validate = function (value) {
                for (var index = 0; index < ProjectService.Projects.length; index++) {
                    var element = ProjectService.Projects[index];
                    var date1 = $filter('date')(element.Date, 'dd/MM/yyyy');
                    var date2 = $filter('date')(vm.Model.Date, 'dd/MM/yyyy');
                    if (element.Title == value && date1 == date2) {
                        return false;
                    }
                }
                return true;
            };
            var customUnicity = {
                custom: {
                    message: 'Le couple titre/date doit être unique.',
                    validateView: validate,
                    validateModel: validate
                }
            };
            var validateSupplier = function (value) {
                if (!vm.Model.SelectedSuppliers) {
                    return true;
                }
                if (vm.getSelectedSuppliers().length <= 0) {
                    return false;
                }
                return true;
            };
            var customSupplier = {
                custom: {
                    message: 'Un équipementier doit au moins être séléctionné.',
                    validateView: validateSupplier,
                    validateModel: validateSupplier
                }
            };
            vm.Rules = {
                Comment: [{ maxLength: 1024 }],
                Version: ["required", { maxLength: 40 }],
                Date: ["required", "date"],
                Title: ["required", { maxLength: 40 }, customUnicity],
                Connector: ["required", "digit", { min: 0 }, { max: 10000 }],
                Supplier: ["required"],
                Similarity: "required",
                SupplierSelected: [customSupplier]
            };
            vm.submit = function (form) {
                if (form.$valid) {
                    var supplierPremiums = vm.getSelectedSuppliers();
                    var project = {
                        Id: null,
                        Title: vm.Model.Title,
                        Version: vm.Model.Version,
                        Comment: vm.Model.Comment,
                        State: oeup.ProjectState.Starting,
                        Connector: parseInt(vm.Model.Connector),
                        Date: vm.Model.Date,
                        SimilarityId: vm.Model.SelectedSimilarity.Id,
                        SuppliersId: vm.Model.SelectedSuppliers.Id,
                        Suppliers: supplierPremiums
                    };
                    ProjectService.save(project).then(function (data) {
                        toastr.success("Ajout projet réalisée", "Sauvegarde success");
                        $location.path("/projets");
                    });
                }
            };
            vm.onSupplierCheck = function (form) {
                form.uSupplierSelected.$setDirty(true);
                vm.SupplierSelected = vm.SupplierSelected + "1";
            };
            vm.onSupplierChange = function (form) {
                vm.SupplierSelected = vm.SupplierSelected + "1";
                var selectedSuppliers = vm.Model.SelectedSuppliers;
                vm.ListSuppliers.length = 0;
                if (selectedSuppliers && selectedSuppliers.Suppliers) {
                    for (var index = 0; index < selectedSuppliers.Suppliers.length; index++) {
                        var element = selectedSuppliers.Suppliers[index];
                        vm.ListSuppliers.push({
                            SupplierId: element.Id,
                            HerNr: element.HerNr,
                            Label: element.Label,
                            Id: null
                        });
                    }
                    $filter('orderBy')(vm.ListSuppliers, 'Label');
                }
            };
        }
        return AddProjectController;
    }());
    oeup.AddProjectController = AddProjectController;
    var app = angular.module('myapp');
    AddProjectController.$inject = ["$scope", "$location", "$log", '$filter', "ConfigurationService", "SupplierService", "SimilarityService", "ProjectService"];
    app.controller('AddProjectController', AddProjectController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=AddProjectController.js.map