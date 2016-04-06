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
    "<div class=\"row\"><h1>Accueil</h1><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Projets</div><div class=\"panel-body\"><a href=\"/projets\">Images</a></div><div class=\"panel-footer\"></div></div></div><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Synonymes constructeurs</div><div class=\"panel-body\"><a href=\"/configuration/synonymes-constructeurs\">Images</a></div><div class=\"panel-footer\"></div></div></div></div>"
  );


  $templateCache.put('/wwwroot/app/menu/menu.html',
    "<img src=\"/images/logo.png\" alt=\"Logo\" class=\"img-responsive\"><nav class=\"navbar navbar-default\" ng-controller=\"MenuController as menu\"><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Blockchain</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" ng-if=\"!menu.isHome()\"><ul class=\"nav navbar-nav\"><!--\r" +
    "\n" +
    "        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\r" +
    "\n" +
    "       \r" +
    "\n" +
    "        <li><a href=\"#\">Projets</a></li> --><li ng-class=\"menu.isActive('/configuration/equipementier') ? 'active' : ''\"><a href=\"/configuration/equipementier\">Equipementiers</a></li><li ng-class=\"menu.isActive('/configuration/RefOE') ? 'active' : ''\"><a href=\"/configuration/RefOE\">RefOFe importantes</a></li><li ng-class=\"menu.isActive('/configuration/configuration/similarite') ? 'active' : ''\"><a href=\"/configuration/similarite\">Paramètres similarités</a></li><!--  <li class=\"dropdown\">\r" +
    "\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Gestion des entrants<span class=\"caret\"></span></a>\r" +
    "\n" +
    "          <ul class=\"dropdown-menu\">\r" +
    "\n" +
    "            <li><a href=\"/configuration/equipementier\">Equipementiers</a></li>\r" +
    "\n" +
    "            <li><a href=\"/configuration/RefOE\">RefOFe importantes</a></li>\r" +
    "\n" +
    "              <li role=\"separator\" class=\"divider\"></li>       \r" +
    "\n" +
    "             <li><a href=\"/configuration/synonymes-constructeurs\">Synonymes constructeurs</a></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </li>--></ul><!--\r" +
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


  $templateCache.put('/wwwroot/app/search/index.html',
    "<div class=\"row\"><h1>Rechercher</h1></div>"
  );
 return {}; }]);}());