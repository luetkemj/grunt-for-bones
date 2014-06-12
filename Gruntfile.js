module.exports = function(grunt) {

/*
@TODO: get some watch tasks running so i don't need to compile everything always

@TODO: reconfigure the scss folder and use this plugin to install it.https://www.npmjs.org/package/grunt-curl

@TODO: Get this repo setup outside of the bones theme. No reason to have it sit inside of a theme in the repo.
*/

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'library/js/scripts.js',
        dest: 'library/js/scripts.min.js'
      }
    },

    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'library/css/tmp': ['library/css/*.css']
        }
      }
    },

// susy and compass can be finicky together. If you have problems try this thread on stack overflow. http://stackoverflow.com/questions/22299466/cant-get-sass-compass-susy-installed-on-osx-due-to-version-conflict
    compass: {
      dist: {
        options: {
          cssDir: 'library/css',
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
           
    jshint: {
      all: ['Gruntfile.js', 'library/js/scripts.js']
    },

// @todo: get js running in livereload as well
    watch: {
      scss: {
        files: ['library/scss/**/*.scss'],
        tasks: ['compass:dist']
      },
      css: {
        files: ['library/css/**/*.css']
      },
      livereload: {
        files: ['library/css/**/*.css'],
        options: { livereload: true }
      }
    },

    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'src/css/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: 'dest/css/' // -> dest/css/file1.css, dest/css/file2.css
      }
    }    


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['uglify'], 'compass','cmq');
  grunt.registerTask('lint', 'jshint');

};