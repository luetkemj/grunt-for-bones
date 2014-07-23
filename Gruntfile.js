module.exports = function(grunt) {
 
    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        compass: {
          dist: {
            options: {
              cssDir: 'library/css/dev',
              sassDir: 'library/scss',
              imagesDir: 'library/images',
              javascriptsDir: 'library/js',
              environment: 'development',
              relativeAssets: true,
              outputStyle: 'expanded',
              raw: 'preferred_syntax = :scss\n',
              require: ['susy','breakpoint']
            }
          }
        },
 
        autoprefixer: {
            dist: {
                files: {
                    'library/css/dev/style.css' : 'library/css/dev/style.css'
                }
            }
        },
 
        cmq: {
            your_target: {
                files: {
                    'library/css' : 'library/css/dev/style.css'
                }
            }
        },
 
        cssmin: {
            combine: {
                files: {
                    'library/css/style.min.css': ['library/css/style.css']
                }
            }
        },
 
        browserSync: {
            files: {
                src : 'library/css/style.css'
            }
        },
 
        jshint: {
            all: [
                'library/js/*.js',
            ],
            options: {
                jshintrc: 'library/js/.jshintrc'
            }
        },
 
        concat: {  
            footer: {
                src: [
                    'library/js/libs/*.js', // All JS in the libs folder
                    'library/js/scripts.js'  // This specific file
                ],
                dest: 'library/js/main.js',
            }
        },
 
        uglify: {
            footer: {
                src: 'library/js/main.js',
                dest: 'library/js/main.min.js'
            }
        },
 
        watch: {
            scss: {
                files: ['library/scss/**/*.scss'],
                tasks: ['default']
            },
            css: {
                files: ['library/css/**/*.css']
            },
            js: {
                files: ['library/js/**/*'],
                tasks: ['concat', 'uglify']
            },
            livereload: {
                files: ['**/*.html', '**/*.php', '**/*.js', '**/*.css', '!**/node_modules/**'], // add files to watch to trigger a reload
                options: { livereload: true }
            }
        },
 
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'library/images/dev/',
                    src: ['**/*.{png,jpg,gif,svg,ico}'],
                    dest: 'library/images/'
                }]
            }
        },
 
        clean: {
            test: [
                'library/images/dev/*' //uncomment to clean img dir too
            ]
        },
 
        devcode : {
          options :
          {
            html: true,        // html files parsing?
            js: true,          // javascript files parsing?
            css: true,         // css files parsing?
            clean: true,       // removes devcode comments even if code was not removed
            block: {
              open: 'devcode', // with this string we open a block of code
              close: 'endcode' // with this string we close a block of code
            },
            dest: '/'       // default destination which overwrittes environment variable
          },
          dist : {             // settings for task used with 'devcode:dist'
            options: {
                source: '/',
                dest: '/',
                env: 'production'
            }
          }
        },
 
 
    });
 
    // 3. Where we tell Grunt we plan to use this plug-in.
 
    // Sass
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
 
    // JS
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Images
    grunt.loadNpmTasks('grunt-contrib-imagemin');
 
    // Clean
    grunt.loadNpmTasks('grunt-contrib-clean');
 
    // DevCode
    grunt.loadNpmTasks('grunt-devcode');
   
    // Browser Reload + File Watch
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
 
 
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
 
    // cleans directories, does everything for css, js, and images for deploy
    grunt.registerTask('prod', ['clean', 'img', 'compass', 'autoprefixer', 'cmq', 'cssmin', 'concat', 'uglify']);
 
    // runs Sass, autoprefixer, media query combine, and minify
    grunt.registerTask('css', ['watch:sass']);
 
    // combines and minifies js on js changes
    grunt.registerTask('js', ['watch:js']);
 
    // reloads on any html or php changes
    // you can add more files to watch in the settings
    grunt.registerTask('reload', ['watch:livereload']);
 
    // injects new css into open page on css change
    grunt.registerTask('sync', ['browserSync']);
 
    // opimizes images in dev and moves them to prod
    grunt.registerTask('img', ['imagemin']);
 
    // deletes all files in build directories (be careful with this one)
    grunt.registerTask('delete', ['clean']);
 
    // compiles sass once
    grunt.registerTask('default', ['compass', 'autoprefixer', 'cmq', 'cssmin']);
 
};