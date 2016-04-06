(function () {'use strict';angular.module('myapp').factory('preLoaderTemplate', ['$templateCache',  function ($templateCache) {  'use strict';

  $templateCache.put('/wwwroot/app/configuration/manufacturerSynonyme/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbManufacturerSynonyme.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Synonymes constructeurs</li>\r" +
    "\n" +
    "    </ol></script><div ng-include=\"'breadcrumbManufacturerSynonyme.html'\"></div><h1>Synonymes constructeurs</h1><form name=\"formAdd\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.add(formAdd)\"><h2>Ajouter un élément</h2><div class=\"form-group oeup-typeahead\" mw-container=\"formAdd.uSource\"><label class=\"col-sm-3 control-label\">Source* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uSource\" ng-model=\"vm.Model.Source\" uib-typeahead=\"sr.Label for sr in  vm.ManufacturersReference | filter:$viewValue | limitTo:8\" class=\"form-control\" mw-validate=\"vm.getSourceRules(vm.Model)\" oeup-uppercased> <span mw-error=\"formAdd.uSource\"></span></div></div><div class=\"form-group oeup-typeahead\" mw-container=\"formAdd.uDest\"><label class=\"col-sm-3 control-label\">Cible* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDest\" ng-model=\"vm.Model.Dest\" uib-typeahead=\"sr.Label for sr in vm.ManufacturersReference | filter:$viewValue | limitTo:8\" class=\"form-control\" mw-validate=\"vm.getDestRules(vm.Model)\" oeup-uppercased><span mw-error=\"formAdd.uDest\"></span></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></form><div ng-if=\"vm.Synonymes.length >0\"><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Synonymes</h2><table class=\"table\"><thead><tr><th>Source</th><th>Cible</th><th>Action</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"synonyme in vm.Synonymes\"><td><span ng-bind=\"synonyme.Source\"></span></td><td><span ng-bind=\"synonyme.Dest\"></span></td><td><button ng-click=\"vm.remove(synonyme)\" type=\"button\" class=\"btn btn-danger\" uib-popover=\"Supprimer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-remove\"></button></td></tr></tbody></table><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Sauvegarder</button></div></div></form></div><div ng-if=\"vm.Synonymes.length <=0\" class=\"oeup-empty\"><p>Aucun synonyme.</p></div><div ng-include=\"'breadcrumbManufacturerSynonyme.html'\"></div>"
  );


  $templateCache.put('/wwwroot/app/home/index.html',
    "<div class=\"row\"><h1>Accueil</h1><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Rechercher</div><div class=\"panel-body\"><a href=\"/rechercher\">Images</a></div><div class=\"panel-footer\"></div></div></div><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Proposer</div><div class=\"panel-body\"><a href=\"/proposer\">Images</a></div><div class=\"panel-footer\"></div></div></div></div>"
  );


  $templateCache.put('/wwwroot/app/menu/menu.html',
    "<img src=\"/images/logo.png\" alt=\"Logo\" class=\"img-responsive\"><nav class=\"navbar navbar-default\" ng-controller=\"MenuController as menu\"><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Blockchain</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" ng-if=\"!menu.isHome()\"><ul class=\"nav navbar-nav\"><!--\r" +
    "\n" +
    "        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\r" +
    "\n" +
    "       \r" +
    "\n" +
    "        <li><a href=\"#\">Projets</a></li> --><li ng-class=\"menu.isActive('/rechercher') ? 'active' : ''\"><a href=\"/rechercher\">Exemple menu</a></li></ul><!--\r" +
    "\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "        <li><a href=\"#\">Link</a></li>\r" +
    "\n" +
    "        <li class=\"dropdown\">\r" +
    "\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r" +
    "\n" +
    "          <ul class=\"dropdown-menu\">\r" +
    "\n" +
    "            <li><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\r" +
    "\n" +
    "            <li><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  --><!-- /.container-fluid --></div></div></nav>"
  );


  $templateCache.put('/wwwroot/app/propose/addBien.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbAddBien.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"/proposer\">Proposer</li>\r" +
    "\n" +
    "    <li class=\"active\">Ajout bien</li>\r" +
    "\n" +
    "    </ol></script><div ng-include=\"'breadcrumbAddBien.html'\"></div><div style=\"row\"><h1>Ajout bien</h1><div><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Formulaire</h2><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"col-sm-3 control-label\">Quoi*:</label><div class=\"col-sm-4\"><select id=\"uType\" name=\"uType\" class=\"form-control\" ng-model=\"vm.Model.Type\" ng-options=\"c as c for c in vm.Types\" mw-validate=\"vm.Rules.Types\"><option value=\"\">- Sélectionner -</option></select><span mw-error=\"form.uType\"></span></div></div><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Ou* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDateDebut\"><label class=\"col-sm-3 control-label\">Date début* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDateDebut\" ng-model=\"vm.Model.DateDebut\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.DateDebut\"> <span mw-error=\"form.uDateDebut\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDateFin\"><label class=\"col-sm-3 control-label\">Date fin* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDateFin\" ng-model=\"vm.Model.DateFin\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.DateFin\"> <span mw-error=\"form.uDateFin\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Description :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div></form></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></div><div ng-include=\"'breadcrumbAddBien.html'\"></div>"
  );


  $templateCache.put('/wwwroot/app/propose/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbProposer.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Proposer</li>\r" +
    "\n" +
    "    </ol></script><div ng-include=\"'breadcrumbProposer.html'\"></div><h1>Proposer vos biens</h1><button type=\"button\" class=\"btn btn-default pull-right\" ng-bind=\"vm.navAdd()\">Ajouter un bien</button><div ng-if=\"vm.Biens.length >0\"><h2>Liste des biens</h2><div class=\"row\"><div class=\"col-sm-6 col-md-4\" ng-repeat=\"bien in vm.Biens\"><div class=\"thumbnail\"><img ng-src=\"{{bien.MainPhoto}}\"><div class=\"caption\"><h3>{{bien.Titre}}</h3><p><span>Loué du {{bien.DateDebut | date:'dd/MM/yyyy' }} au {{bien.DateFin | date:'dd/MM/yyyy' }} : {{bien.Frequence}} de {{bien.DateDebut | date:'HH:mm' }} au {{bien.DateFin | date:'HH:mm' }}</span> {{bien.Description}}</p><p><button ng-click=\"vm.remove(bien)\" type=\"button\" class=\"btn btn-danger\" uib-popover=\"Supprimer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-remove\"></button> <button ng-click=\"vm.edit(bien)\" type=\"button\" class=\"btn btn-edit\" uib-popover=\"Editer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-edit\"></button></p></div></div></div></div><button type=\"button\" class=\"btn btn-default pull-right\" ng-bind=\"vm.navAdd()\">Ajouter un bien</button></div><div ng-if=\"vm.Biens.length <=0\" class=\"oeup-empty\"><p>Aucun bien déclaré.</p></div><div ng-include=\"'breadcrumbProposer.html'\"></div>"

  );


  $templateCache.put('/wwwroot/app/search/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbAddBien.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Recherche</li>\r" +
    "\n" +
    "    </ol></script><div style=\"row\"><div ng-include=\"'breadcrumbAddBien.html'\"></div><h1>Rechercher</h1><div><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><div class=\"col-sm-4 col-sm-offset-2\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"col-sm-2 control-label\">Quoi*:</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uType\" ng-model=\"vm.Model.Type\" class=\"form-control\" uib-typeahead=\"type for type in vm.Types | filter:$viewValue | limitTo:8\" mw-validate=\"vm.Rules.Type\"> <span mw-error=\"form.uType\"></span></div></div></div></div><div class=\"col-sm-4\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uOu\"><label class=\"col-sm-2 control-label\">Ou* :</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uOu\" ng-model=\"vm.Model.Ou\" class=\"form-control\" mw-validate=\"vm.Rules.Ou\"> <span mw-error=\"form.uOu\"></span></div></div></div></div><div class=\"col-sm-2\"><button type=\"submit\" class=\"btn btn-success\">Rechercher</button></div><div class=\"col-sm-12\"><a href=\"#\" ng-if=\"!vm.plus\" ng-click=\"vm.plus=true\">Plus de critères</a> <a href=\"#\" ng-if=\"vm.plus\" ng-click=\"vm.plus=false\">Moins de critères</a></div></form></div><div class=\"clearfix\"></div><div ng-if=\"vm.plus\"><h2>Dates</h2><div class=\"col-sm-4 col-sm-offset-2\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"col-sm-2 control-label\">Début:</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uType\" ng-model=\"vm.Model.Type\" class=\"form-control\" uib-typeahead=\"type for type in vm.Types | filter:$viewValue | limitTo:8\" mw-validate=\"vm.Rules.Type\"> <span mw-error=\"form.uType\"></span></div></div></div></div><div class=\"col-sm-4\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uOu\"><label class=\"col-sm-2 control-label\">Fin :</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uOu\" ng-model=\"vm.Model.Ou\" class=\"form-control\" mw-validate=\"vm.Rules.Ou\"> <span mw-error=\"form.uOu\"></span></div></div></div></div><div class=\"clearfix\"></div><div class=\"clearfix\"></div><h2>Prix maximum</h2><div class=\"col-sm-8 col-sm-offset-2\"><input type=\"range\" min=\"1\" max=\"30\" step=\"1\" ng-model=\"vm.Model.Price\"><p class=\"text-center\" style=\"font-size:2em\" ng-bind=\"vm.Model.Price + ' €'\"></p></div><div class=\"clearfix\"></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Rechercher</button></div></div></div><div ng-include=\"'breadcrumbAddBien.html'\"></div></div>"
  );


  $templateCache.put('/wwwroot/app/search/result/index.html',
    "<div class=\"row\"><div class=\"col-xs-6 col-md-4\"><div><img src=\"http://www.lettre-gratuite.fr/files/2013/03/place-parking.jpg\" with=\"120px\" height=\"120px\"> <span>lorem ipsum</span> <span>10 €</span></div><div><img src=\"http://img0.gtsstatic.com/faits-divers/mal-foutue-cette-place-de-parking_646_w620.jpg\" with=\"120px\" height=\"120px\"> <span>lorem ipsum</span> <span>10 €</span></div></div><div class=\"col-xs-12 col-md-8\"><div ui-gmap-google-map id=\"map-regie\" center=\"vm.map.center\" zoom=\"vm.map.zoom\" width=\"400px\"><ui-gmap-markers models=\"vm.map.pointList\" coords=\"'position'\" idkey=\"'id'\" click=\"click\"></ui-gmap-markers></div></div></div>"
  );
 return {}; }]);}());