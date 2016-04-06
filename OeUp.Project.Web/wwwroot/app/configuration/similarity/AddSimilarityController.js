var oeup;
(function (oeup) {
    'use strict';
    var AddSimilarityController = (function () {
        function AddSimilarityController($scope, $location, $log, $filter, SimilarityService) {
            var vm = this;
            $log.info("AddSimilarityController called");
            vm.Similarities = SimilarityService.Similarities;
            vm.Model = {
                Id: null,
                Comment: "",
                Date: new Date(),
                Title: "",
                Datas: []
            };
            var _initDatas = function (datas) {
                datas.length = 0;
                datas.push({ Key: "COEF_PREMRefOEPREMIUM", Value: "3" });
                datas.push({ Key: "COEF_PREM1", Value: "1" });
                datas.push({ Key: "COEF_PREM2", Value: "3" });
                datas.push({ Key: "COEF_NOPREM1", Value: "2" });
                datas.push({ Key: "COEF_NOPREM2", Value: "1" });
                datas.push({ Key: "GAIN_REFAM", Value: "80" });
                datas.push({ Key: "PARAMBONUSREFOECOM", Value: "40" });
            };
            _initDatas(vm.Model.Datas);
            var validate = function (value) {
                for (var index = 0; index < SimilarityService.Similarities.length; index++) {
                    var element = SimilarityService.Similarities[index];
                    var date1 = $filter('date')(element.Date, 'dd/MM/yyyy');
                    var date2 = $filter('date')(vm.Model.Date, 'dd/MM/yyyy');
                    if (element.Title == value && date1 == date2) {
                        $log.info("AddSimilarityController validate unicity :false");
                        return false;
                    }
                }
                $log.info("AddSimilarityController validate unicity :true");
                return true;
            };
            var customUnicity = {
                custom: {
                    message: 'Le couple titre/date doit être unique.',
                    validateView: validate,
                    validateModel: validate
                }
            };
            vm.Rules = {
                Comment: [{ maxLength: 1024 }],
                Date: ["required", "date"],
                Title: ["required", { maxLength: 40 }, customUnicity],
            };
            vm.submit = function (form) {
                if (form.$valid) {
                    SimilarityService.save(vm.Model).then(function () {
                        vm.Model.Comment = '';
                        vm.Model.Date = new Date();
                        vm.Model.Title = '';
                        _initDatas(vm.Model.Datas);
                        form.$setPristine();
                        toastr.success("Ajout paramètre similarité réalisée", "Sauvegarde success");
                    });
                }
            };
        }
        return AddSimilarityController;
    }());
    oeup.AddSimilarityController = AddSimilarityController;
    var app = angular.module('myapp');
    AddSimilarityController.$inject = ["$scope", "$location", "$log", "$filter", "SimilarityService"];
    app.controller('AddSimilarityController', AddSimilarityController);
})(oeup || (oeup = {}));
;
//# sourceMappingURL=AddSimilarityController.js.map