
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts"/>

module oeup {
     'use strict'; 
    
    angular.module('myapp').directive('mwExcel', ['$window', function($window:any){

  function link(scope, element, attrs) {
  
  scope.file = { text:''};
  
  /////////////////////////////////////
  
  
  function _handleCsv(file) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(file);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

    function getAsText(fileToRead) {
        
      var reader = new FileReader();
      // Read file into memory as UTF-8      
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      var fileName = event.target.fileName;
      var result = processData(csv);
      applyChange(result,fileName);
    }

    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
       var result = {lines=[]};
       var headers = allTextLines[0].split(';');
       
        for (var i=1 ; i < allTextLines.length; i++ ) {
            var data = allTextLines[i].split(';');
                var line = {};
                for (var j=0 ; j < data.length ; j++ ) {
                    line[headers[j]]= data[j];
                }
                result.lines.push(line);
        }
        
        return result;
       
       /* var lines = [];
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
        }
        console.log(lines);*/
    }

    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }
  
  /////////////////////////////////////
  
  var X = $window.XLSX;
    var XW = {
        /* worker message */
        msg: 'xlsx',
        /* worker scripts */
        rABS: './xlsxworker2.js',
        norABS: './xlsxworker1.js',
        noxfer: './xlsxworker.js'
    };

    var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
    if(!rABS) {
        rABS = true;
    }

    var use_worker = typeof Worker !== 'undefined';
    if(!use_worker) {
        use_worker = false;
    }

    var transferable = use_worker;
    if(!transferable) {
        transferable = true;
    }

    var wtf_mode = false;

    function fixdata(data) {
        var o = "", l = 0, w = 10240;
        for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
        o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
        return o;
    }

    function ab2str(data) {
        var o = "", l = 0, w = 10240;
        for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
        o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));
        return o;
    }

    function s2ab(s) {
        var b = new ArrayBuffer(s.length*2), v = new Uint16Array(b);
        for (var i=0; i != s.length; ++i) v[i] = s.charCodeAt(i);
        return [v, b];
    }

    function xw_noxfer(data, cb) {
        var worker = new Worker(XW.noxfer);
        worker.onmessage = function(e) {
            switch(e.data.t) {
                case 'ready': break;
                case 'e': console.error(e.data.d); break;
                case XW.msg: cb(JSON.parse(e.data.d)); break;
            }
        };
        var arr = rABS ? data : btoa(fixdata(data));
        worker.postMessage({d:arr,b:rABS});
    }

    function xw_xfer(data, cb) {
        var worker = new Worker(rABS ? XW.rABS : XW.norABS);
        worker.onmessage = function(e) {
            switch(e.data.t) {
                case 'ready': break;
                case 'e': console.error(e.data.d); break;
                default: $window.xx=ab2str(e.data).replace(/\n/g,"\\n").replace(/\r/g,"\\r"); console.log("done"); cb(JSON.parse($window.xx)); break;
            }
        };
        if(rABS) {
            var val = s2ab(data);
            worker.postMessage(val[1], [val[1]]);
        } else {
            worker.postMessage(data, [data]);
        }
    }
    
    function to_json(workbook, name) {
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
            var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if(roa.length > 0){
                result[sheetName] = roa;
            }
        });
        return result;
    }
    /*

    function to_csv(workbook) {
        var result = [];
        workbook.SheetNames.forEach(function(sheetName) {
            var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);
            if(csv.length > 0){
                result.push("SHEET: " + sheetName);
                result.push("");
                result.push(csv);
            }
        });
        return result.join("\n");
    }

    function to_formulae(workbook) {
        var result = [];
        workbook.SheetNames.forEach(function(sheetName) {
            var formulae = X.utils.get_formulae(workbook.Sheets[sheetName]);
            if(formulae.length > 0){
                result.push("SHEET: " + sheetName);
                result.push("");
                result.push(formulae.join("\n"));
            }
        });
        return result.join("\n");
    }*/
    
    scope.$safeApply = function(fn) {
                                var phase = this.$root.$$phase;
                                if (phase == '$apply' || phase == '$digest') {
                                    if (fn && (typeof (fn) === 'function')) {
                                        fn();
                                    }
                                } else {
                                    this.$apply(fn);
                                }
                            };

    function process_wb(wb,name) {
        var result = to_json(wb, name);       
        applyChange(result);
    }

    var drop = element.find('div')[0];
    function handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        rABS = true;//document.getElementsByName("userabs")[0].checked;
        use_worker = false;//document.getElementsByName("useworker")[0].checked;
        _handleFile(e.dataTransfer.files);
    }
    
    function _handleFile(files){
        var f = files[0];
         if(files.length > 0) {
            
                
                var name = f.name;
                
                if(name.toLowerString().indexOf('.csv') !== -1){
                    _handleCsv(file);
                } else {
                    var reader = new FileReader();
                    reader.onerror = errorHandler;
                    reader.onload = function(e:any) {
                        if(typeof console !== 'undefined') {
                            console.log("onload", new Date(), rABS, use_worker);
                        }
                        var data = e.target.result;
                        if(use_worker) {
                            $window.xw(data, process_wb);
                        } else {
                            var wb;
                            if(rABS) {
                                wb = X.read(data, {type: 'binary'});
                            } else {
                                var arr = fixdata(data);
                                wb = X.read(btoa(arr), {type: 'base64'});
                            }
                            process_wb(wb, name);
                        }
                    };
                    if(rABS) {
                        reader.readAsBinaryString(f);
                    }
                    else {
                        reader.readAsArrayBuffer(f);
                    }
                }
        }
    }
    
    function applyChange(result, fileName){
         if(scope.mwChange) {
            scope.$safeApply(function() {
                var text = scope.mwChange(result, fileName);
                scope.file.text = text ? text: '';
            });
    }

    function handleDragover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    if(drop.addEventListener) {
        drop.addEventListener('dragenter', handleDragover, false);
        drop.addEventListener('dragover', handleDragover, false);
        drop.addEventListener('drop', handleDrop, false);
    }


    var xlf = element.find('input')[0];
    function handleFile(e) {
        rABS = true; //document.getElementsByName("userabs")[0].checked;
        use_worker = false; //document.getElementsByName("useworker")[0].checked;
        var files = e.target.files;
        _handleFile(files);
        if(files.length > 0) {
            element.find('input')[0].value= null;
        }
        /*if(files.length > 0) {
            var f = files[0];
            {
                var reader = new FileReader();
                var name = f.name;
                reader.onload = function(e:any) {
                    if(typeof console !== 'undefined') {
                        console.log("onload", new Date(), rABS, use_worker)
                    };
                    var data = e.target.result;
                    if(use_worker) {
                        $window.xw(data, process_wb);
                    } else {
                        var wb;
                        if(rABS) {
                            wb = X.read(data, {type: 'binary'});
                        } else {
                            var arr = fixdata(data);
                            wb = X.read(btoa(arr), {type: 'base64'});
                        }
                        process_wb(wb, name);
                    }
                };
                if(rABS) {
                    reader.readAsBinaryString(f);
                }
                else {
                    reader.readAsArrayBuffer(f);
                }
                element.find('input')[0].value= null;
            }*/
        }
    }

    if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
  }
  return {
      scope:{
          mwChange:'='
      },
    link: link,
    templateUrl:'input-xlsx.html'
  };
}]);

}