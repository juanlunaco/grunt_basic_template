module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/libs/*.js', 'js/*.js'],
        dest: 'js/builds/script.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded',
          //loadPath: require('node-bourbon').includePaths,
          loadPath: require('node-neat').includePaths
        },
        files: {
          'css/builds/prefixed/main.css': 'css/main.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/builds/minified/main.min.css': ['css/builds/prefixed/main.css']
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false,
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'connect', 'watch']);

};
