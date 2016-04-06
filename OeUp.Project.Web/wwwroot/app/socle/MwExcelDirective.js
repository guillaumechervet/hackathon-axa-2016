var oeup;
(function (oeup) {
    'use strict';
    angular.module('myapp').directive('mwExcel', ['$window', function ($window) {
            function link(scope, element, attrs) {
                scope.file = { text: '' };
                var X = $window.XLSX;
                var XW = {
                    msg: 'xlsx',
                    rABS: './xlsxworker2.js',
                    norABS: './xlsxworker1.js',
                    noxfer: './xlsxworker.js'
                };
                var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
                if (!rABS) {
                    rABS = true;
                }
                var use_worker = typeof Worker !== 'undefined';
                if (!use_worker) {
                    use_worker = false;
                }
                var transferable = use_worker;
                if (!transferable) {
                    transferable = true;
                }
                var wtf_mode = false;
                function fixdata(data) {
                    var o = "", l = 0, w = 10240;
                    for (; l < data.byteLength / w; ++l)
                        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
                    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
                    return o;
                }
                function ab2str(data) {
                    var o = "", l = 0, w = 10240;
                    for (; l < data.byteLength / w; ++l)
                        o += String.fromCharCode.apply(null, new Uint16Array(data.slice(l * w, l * w + w)));
                    o += String.fromCharCode.apply(null, new Uint16Array(data.slice(l * w)));
                    return o;
                }
                function s2ab(s) {
                    var b = new ArrayBuffer(s.length * 2), v = new Uint16Array(b);
                    for (var i = 0; i != s.length; ++i)
                        v[i] = s.charCodeAt(i);
                    return [v, b];
                }
                function xw_noxfer(data, cb) {
                    var worker = new Worker(XW.noxfer);
                    worker.onmessage = function (e) {
                        switch (e.data.t) {
                            case 'ready': break;
                            case 'e':
                                console.error(e.data.d);
                                break;
                            case XW.msg:
                                cb(JSON.parse(e.data.d));
                                break;
                        }
                    };
                    var arr = rABS ? data : btoa(fixdata(data));
                    worker.postMessage({ d: arr, b: rABS });
                }
                function xw_xfer(data, cb) {
                    var worker = new Worker(rABS ? XW.rABS : XW.norABS);
                    worker.onmessage = function (e) {
                        switch (e.data.t) {
                            case 'ready': break;
                            case 'e':
                                console.error(e.data.d);
                                break;
                            default:
                                $window.xx = ab2str(e.data).replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                                console.log("done");
                                cb(JSON.parse($window.xx));
                                break;
                        }
                    };
                    if (rABS) {
                        var val = s2ab(data);
                        worker.postMessage(val[1], [val[1]]);
                    }
                    else {
                        worker.postMessage(data, [data]);
                    }
                }
                function to_json(workbook) {
                    var result = {};
                    workbook.SheetNames.forEach(function (sheetName) {
                        var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                        if (roa.length > 0) {
                            result[sheetName] = roa;
                        }
                    });
                    return result;
                }
                function to_csv(workbook) {
                    var result = [];
                    workbook.SheetNames.forEach(function (sheetName) {
                        var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);
                        if (csv.length > 0) {
                            result.push("SHEET: " + sheetName);
                            result.push("");
                            result.push(csv);
                        }
                    });
                    return result.join("\n");
                }
                function to_formulae(workbook) {
                    var result = [];
                    workbook.SheetNames.forEach(function (sheetName) {
                        var formulae = X.utils.get_formulae(workbook.Sheets[sheetName]);
                        if (formulae.length > 0) {
                            result.push("SHEET: " + sheetName);
                            result.push("");
                            result.push(formulae.join("\n"));
                        }
                    });
                    return result.join("\n");
                }
                scope.$safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase == '$apply' || phase == '$digest') {
                        if (fn && (typeof (fn) === 'function')) {
                            fn();
                        }
                    }
                    else {
                        this.$apply(fn);
                    }
                };
                function process_wb(wb) {
                    var result = to_json(wb);
                    if (scope.mwChange) {
                        scope.$safeApply(function () {
                            var text = scope.mwChange(result);
                            scope.file.text = text ? text : '';
                        });
                    }
                }
                var drop = element.find('div')[0];
                function handleDrop(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    rABS = true;
                    use_worker = false;
                    var files = e.dataTransfer.files;
                    var f = files[0];
                    if (files.length > 0) {
                        {
                            var reader = new FileReader();
                            var name = f.name;
                            reader.onload = function (e) {
                                if (typeof console !== 'undefined')
                                    console.log("onload", new Date(), rABS, use_worker);
                                var data = e.target.result;
                                if (use_worker) {
                                    $window.xw(data, process_wb);
                                }
                                else {
                                    var wb;
                                    if (rABS) {
                                        wb = X.read(data, { type: 'binary' });
                                    }
                                    else {
                                        var arr = fixdata(data);
                                        wb = X.read(btoa(arr), { type: 'base64' });
                                    }
                                    process_wb(wb);
                                }
                            };
                            if (rABS) {
                                reader.readAsBinaryString(f);
                            }
                            else {
                                reader.readAsArrayBuffer(f);
                            }
                        }
                    }
                }
                function handleDragover(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'copy';
                }
                if (drop.addEventListener) {
                    drop.addEventListener('dragenter', handleDragover, false);
                    drop.addEventListener('dragover', handleDragover, false);
                    drop.addEventListener('drop', handleDrop, false);
                }
                var xlf = element.find('input')[0];
                function handleFile(e) {
                    rABS = true;
                    use_worker = false;
                    var files = e.target.files;
                    if (files.length > 0) {
                        var f = files[0];
                        {
                            var reader = new FileReader();
                            var name = f.name;
                            reader.onload = function (e) {
                                if (typeof console !== 'undefined') {
                                    console.log("onload", new Date(), rABS, use_worker);
                                }
                                ;
                                var data = e.target.result;
                                if (use_worker) {
                                    $window.xw(data, process_wb);
                                }
                                else {
                                    var wb;
                                    if (rABS) {
                                        wb = X.read(data, { type: 'binary' });
                                    }
                                    else {
                                        var arr = fixdata(data);
                                        wb = X.read(btoa(arr), { type: 'base64' });
                                    }
                                    process_wb(wb);
                                }
                            };
                            if (rABS) {
                                reader.readAsBinaryString(f);
                            }
                            else {
                                reader.readAsArrayBuffer(f);
                            }
                            element.find('input')[0].value = null;
                        }
                    }
                }
                if (xlf.addEventListener)
                    xlf.addEventListener('change', handleFile, false);
            }
            return {
                scope: {
                    mwChange: '='
                },
                link: link,
                templateUrl: 'input-xlsx.html'
            };
        }]);
})(oeup || (oeup = {}));
//# sourceMappingURL=MwExcelDirective.js.map