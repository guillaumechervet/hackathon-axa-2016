module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-cache-control");
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
 grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        hash: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',          
        ts: {
            default : {
                src: ["wwwroot/app/**/*.ts"],
                // specifying tsconfig as a boolean will use the 'tsconfig.json' in same folder as Gruntfile.js 
                tsconfig: true
            }
        },
        tslint: {
            options: {
                // can be a configuration object or a filepath to tslint.json
                configuration: "tslint.json"
            },
            files: {
                src: ["wwwroot/app/**/*.ts", "!node_modules/**/*.ts"]
            }
        },
        concat: {
            vendorjs: {
                src: [
                    "wwwroot/lib/jquery/jquery.js",
                    "wwwroot/lib/toastr/toastr.js",
                    "wwwroot/lib/angular/angular.min.js",
                    "wwwroot/lib/angular-animate/angular-animate.min.js",
                    "wwwroot/lib/angular-route/angular-route.min.js",
                    "wwwroot/lib/bootstrap/bootstrap.min.js",
                    "wwwroot/lib/angular-bootstrap/ui-bootstrap-tpls.min.js",
                    "wwwroot/lib/ng-file-upload/ng-file-upload.js",
                    "wwwroot/oldlib/globalize/globalize.js",
                    "wwwroot/oldlib/globalize/cultures/globalize.culture.fr.js",
                    "wwwroot/lib/mw.validation/mw.validation.js",
                    "wwwroot/lib/mw.angular.validation/sources/app.js",
                    "wwwroot/lib/mw.angular.validation/sources/mwContainer-directive.js",
                    "wwwroot/lib/mw.angular.validation/sources/mwError-directive.js",
                    "wwwroot/lib/mw.angular.validation/sources/mwSubmit-directive.js",
                    "wwwroot/lib/mw.angular.validation/sources/mwValidate-directive.js"
                ],
                dest: "wwwroot/lib/vendor.min.js"
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            mycode: {
                files: {
                    'wwwroot/lib/mycode.min.css': [
                       "wwwroot/app/main.css"
                    ]
                }
            },
            vendor: {
                files: {
                    'wwwroot/lib/vendor.min.css': [
                          "wwwroot/lib/bootstrap/bootstrap.min.css",
                          "wwwroot/lib/toastr/toastr.css",
                    ]
                }
            }
        },
        uglify: {
            my_min_files: {
                files: {
                    'wwwroot/lib/mycode.min.js': [
                        "wwwroot/app/app.js",
                        "wwwroot/app/project/*.js"
                    ]
                }
            }
        },
        cache_control: {
            your_target: {
                source: ['wwwroot/index.html'],
                options: {
                    version: "<%= hash %>",
                    links: true,
                    scripts: true,
                    replace: true
                }
            }
        },
        ngtemplates: {
            app: {
                src: 'wwwroot/app/**/*.html',
                dest: 'wwwroot/app/templates.js'
            },
            options: {
                htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                prefix: '/',
                bootstrap: function (module, script) {
                    return "(function () {'use strict';angular.module('myapp').factory('preLoaderTemplate', ['$templateCache',  function ($templateCache) {" + script + ' return {}; }]);}());';
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        watch: {
            appFolderScripts: {
                files: ['wwwroot/app/**/*.ts'],
                tasks: ['ts', 'tslint']
            },
            appFolderCss: {
                files: ['wwwroot/app/**/*.css'],
                tasks: ['cssmin']
            },
             appFolderHtml: {
                files: ['wwwroot/app/**/*.html'],
                tasks: ['ngtemplates']
            }
        },
     copy: {
            main: {
               files: [
                    // includes files within path
                    { expand: true, flatten: true, src: ['wwwroot/lib/*/*.eot'], dest: 'wwwroot/fonts' },
                    { expand: true, flatten: true, src: ['wwwroot/lib/*/*.svg'], dest: 'wwwroot/fonts' },
                    { expand: true, flatten: true, src: ['wwwroot/lib/*/*.ttf'], dest: 'wwwroot/fonts' },
                    { expand: true, flatten: true, src: ['wwwroot/lib/*/*.woff'], dest: 'wwwroot/fonts' },
                    { expand: true, flatten: true, src: ['wwwroot/lib/*/*.woff2'], dest: 'wwwroot/fonts' },
                    { expand: true, flatten: true, src: ['wwwroot/lib/*/*.otf'], dest: 'wwwroot/fonts' },
                     { expand: true, flatten: true, src: ['bower_components/js-xlsx/*.js'], dest: 'wwwroot/lib/js-xlsx' }
                ]
            }
        },
        shell: {
            web: {
                command: function () {
                    return 'dnx-watch web';
                }
            }
        }
    });


    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin', 'cache_control', 'ts', 'watch']);
    grunt.registerTask('production', ['bower', 'tslint', 'copy', 'concat', 'uglify', 'cssmin', 'cache_control', 'ts']);
};