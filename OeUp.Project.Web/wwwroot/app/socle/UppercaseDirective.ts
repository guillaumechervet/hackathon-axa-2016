
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
     'use strict'; 
    angular.module('myapp').directive('oeupUppercased', [function() {
        return {
            require: 'ngModel',        
            link: function(scope, element, attrs, modelCtrl:any) {
                modelCtrl.$parsers.push(function(input) {
                    return input ? input.toUpperCase() : "";
                });
                element.css("text-transform","uppercase");
            }
        };
    }]);

}