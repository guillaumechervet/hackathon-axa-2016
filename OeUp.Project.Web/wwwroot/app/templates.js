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
    "<div class=\"row\"><iframe id=\"ytplayer\" type=\"text/html\" width=\"640\" height=\"320\" src=\"http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&amp;origin=http://example.com\" frameborder=\"0\" style=\"padding: 10px;width: 100%\"></iframe><div class=\"col-md-6\" style=\"width:50%; float: left; padding-right:0\"><a href=\"/rechercher\" class=\"jeRecherche\"><img src=\"images/jeRecherche.png\"></a></div><div class=\"col-md-6\" style=\"width:50%; float: right; padding-right:0; padding-right: 10px; padding-left: 5px\"><a href=\"/proposer\" class=\"jePropose\"><img src=\"images/jePropose.png\"></a></div></div><style type=\"text/css\">.jeRecherche {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        float: left;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .jeRecherche img{\r" +
    "\n" +
    "        width: 95%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .jePropose {\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .jePropose img{\r" +
    "\n" +
    "        width: 95%;\r" +
    "\n" +
    "    }</style>"
  );


  $templateCache.put('/wwwroot/app/menu/menu.html',
    "<a href=\"/\"><img src=\"/images/BIM180.png\" alt=\"Logo\" class=\"img-responsive\"></a><!--<nav class=\"navbar navbar-default\" ng-controller=\"MenuController as menu\" >\r" +
    "\n" +
    "  <div class=\"container-fluid\">\r" +
    "\n" +
    "    <div class=\"navbar-header\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r" +
    "\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "        <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "        <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "        <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <a class=\"navbar-brand\" href=\"/\">Blockchain</a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"collapse navbar-collapse\" ng-if=\"!menu.isHome()\">\r" +
    "\n" +
    "      <ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "         <li ng-class=\"menu.isActive('/rechercher') ? 'active' : ''\"><a href=\"/rechercher\" >Exemple menu</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "</nav>-->"
  );


  $templateCache.put('/wwwroot/app/propose/addBien.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbAddBien.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li><a href=\"/proposer\">Proposer</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Mon bien</li>\r" +
    "\n" +
    "    </ol></script><div ng-include=\"'breadcrumbAddBien.html'\"></div><div style=\"row\"><h1>Ajout bien</h1><div><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Formulaire</h2><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"col-sm-3 control-label\">Quoi*:</label><div class=\"col-sm-4\"><select id=\"uType\" name=\"uType\" class=\"form-control\" ng-model=\"vm.Model.Type\" ng-options=\"c as c for c in vm.Types\" mw-validate=\"vm.Rules.Types\"><option value=\"\">- Sélectionner -</option></select><span mw-error=\"form.uType\"></span></div></div><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Ou* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDateDebut\"><label class=\"col-sm-3 control-label\">Date début* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDateDebut\" ng-model=\"vm.Model.DateDebut\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.DateDebut\"> <span mw-error=\"form.uDateDebut\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDateFin\"><label class=\"col-sm-3 control-label\">Date fin* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDateFin\" ng-model=\"vm.Model.DateFin\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.DateFin\"> <span mw-error=\"form.uDateFin\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Description :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div></form></div><div class=\"form-group\" style=\"height:60px\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></div><div ng-include=\"'breadcrumbAddBien.html'\"></div>"
  );


  $templateCache.put('/wwwroot/app/propose/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbProposer.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Proposer</li>\r" +
    "\n" +
    "    </ol></script><div ng-include=\"'breadcrumbProposer.html'\"></div><h1>Proposer un bien</h1><div style=\"height:40px\"><button type=\"button\" class=\"btn-perso\" ng-click=\"vm.navAdd()\"><img src=\"images/Ajouterbien60.png\"></button></div><div ng-if=\"vm.Biens.length >0\"><h2>Mes biens</h2><div class=\"row\"><div class=\"col-sm-6 col-md-4\" ng-repeat=\"bien in vm.Biens\"><div class=\"thumbnail\"><img ng-src=\"{{bien.MainPhoto}}\"><div class=\"caption\"><h3>{{bien.Titre}}</h3><p><span>Loué du {{bien.DateDebut | date:'dd/MM/yyyy' }} au {{bien.DateFin | date:'dd/MM/yyyy' }} : {{bien.Frequence}} de {{bien.DateDebut | date:'HH:mm' }} au {{bien.DateFin | date:'HH:mm' }}</span> {{bien.Description}}</p><p><button ng-click=\"vm.remove(bien)\" type=\"button\" class=\"btn btn-danger\" uib-popover=\"Supprimer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-remove\"></button> <button ng-click=\"vm.edit(bien)\" type=\"button\" class=\"btn btn-edit\" uib-popover=\"Editer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-edit\"></button></p></div></div></div></div></div><div ng-if=\"vm.Biens.length <=0\" class=\"oeup-empty\"><p>Aucun bien déclaré.</p></div><div style=\"height:40px\"><button type=\"button\" class=\"btn-perso btn-last\" ng-click=\"vm.navAdd()\"><img src=\"images/Ajouterbien60.png\"></button></div><div ng-include=\"'breadcrumbProposer.html'\"></div><style type=\"text/css\">.btn-perso {\r" +
    "\n" +
    "        background-color: transparent;\r" +
    "\n" +
    "        border: none;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "        margin-bottom: 15px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .btn-perso img{\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .btn-perso.btn-last {\r" +
    "\n" +
    "        margin-top: -10px;\r" +
    "\n" +
    "    }</style>"
  );


  $templateCache.put('/wwwroot/app/search/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbAddBien.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Recherche</li>\r" +
    "\n" +
    "    </ol></script><div style=\"row\"><div ng-include=\"'breadcrumbAddBien.html'\"></div><h1>Rechercher</h1><div><form name=\"form\" role=\"form\" class=\"form-horizontal\" autocomplete=\"off\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><div class=\"col-sm-4 col-sm-offset-2\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"col-sm-2 control-label\">Quoi*:</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uType\" ng-model=\"vm.Model.Type\" class=\"form-control\" uib-typeahead=\"type for type in vm.Types | filter:$viewValue | limitTo:8\" mw-validate=\"vm.Rules.Type\"> <span mw-error=\"form.uType\"></span></div></div></div></div><div class=\"col-sm-4\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uOu\"><label class=\"col-sm-2 control-label\">Ou* :</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uOu\" ng-model=\"vm.Model.Ou\" class=\"form-control\" mw-validate=\"vm.Rules.Ou\" g-places-autocomplete> <span mw-error=\"form.uOu\"></span></div></div></div></div><div class=\"col-sm-2\"><button type=\"submit\" class=\"btn-perso\"><img src=\"images/jeRecherche.png\" width=\"100%;\"></button></div><div class=\"col-sm-12\"><a href=\"#\" ng-if=\"!vm.plus\" ng-click=\"vm.plus=true\">Plus de critères</a> <a href=\"#\" ng-if=\"vm.plus\" ng-click=\"vm.plus=false\">Moins de critères</a></div></form></div><div class=\"clearfix\"></div><div ng-if=\"vm.plus\"><h2>Dates</h2><div class=\"col-sm-4 col-sm-offset-2\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"col-sm-2 control-label\">Début:</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uType\" ng-model=\"vm.Model.Type\" class=\"form-control\" uib-typeahead=\"type for type in vm.Types | filter:$viewValue | limitTo:8\" mw-validate=\"vm.Rules.Type\"> <span mw-error=\"form.uType\"></span></div></div></div></div><div class=\"col-sm-4\"><div class=\"row\"><div class=\"form-group\" mw-container=\"form.uOu\"><label class=\"col-sm-2 control-label\">Fin :</label><div class=\"col-sm-8\"><input type=\"text\" name=\"uOu\" ng-model=\"vm.Model.Ou\" class=\"form-control\" mw-validate=\"vm.Rules.Ou\"> <span mw-error=\"form.uOu\"></span></div></div></div></div><div class=\"clearfix\"></div><div class=\"clearfix\"></div><h2>Prix maximum</h2><div class=\"col-sm-8 col-sm-offset-2\"><input type=\"range\" min=\"1\" max=\"30\" step=\"1\" ng-model=\"vm.Model.Price\"><p class=\"text-center\" style=\"font-size:2em\" ng-bind=\"vm.Model.Price + ' €'\"></p></div><div class=\"clearfix\"></div><div class=\"form-group\" style=\"height:60px\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn-perso\"><img src=\"images/jeRecherche.png\" width=\"100%;\"></button></div></div></div><div ng-include=\"'breadcrumbAddBien.html'\"></div></div><style type=\"text/css\">.btn-perso {\r" +
    "\n" +
    "        background-color: transparent;\r" +
    "\n" +
    "        border: none;\r" +
    "\n" +
    "        width: 200px;\r" +
    "\n" +
    "        float: right;\r" +
    "\n" +
    "        margin-bottom: 15px;\r" +
    "\n" +
    "        margin-right: -20px;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    .btn-perso img{\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "    }</style>"
  );


  $templateCache.put('/wwwroot/app/search/result/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbResult.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li><a href=\"/rechercher\">Rechercher</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Ma recherche</li>\r" +
    "\n" +
    "    </ol></script><div class=\"row\"><div ng-include=\"'breadcrumbResult.html'\"></div><h1 style=\"padding-left: 8px\">Ma recherche</h1><div class=\"resultDiv\"><div class=\"\" style=\"padding-right: 0; margin-bottom: 15px\"><!-- recherche --><div class=\"quoi\"><div class=\"form-group\" mw-container=\"form.uType\"><label for=\"uType\" class=\"control-label\">Quoi*:</label><div class=\"\"><input type=\"text\" name=\"uType\" ng-model=\"vm.Model.Type\" class=\"form-control\" uib-typeahead=\"type for type in vm.Types | filter:$viewValue | limitTo:8\" mw-validate=\"vm.Rules.Type\"></div></div></div><div class=\"\"><div class=\"form-group\" mw-container=\"form.uOu\"><label class=\"control-label\">Ou* :</label><div class=\"\"><input type=\"text\" name=\"uOu\" ng-model=\"vm.Model.Ou\" class=\"form-control\" mw-validate=\"vm.Rules.Ou\" g-places-autocomplete></div></div></div><a href=\"#\" ng-if=\"!vm.plus\" ng-click=\"vm.plus=true\" class=\"moreCriteria\">Plus de critères</a><div class=\"\" style=\"overflow: hidden; height: 280px\"><div ui-gmap-google-map id=\"map-regie\" center=\"vm.map.center\" zoom=\"vm.map.zoom\"><ui-gmap-markers models=\"vm.map.pointList\" coords=\"'position'\" idkey=\"'id'\" click=\"click\" events=\"vm.map.markers2Events\" icon=\"'icon'\"></ui-gmap-markers></div></div></div><!-- recherche --><div ng-repeat-start=\"object in vm.objects\" ng-class=\"object.class\" class=\"resultItem\" ng-mouseover=\"object.mouseover()\" ng-mouseout=\"object.mouseout()\" ng-click=\"object.click()\"><span class=\"image\"><img class=\"myImage\" ng-src=\"{{object.img}}\"> <img class=\"user\" ng-src=\"{{object.user}}\"><div class=\"price\">{{object.price}} €</div></span> <span class=\"desc\"><div class=\"title\">{{object.title}}</div><div class=\"text\">{{object.texte}}</div><div class=\"dispo\">{{object.dispo}}</div></span></div><div style=\"clear:both\" ng-repeat-end></div></div><div ng-include=\"'breadcrumbResult.html'\"></div></div><div></div><style>.resultDiv {\r" +
    "\n" +
    "    padding: 0 10px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".resultDiv .moreCriteria {\r" +
    "\n" +
    "    display: inline-block;\r" +
    "\n" +
    "    margin-bottom: 5px;\r" +
    "\n" +
    "    margin-top: -10px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".resultDiv .quoi ul {\r" +
    "\n" +
    "    width: 96%;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".resultItem {\r" +
    "\n" +
    "    float: right;\r" +
    "\n" +
    "    padding-left: 5px;\r" +
    "\n" +
    "    border-bottom: 1px #ccc solid;\r" +
    "\n" +
    "    margin-bottom: 10px;\r" +
    "\n" +
    "    position: relative;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".resultItem img {\r" +
    "\n" +
    "  float: right;\r" +
    "\n" +
    "  width: 100%;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".resultItem .title {\r" +
    "\n" +
    "    font-weight: bold;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".resultItem .image {\r" +
    "\n" +
    "    display: inline-block;\r" +
    "\n" +
    "    width: 47%;\r" +
    "\n" +
    "    height: 145px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".resultItem .desc {\r" +
    "\n" +
    "    display: inline-block;\r" +
    "\n" +
    "    width: 53%;\r" +
    "\n" +
    "    float: right;\r" +
    "\n" +
    "    padding-left: 5px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".resultItem .price {\r" +
    "\n" +
    "        font-size: 25px;\r" +
    "\n" +
    "    color: #ffffff;\r" +
    "\n" +
    "    display: inline-block;\r" +
    "\n" +
    "    position: absolute;\r" +
    "\n" +
    "    background-color: #528894;\r" +
    "\n" +
    "    bottom: 45px;\r" +
    "\n" +
    "    padding-right: 5px;\r" +
    "\n" +
    "    padding-left: 15px;}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".user {\r" +
    "\n" +
    "    position: absolute;\r" +
    "\n" +
    "    width: 60px !important;\r" +
    "\n" +
    "    left: 92px;\r" +
    "\n" +
    "    bottom: 5px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    ".myImage {\r" +
    "\n" +
    "    height:118px !important;\r" +
    "\n" +
    "    width: 157px !important;\r" +
    "\n" +
    "}</style>"
  );


  $templateCache.put('/wwwroot/app/search/validate/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbValidate.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li><a href=\"/rechercher\">Rechercher</a></li>\r" +
    "\n" +
    "    <li><a href=\"/resultat\">Resultat</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Valider</li>\r" +
    "\n" +
    "    </ol></script><div style=\"row\"><div ng-include=\"'breadcrumbValidate.html'\"></div><div ng-if=\"!vm.validated\"><h1>Valider</h1><form name=\"form\" style=\"position: relative\" role=\"form\" class=\"form-horizontal\" autocomplete=\"off\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><div class=\"form-group\"><img src=\"images/place-parking2.jpg\" width=\"100%\"></div><div class=\"form-group\"><label for=\"uType\" class=\"col-sm-3 control-label\">Assurance :</label><div class=\"col-sm-4\"><img src=\"/images/AXA_Logo.png\" style=\"width:40px; height:40px\"></div></div><div class=\"form-group\"><label for=\"uType\" class=\"col-sm-3 control-label\">Quoi :</label><div class=\"col-sm-4\"><span>Place de parking</span></div></div><div class=\"form-group\"><label for=\"uType\" class=\"col-sm-3 control-label\">Description :</label><div class=\"col-sm-4\"><span>Place sur parking privé, idéal pour se garer au webcenter de Lille.</span></div></div><div class=\"form-group\"><label for=\"uType\" class=\"col-sm-3 control-label\">Dates :</label><div class=\"col-sm-4\"><span>Du 28/03/2016 au 31/03/2017 de 10h à 16h</span></div></div><div class=\"form-group\"><label for=\"uType\" class=\"col-sm-3 control-label\">Qui :</label><div class=\"col-sm-4\"><span>Jacques Le corre (<i class=\"glyphicon ng-scope glyphicon-star\" i><i class=\"glyphicon ng-scope glyphicon-star\" i><i class=\"glyphicon ng-scope glyphicon-star\" i><i class=\"glyphicon ng-scope glyphicon-star\" i><i class=\"glyphicon ng-scope glyphicon-star-empty\" i>)</span></div></div><div class=\"form-group\"><label for=\"uType\" class=\"col-sm-3 control-label\">Prix :</label><div class=\"col-sm-4\"><span><b>72 €</b></span></div></div><div class=\"form-group myButton\" style=\"height:60px\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Valider</button></div></div></form></div><div ng-if=\"vm.validated\"><p class=\"text-center\" style=\"font-size:2em\">Echange entre \"Imen Necib\" et \"Jacques Le corre\" validé!</p><p class=\"text-center\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.goHome()\">Retour page acceuil</button></p></div><div ng-include=\"'breadcrumbValidate.html'\"></div></div><style type=\"text/css\">.myButton {\r" +
    "\n" +
    "    height: 40px;\r" +
    "\n" +
    "    position: absolute;\r" +
    "\n" +
    "    top: 192px;\r" +
    "\n" +
    "    right: 10px;\r" +
    "\n" +
    " }\r" +
    "\n" +
    "\r" +
    "\n" +
    " .myButton button {\r" +
    "\n" +
    "    width: 150px;\r" +
    "\n" +
    "    height: 40px;\r" +
    "\n" +
    "    border: 1px white solid;\r" +
    "\n" +
    "    font-size: 20px;\r" +
    "\n" +
    " }</style>"
  );
 return {}; }]);}());