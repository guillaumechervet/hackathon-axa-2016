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


  $templateCache.put('/wwwroot/app/configuration/manufacturerTransco/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbManufacturerTransco.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "    <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "    <li class=\"active\">Transco constructeurs OA</li>\r" +
    "\n" +
    "    </ol></script><div ng-include=\"'breadcrumbManufacturerTransco.html'\"></div><h1>Transco constructeurs OA</h1><form name=\"formAdd\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.add(formAdd)\"><h2>Ajouter un élément</h2><div class=\"form-group oeup-typeahead\" mw-container=\"formAdd.uSource\"><label class=\"col-sm-3 control-label\">Source OA* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uSource\" ng-model=\"vm.Model.Transco\" class=\"form-control\" mw-validate=\"vm.getTranscoRules(vm.Model)\" oeup-uppercased> <span mw-error=\"formAdd.uSource\"></span></div></div><div class=\"form-group oeup-typeahead\" mw-container=\"formAdd.uDest\"><label class=\"col-sm-3 control-label\">Label TecDoc* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDest\" ng-model=\"vm.Model.Label\" uib-typeahead=\"sr.Label for sr in vm.ManufacturersReference | filter:$viewValue | limitTo:8\" class=\"form-control\" mw-validate=\"vm.getLabelRules(vm.Model)\" oeup-uppercased><span mw-error=\"formAdd.uDest\"></span></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></form><div ng-if=\"vm.Transcos.length >0\"><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Transcodifications</h2><table class=\"table\"><thead><tr><th>Source OA</th><th>Label TecDoc</th><th>Action</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"transco in vm.Transcos\"><td><span ng-bind=\"transco.Transco\"></span></td><td><span ng-bind=\"transco.Label\"></span></td><td><button ng-click=\"vm.remove(transco)\" type=\"button\" class=\"btn btn-danger\" uib-popover=\"Supprimer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-remove\"></button></td></tr></tbody></table><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Sauvegarder</button></div></div></form></div><div ng-if=\"vm.Synonymes.length <=0\" class=\"oeup-empty\"><p>Aucun synonyme.</p></div><div ng-include=\"'breadcrumbManufacturerTransco.html'\"></div>"
  );


  $templateCache.put('/wwwroot/app/configuration/refoe/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbRefOe.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "   <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "  <li><a href=\"/projets\">Projets</a></li>\r" +
    "\n" +
    "  <li class=\"active\">RefOE importantes</li>\r" +
    "\n" +
    "</ol></script><div ng-include=\"'breadcrumbRefOe.html'\"></div><h1>RefOE importantes</h1><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Import</h2><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDate\"><label class=\"col-sm-3 control-label\">Date* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDate\" ng-model=\"vm.Model.Date\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.Date\"> <span mw-error=\"form.uDate\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Commentaire :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div><div class=\"form-group\" mw-container=\"form.uFile\"><label class=\"col-sm-3 control-label\">Fichier :</label><div class=\"col-sm-4\"><div mw-excel mw-change=\"vm.onChange\"></div><input type=\"hidden\" ng-model=\"vm.File\" id=\"uFile\" name=\"uFile\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.File\"> <span mw-error=\"form.uFile\"></span></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Valider</button></div></div></form><h2>Imports</h2><div ng-if=\"vm.RefOes.length >0\"><table class=\"table\"><thead><tr><th>Titre</th><th>Date</th><th>Commentaire</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"RefOe in vm.RefOes\"><td>{{RefOe.Title}}</td><td>{{RefOe.Date | date:'dd/MM/yyyy' }}</td><td>{{RefOe.Comment}}</td></tr></tbody></table></div><div ng-if=\"vm.RefOes.length<=0\" class=\"oeup-empty\"><p>Aucune référence.</p></div><div ng-include=\"'breadcrumbRefOe.html'\"></div><!--\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "   .thumb {\r" +
    "\n" +
    "    width: 24px;\r" +
    "\n" +
    "    height: 24px;\r" +
    "\n" +
    "    float: none;\r" +
    "\n" +
    "    position: relative;\r" +
    "\n" +
    "    top: 7px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "form .progress {\r" +
    "\n" +
    "    line-height: 15px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    ".progress {\r" +
    "\n" +
    "    display: inline-block;\r" +
    "\n" +
    "    width: 100px;\r" +
    "\n" +
    "    border: 3px groove #CCC;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".progress div {\r" +
    "\n" +
    "    font-size: smaller;\r" +
    "\n" +
    "    background: orange;\r" +
    "\n" +
    "    width: 0;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "    </style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<a href=\"/api/file/download\" target=\"_blank\">Export complet du référentiel</a>\r" +
    "\n" +
    "<form method=\"post\" action=\"/api/file/upload\" enctype=\"multipart/form-data\">\r" +
    "\n" +
    "        <input type=\"file\" name=\"files\" multiple=\"multiple\" >\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <input type=\"submit\" value=\"Upload\" />\r" +
    "\n" +
    "</form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div  ng-controller=\"MyCtrl\">\r" +
    "\n" +
    "  <h4>Upload on file select</h4>\r" +
    "\n" +
    "  <button ngf-select=\"uploadFiles($files, $invalidFiles)\" class=\"btn btn-primary\" multiple\r" +
    "\n" +
    "          accept=\"image/*\" ngf-max-height=\"1000\" ngf-max-size=\"1MB\">\r" +
    "\n" +
    "      Select Files</button>\r" +
    "\n" +
    "  <br><br>\r" +
    "\n" +
    "  Files:\r" +
    "\n" +
    "  <ul>\r" +
    "\n" +
    "    <li ng-repeat=\"f in files\" style=\"font:smaller\">{{f.name}} {{f.$errorParam}}\r" +
    "\n" +
    "      <span class=\"progress\" ng-show=\"f.progress >= 0\">\r" +
    "\n" +
    "         <uib-progressbar max=\"100\" value=\"f.progress\"><span style=\"color:white; white-space:nowrap;\">{{f.progress}} %</span></uib-progressbar> \r" +
    "\n" +
    "      </span>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-repeat=\"f in errFiles\" style=\"font:smaller\">{{f.name}} {{f.$error}} {{f.$errorParam}}\r" +
    "\n" +
    "    </li> \r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "  {{errorMsg}}\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<table class=\"table\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>Titre</th>\r" +
    "\n" +
    "            <th>Version BDA</th>\r" +
    "\n" +
    "            <th>Commentaire</th>\r" +
    "\n" +
    "            <th>Etat</th>\r" +
    "\n" +
    "            <th>Action</th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr class=\"height-20\" ng-repeat=\"animal in vm.Animals\">\r" +
    "\n" +
    "            <td><a href=\"#/home/overview/details/{{animal.Id}}\">{{animal.AnimalName}}</a></td>\r" +
    "\n" +
    "            <td>{{animal.Speed}}</td>\r" +
    "\n" +
    "            <td>{{animal.Speed}}</td>\r" +
    "\n" +
    "            <td>{{animal.Speed}}</td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-edit\" /></button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\" /></button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"btn btn-primary pull-right\">Ajouter</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "-->"
  );


  $templateCache.put('/wwwroot/app/configuration/similarity/add-similarity.html',
    "<ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li class=\"active\">Paramètres Similarités</li></ol><h1>Paramètres similarités</h1><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Formulaire</h2><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDate\"><label class=\"col-sm-3 control-label\">Date* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDate\" ng-model=\"vm.Model.Date\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.Date\"> <span mw-error=\"form.uDate\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Commentaire :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div><div ng-repeat=\"data in vm.Model.Datas\"><div class=\"form-group\" mw-container=\"form[data.Key]\"><label class=\"col-sm-3 control-label\">{{data.Key}}* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"{{data.Key}}\" ng-model=\"data.Value\" class=\"form-control\" mw-validate=\"['required','digit']\"> <span mw-error=\"form[data.Key]\"></span></div></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></form><h2>Imports</h2><div ng-if=\"vm.Similarities.length >0\"><table class=\"table\"><thead><tr><th>Titre</th><th>Date</th><th>Commentaire</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"supplier in vm.Similarities\"><td>{{supplier.Title}}</td><td>{{supplier.Date | date:'dd/MM/yyyy' }}</td><td>{{supplier.Comment}}</td></tr></tbody></table></div><div ng-if=\"vm.Similarities.length<=0\" class=\"oeup-empty\"><p>Aucun import similarité.</p></div><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li class=\"active\">Paramètres Similarités</li></ol>"
  );


  $templateCache.put('/wwwroot/app/configuration/supplier/index.html',
    "<script type=\"text/ng-template\" id=\"breadcrumbSupplier.html\"><ol class=\"breadcrumb\">\r" +
    "\n" +
    "   <li><a href=\"/\">Accueil</a></li>\r" +
    "\n" +
    "  <li><a href=\"/projets\">Projets</a></li>\r" +
    "\n" +
    "  <li class=\"active\">Equipementiers</li>\r" +
    "\n" +
    "</ol></script><div ng-include=\"'breadcrumbSupplier.html'\"></div><h1>Equipementiers</h1><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Import</h2><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDate\"><label class=\"col-sm-3 control-label\">Date* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDate\" ng-model=\"vm.Model.Date\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.Date\"> <span mw-error=\"form.uDate\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Commentaire :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div><div class=\"form-group\" mw-container=\"form.uFile\"><label class=\"col-sm-3 control-label\">Fichier :</label><div class=\"col-sm-4\"><div mw-excel mw-change=\"vm.onChange\"></div><input type=\"hidden\" ng-model=\"vm.File\" id=\"uFile\" name=\"uFile\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.File\"> <span mw-error=\"form.uFile\"></span></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Valider</button></div></div></form><h2>Imports</h2><div ng-if=\"vm.Suppliers.length >0\"><table class=\"table\"><thead><tr><th>Titre</th><th>Date</th><th>Commentaire</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"supplier in vm.Suppliers\"><td>{{supplier.Title}}</td><td>{{supplier.Date | date:'dd/MM/yyyy' }}</td><td>{{supplier.Comment}}</td></tr></tbody></table></div><div ng-if=\"vm.Suppliers.length<=0\" class=\"oeup-empty\"><p>Aucun import équipementier.</p></div><div ng-include=\"'breadcrumbSupplier.html'\"></div>"
  );


  $templateCache.put('/wwwroot/app/configuration/supplier/premium.html',
    "<style>.thumb {\r" +
    "\n" +
    "    width: 24px;\r" +
    "\n" +
    "    height: 24px;\r" +
    "\n" +
    "    float: none;\r" +
    "\n" +
    "    position: relative;\r" +
    "\n" +
    "    top: 7px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "form .progress {\r" +
    "\n" +
    "    line-height: 15px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".progress {\r" +
    "\n" +
    "    display: inline-block;\r" +
    "\n" +
    "    width: 100px;\r" +
    "\n" +
    "    border: 3px groove #CCC;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".progress div {\r" +
    "\n" +
    "    font-size: smaller;\r" +
    "\n" +
    "    background: orange;\r" +
    "\n" +
    "    width: 0;\r" +
    "\n" +
    "}</style><ol class=\"breadcrumb\"><li><a href=\"/\">Projets</a></li><li class=\"active\">Equipementiers PREMIUM</li></ol><h1>Equipementiers PREMIUM</h1><a href=\"/api/file/download\" target=\"_blank\">Export complet du référentiel</a><form method=\"post\" action=\"/api/file/upload\" enctype=\"multipart/form-data\"><input type=\"file\" name=\"files\" multiple> <input type=\"submit\" value=\"Upload\"></form><div ng-controller=\"MyCtrl\"><h4>Upload on file select</h4><button ngf-select=\"uploadFiles($files, $invalidFiles)\" class=\"btn btn-primary\" multiple accept=\"image/*\" ngf-max-height=\"1000\" ngf-max-size=\"1MB\">Select Files</button><br><br>Files:<ul><li ng-repeat=\"f in files\" style=\"font:smaller\">{{f.name}} {{f.$errorParam}} <span class=\"progress\" ng-show=\"f.progress >= 0\"><div style=\"width:{{f.progress}}%\" ng-bind=\"f.progress + '%'\"></div><uib-progressbar max=\"100\" value=\"f.progress\"><span>{{f.progress}} %</span></uib-progressbar></span></li><li ng-repeat=\"f in errFiles\" style=\"font:smaller\">{{f.name}} {{f.$error}} {{f.$errorParam}}</li></ul>{{errorMsg}}</div><table class=\"table\"><thead><tr><th>Titre</th><th>Version BDA</th><th>Commentaire</th><th>Etat</th><th>Action</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"animal in vm.Animals\"><td><a href=\"#/home/overview/details/{{animal.Id}}\">{{animal.AnimalName}}</a></td><td>{{animal.Speed}}</td><td>{{animal.Speed}}</td><td>{{animal.Speed}}</td><td><button type=\"button\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-edit\"></button> <button type=\"button\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\"></button></td></tr></tbody></table><div><button type=\"button\" class=\"btn btn-primary pull-right\">Ajouter</button></div><ol class=\"breadcrumb\"><li><a href=\"/\">Projets</a></li><li class=\"active\">Equipementiers PREMIUM</li></ol>"
  );


  $templateCache.put('/wwwroot/app/home/index.html',
    "<div class=\"row\"><h1>Accueil</h1><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Projets</div><div class=\"panel-body\"><a href=\"/projets\">Images</a></div><div class=\"panel-footer\"></div></div></div><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Export complet</div><div class=\"panel-body\"><a href=\"/api/file/download\" target=\"_blank\">Images</a></div><div class=\"panel-footer\"></div></div></div><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Synonymes constructeurs</div><div class=\"panel-body\"><a href=\"/configuration/synonymes-constructeurs\">Images</a></div><div class=\"panel-footer\"></div></div></div><div class=\"col-md-4\"><div class=\"panel panel-default\"><div class=\"panel-heading\">Transco constructeurs OA</div><div class=\"panel-body\"><a href=\"/configuration/trancodification-constructeurs\">Images</a></div><div class=\"panel-footer\"></div></div></div></div>"
  );


  $templateCache.put('/wwwroot/app/menu/menu.html',
    "<img src=\"/images/logo.png\" alt=\"Logo\" class=\"img-responsive\"><nav class=\"navbar navbar-default\" ng-controller=\"MenuController as menu\"><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">OE'up</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" ng-if=\"!menu.isHome()\"><ul class=\"nav navbar-nav\"><!--\r" +
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


  $templateCache.put('/wwwroot/app/project/add-project.html',
    "<style>.oeup-add-project .suppliers-panel h3{\r" +
    "\n" +
    "                 color: white;   \r" +
    "\n" +
    "                 font-size: 1.1em;  \r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                 .oeup-add-project .suppliers-panel p{\r" +
    "\n" +
    "                 font-size: 0.9em;   \r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                .oeup-add-project .checkbox {\r" +
    "\n" +
    "                    height: 200px;\r" +
    "\n" +
    "                    overflow-y:scroll; \r" +
    "\n" +
    "                    overflow-x:hidden;\r" +
    "\n" +
    "                    border: 1px solid #C9C9C9;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                  .oeup-add-project .checkbox label {\r" +
    "\n" +
    "                      display:block; margin-left: 20px;\r" +
    "\n" +
    "                  }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "             .oeup-add-project .suppliers-panel{\r" +
    "\n" +
    "                  \r" +
    "\n" +
    "                 position: fixed;\r" +
    "\n" +
    "                top: 20px;\r" +
    "\n" +
    "                background-color: grey;\r" +
    "\n" +
    "                right: 20px;\r" +
    "\n" +
    "                color: white;\r" +
    "\n" +
    "                width: 200px;\r" +
    "\n" +
    "                padding: 10px;\r" +
    "\n" +
    "             }</style><div class=\"oeup-add-project\"><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li><a href=\"/projets\">Projets</a></li><li class=\"active\">Ajout Projet</li></ol><h1>Ajout Projet</h1><div ng-if=\"!vm.IsEnabled\"><p>Aucune version trouvée, l'ajout de projet est impossible</p></div><div ng-if=\"vm.IsEnabled\"><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Formulaire</h2><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uVersion\"><label class=\"col-sm-3 control-label\">Version TecDoc* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uVersion\" ng-model=\"vm.Model.Version\" class=\"form-control\" mw-validate=\"vm.Rules.Version\"> <span mw-error=\"form.uVersion\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDate\"><label class=\"col-sm-3 control-label\">Date* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDate\" ng-model=\"vm.Model.Date\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.Date\"> <span mw-error=\"form.uDate\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Commentaire :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div><div class=\"form-group\" mw-container=\"form.uConnector\"><label class=\"col-sm-3 control-label\">GENARTNR* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uConnector\" ng-model=\"vm.Model.Connector\" class=\"form-control\" mw-validate=\"vm.Rules.Connector\"> <span mw-error=\"form.uConnector\"></span></div></div><h2>Paramètres Similarité</h2><div class=\"form-group\" mw-container=\"form.uSimilarity\"><label for=\"uSimilarity\" class=\"col-sm-3 control-label\">Similarité*:</label><div class=\"col-sm-4\"><select id=\"uSimilarity\" name=\"uSimilarity\" class=\"form-control\" ng-model=\"vm.Model.SelectedSimilarity\" ng-options=\"c as vm.DisplaySimilarity(c) for c in vm.Similarities\" mw-validate=\"vm.Rules.Similarity\"><option value=\"\">- Sélectionner -</option></select><span mw-error=\"form.uSimilarity\"></span></div></div><h2>Equipementiers Premium</h2><div class=\"form-group\" mw-container=\"form.uSupplier\"><label for=\"uSupplier\" class=\"col-sm-3 control-label\">Equipementier*:</label><div class=\"col-sm-4\"><select id=\"uSupplier\" name=\"uSupplier\" class=\"form-control\" ng-model=\"vm.Model.SelectedSuppliers\" ng-change=\"vm.onSupplierChange(form)\" ng-options=\"c as vm.DisplaySupplier(c) for c in vm.Suppliers\" mw-validate=\"vm.Rules.Supplier\"><option value=\"\">- Sélectionner -</option></select><span mw-error=\"form.uSupplier\"></span></div></div><div><div class=\"form-group\"><div class=\"col-sm-offset-3 col-sm-4\"><div class=\"checkbox\"><label ng-repeat=\"supplier in vm.ListSuppliers | orderBy:'Label'\"><input type=\"checkbox\" ng-model=\"vm.Model.Suppliers[supplier.HerNr.toString()]\" ng-change=\"vm.onSupplierCheck(form)\"> {{supplier.Label}}</label></div></div></div></div><div class=\"suppliers-panel\" ng-if=\"vm.getSelectedSuppliers().length > 0\"><h3>Equipementiers Premium séléctionné</h3><p ng-repeat=\"supplier in vm.getSelectedSuppliers()\">> {{ supplier.Label }}</p></div><div class=\"form-group\" mw-container=\"form.uSupplierSelected\"><label class=\"col-sm-3 control-label\"></label><div class=\"col-sm-4\"><input type=\"hidden\" ng-model=\"vm.SupplierSelected\" id=\"uSupplierSelected\" name=\"uSupplierSelected\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.SupplierSelected\"> <span mw-error=\"form.uSupplierSelected\"></span></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></form></div><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li><a href=\"/projets\">Projets</a></li><li class=\"active\">Ajout Projet</li></ol></div>"
  );


  $templateCache.put('/wwwroot/app/project/export/add-export.html',
    "<style>.oeup-add-export .refoes-panel h3{\r" +
    "\n" +
    "                 color: white;   \r" +
    "\n" +
    "                 font-size: 1.1em;  \r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                 .oeup-add-export .refoes-panel p{\r" +
    "\n" +
    "                 font-size: 0.9em;   \r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                .oeup-add-export .checkbox {\r" +
    "\n" +
    "                    height: 200px;overflow-y:scroll; overflow-x:hidden;border: 1px solid #C9C9C9;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                  .oeup-add-export .checkbox label {\r" +
    "\n" +
    "                      display:block; margin-left: 20px;\r" +
    "\n" +
    "                  }\r" +
    "\n" +
    "                \r" +
    "\n" +
    "             .oeup-add-export .refoes-panel{\r" +
    "\n" +
    "                      height: 400px;\r" +
    "\n" +
    "    overflow-y: scroll;\r" +
    "\n" +
    "                 position: fixed;\r" +
    "\n" +
    "                top: 20px;\r" +
    "\n" +
    "                background-color: #7979C9;\r" +
    "\n" +
    "                right: 20px;\r" +
    "\n" +
    "                color: white;\r" +
    "\n" +
    "                width: 300px;\r" +
    "\n" +
    "                padding: 10px;\r" +
    "\n" +
    "             }</style><div class=\"oeup-add-export\"><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li><a href=\"/projets\">Projets</a></li><li><a href=\"/projet/{{vm.Project.Id}}\">Projet {{vm.Project.Title}}</a></li><li class=\"active\">Ajout Export</li></ol><h1>Ajout Export</h1><form name=\"form\" role=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\" novalidate mw-submit=\"vm.submit(form)\"><h2>Formulaire</h2><div><div class=\"form-group\" mw-container=\"form.uTitle\"><label class=\"col-sm-3 control-label\">Titre* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uTitle\" ng-model=\"vm.Model.Title\" class=\"form-control\" mw-validate=\"vm.Rules.Title\"> <span mw-error=\"form.uTitle\"></span></div></div><div class=\"form-group\" mw-container=\"form.uDate\"><label class=\"col-sm-3 control-label\">Date* :</label><div class=\"col-sm-4\"><input type=\"text\" name=\"uDate\" ng-model=\"vm.Model.Date\" class=\"form-control\" uib-datepicker-popup=\"dd/MM/yyyy\" mw-validate=\"vm.Rules.Date\"> <span mw-error=\"form.uDate\"></span></div></div><div class=\"form-group\" mw-container=\"form.uComment\"><label class=\"col-sm-3 control-label\">Commentaire :</label><div class=\"col-sm-4\"><textarea ng-model=\"vm.Model.Comment\" class=\"form-control\" id=\"uComment\" name=\"uComment\" rows=\"4\" cols=\"30\" mw-validate=\"vm.Rules.Comment\"></textarea><span mw-error=\"form.uComment\"></span></div></div><div class=\"form-group\" mw-container=\"form.uSimilarityThreshold\"><label class=\"col-sm-3 control-label\">Seuil de similarité :</label><div class=\"col-sm-4\"><input type=\"text\" ng-model=\"vm.Model.SimilarityThreshold\" class=\"form-control\" id=\"uSimilarityThreshold\" name=\"uSimilarityThreshold\" mw-validate=\"vm.Rules.SimilarityThreshold\"> <span mw-error=\"form.uSimilarityThreshold\"></span></div></div><h2>RefOE importantes</h2><div class=\"form-group\" mw-container=\"form.uRefOe\"><label for=\"uRefOe\" class=\"col-sm-3 control-label\">Import RefOE*:</label><div class=\"col-sm-4\"><select id=\"uRefOe\" name=\"uRefOe\" class=\"form-control\" ng-model=\"vm.Model.SelectedRefOes\" ng-change=\"vm.onRefOeChange(form)\" ng-options=\"c as vm.DisplayRefOes(c) for c in vm.RefOes\" mw-validate=\"vm.Rules.RefOe\"><option value=\"\">- Sélectionner -</option></select><span mw-error=\"form.uRefOe\"></span></div></div><div><div class=\"form-group\"><div class=\"col-sm-offset-3 col-sm-4\"><div class=\"checkbox\"><label ng-repeat=\"refOe in vm.ListRefOes | orderBy:'Label'\"><input type=\"checkbox\" ng-model=\"vm.Model.RefOes[refOe.Id]\" ng-change=\"vm.onRefOeCheck(form)\"> {{vm.DisplayRefOe(refOe)}}</label></div></div></div></div><div class=\"refoes-panel\" ng-if=\"vm.getSelectedRefOes().length > 0\"><h3>RefOE séléctionnées</h3><p ng-repeat=\"refOe in vm.getSelectedRefOes()\">> {{ vm.DisplayRefOe(refOe) }}</p></div><div class=\"form-group\" mw-container=\"form.uRefOeSelected\"><label class=\"col-sm-3 control-label\"></label><div class=\"col-sm-4\"><input type=\"hidden\" ng-model=\"vm.RefOeSelected\" id=\"uRefOeSelected\" name=\"uRefOeSelected\" mw-validate=\"vm.Rules.RefOeSelected\"> <span mw-error=\"form.uRefOeSelected\"></span></div></div><div class=\"form-group\"><div class=\"col-sm-3\"></div><div class=\"col-sm-4\"><button type=\"submit\" class=\"btn btn-success\">Ajouter</button></div></div></div></form><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li><a href=\"/projets\">Projets</a></li><li><a href=\"/projet/{{vm.Project.Id}}\">Projet {{vm.Project.Title}}</a></li><li class=\"active\">Ajout Export</li></ol></div>"
  );


  $templateCache.put('/wwwroot/app/project/project.html',
    "<ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li><a href=\"/projets\">Projets</a></li><li class=\"active\">Projet {{vm.Project.Title}}</li></ol><h1>Projet {{vm.Project.Title}}</h1><h2>Informations</h2><div class=\"row\"><div class=\"col-sm-6\">Titre : {{vm.Project.Title}} Commentaire : {{vm.Project.Comment}} Version : {{vm.Project.Version}} Date : {{vm.Project.Date | date:'dd/MM/yyyy' }} GENARTNR : {{vm.Project.Connector}} Paramètres Similarité : {{vm.Project.SimilarityId}}</div><div class=\"col-sm-6\">Equipementiers Premium {{vm.Project.Suppliers}}</div></div><h2>Exports</h2><table class=\"table\" ng-if=\"vm.Project.Exports.length >0\"><thead><tr><th>Titre</th><th>Commentaire</th><th>Date</th><th>Action</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"export in vm.Project.Exports\"><td>{{export.Title}}</td><td>{{export.Comment}}</td><td>{{export.Date | date:'dd/MM/yyyy' }}</td><td><button type=\"button\" class=\"btn btn-default\" uib-popover=\"Télécharger\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-download\"></button> <button type=\"button\" class=\"btn btn-primary\" uib-popover=\"Visualiser\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-edit\"></button></td></tr></tbody></table><div ng-if=\"vm.Project.Exports.length <=0\" class=\"oeup-empty\"><p>Aucun export.</p></div><div class=\"row\"><div class=\"col-md-12\"><button type=\"button\" class=\"btn btn-primary pull-right\" ng-if=\"vm.Project.State === 0\" ng-click=\"vm.calculate(vm.Project.Id)\">Lancer le calcul</button> <button type=\"button\" class=\"btn btn-primary pull-right\" ng-if=\"vm.Project.State === 2\" ng-click=\"vm.navAdd(vm.Project.Id)\">Ajouter</button></div></div><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li><a href=\"/projets\">Projets</a></li><li class=\"active\">Projet {{vm.Project.Title}}</li></ol>"
  );


  $templateCache.put('/wwwroot/app/project/projects.html',
    "<ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li class=\"active\">Projets</li></ol><h1>Projets</h1><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Filtrer par titre</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" ng-model=\"searchTitle\"></div></div></form><table class=\"table\" ng-if=\"vm.Projects.length > 0\"><thead><tr><th><a href=\"#\" ng-click=\"vm.Sort.order('Title')\">Titre</a> <span class=\"sortorder\" ng-show=\"vm.Sort.predicate === 'Title'\" ng-class=\"{reverse:vm.Sort.reverse}\"></span></th><th>Version TecDoc</th><th><a href=\"#\" ng-click=\"vm.Sort.order('Date')\">Date</a> <span class=\"sortorder\" ng-show=\"vm.Sort.predicate === 'Date'\" ng-class=\"{reverse:vm.Sort.reverse}\"></span></th><th>Commentaire</th><th>Etat</th><th>Action</th></tr></thead><tbody><tr class=\"height-20\" ng-repeat=\"project in vm.Projects | filter:searchTitle | orderBy:vm.Sort.predicate:vm.Sort.reverse\"><td>{{project.Title}}</td><td>{{project.Version}}</td><td>{{project.Date | date:'dd/MM/yyyy' }}</td><td>{{project.Comment}}</td><td>{{vm.getStatus(project)}}</td><td><button ng-click=\"vm.navigate(project.Id)\" type=\"button\" class=\"btn btn-primary\" uib-popover=\"Visualiser\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-edit\"></button> <button ng-click=\"vm.clone(project.Id)\" type=\"button\" class=\"btn btn-primary\" uib-popover=\"Cloner\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-flash\"></button> <button ng-click=\"vm.remove(project.Id)\" type=\"button\" class=\"btn btn-danger\" uib-popover=\"Supprimer\" popover-trigger=\"mouseenter\"><span class=\"glyphicon glyphicon-remove\"></button></td></tr></tbody></table><div ng-if=\"vm.Projects.length <= 0\" class=\"oeup-empty\"><p>Aucun projet.</p></div><div class=\"row\"><div class=\"col-md-12\"><button ng-click=\"vm.navAdd()\" type=\"button\" class=\"btn btn-primary pull-right\">Ajouter</button></div></div><ol class=\"breadcrumb\"><li><a href=\"/\">Accueil</a></li><li class=\"active\">Projets</li></ol>"
  );
 return {}; }]);}());