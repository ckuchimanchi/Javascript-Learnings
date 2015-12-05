module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        traceur: {
            options: {
                experimental : true,
                blockBinding : true,
                copyRuntime: 'app/es5',
                 moduleNaming: {
                        stripPrefix: "app/es5"
                },
                sourceMap: true
            },
            sut: {               
                files: 
                //{
                //    'app/es5/sut.js' : ['app/es6/**/*.js']
                //} 
                [
                    {
                        expand:true,
                        src:'app/es6/**/*.js',
                        dest:'app/es5/',
                        flatten:true 
                    }
                ]
            },
            test: {              
                files: [
                    {
                        expand:true,
                        src : "tests/es6/**/*.js",
                        dest : "app/es5/specs",
                        flatten: true
                    }
                ]
                //{
                    // 'app/es5/specs.js': ['tests/es6/**/*.js']
                    
                //}
            }
        },

        connect: {
            server: {
                options: {
                    base: ['bower_components', 'app','tests'],
                    livereload: 3621,
                    hostname: '127.0.0.1',
                    port: 8001,
                    open: 'http://localhost:8001/index.html'
                }
            }
        },

        watch: {
            sut: {
              files: ['app/es6/**/*.js'],
              tasks: ['traceur']
            },
            specs: {
                files: ['tests/es6/**/*.js'],
                tasks: ['traceur']
            },
            browser: {
                options: {
                    livereload: 3621
                },
                files : ['app/es5/**/*.js','app/**/*.html'],
            }
        }

    });

    grunt.registerTask('default',['build']);


    grunt.registerTask('build',['traceur','connect:server','watch']);


};