module.exports = function(grunt) {
   //TODO: (martin) finish grunt testing tasks
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-karma');
//    grunt.loadNpmTasks('grunt-html2js');

    grunt.loadNpmTasks('grunt-bower-install');

    // Project configuration
    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),

        'bower-install': {
            target: {
                // Point to the html file that should be updated
                // when you run `grunt bower-install`
                html: 'server/app/views/includes/head.jade'
            }
        }
//        src: {
//            js: ['./src/app/**/*.js'],
//            html: ['./src/index.html'],
//            tpl: ['./src/app/**/*.tpl.html'],
//            css: ['./src/assets/css/*.css'],
//            specs: ['test/unit/*.spec.js'],
//            scenarios: ['test/e2e/*.scenario.js']
//        },
//        jshint: {
//            files: ['Gruntfile.js', '<%= src.angular.js %>', '<%= src.specs %>', '<%= src.scenarios %>'],
//            options: {
//                // options here to override JSHint defaults
//                curly:true,
//                eqeqeq:true,
//                immed:true,
//                latedef:true,
//                newcap:true,
//                noarg:true,
//                sub:true,
//                boss:true,
//                eqnull:true,
//                globals:{}
//            }
//        },
//        watch: {
//            options: {
//                // Start a live reload server on the default port 35729
//                livereload: true
//            },
//            files:['<%= src.js %>', '<%= src.html %>', '<%= src.tpl %>', '<%= src.css %>'],
//            tasks:['default','timestamp']
//        },
//        karma: {
//            unit: { configFile: './test/config/unit.js' },
//            e2e: { configFile: './test/config/e2e.js' }
////          watch: { options: karmaConfig('./test/config/unit.js', { singleRun:false, autoWatch: true}) }
//        },
//        html2js: {
//            app: {
//                options: {
//                    base: 'src/app'
//                },
//                src: ['<%= src.tpl %>'],
//                dest: '<%= distdir %>/templates/app.js',
//                module: 'templates.app'
//            }
//        }
    });

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });

    // Default task
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['karma:unit', 'karma:e2e']);
};