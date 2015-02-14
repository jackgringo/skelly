var grunt = require('grunt');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          keepalive: true
        }
      }
    },

    watch: {
      js: {
        files: ['public/js/**/*.js'],
        tasks: ['requirejs']
      },
      sass: {
        files: ['public/styles/*.scss'],
        tasks: ['sass']
      },
      options: {
        reload: true
      }
    },

    sass: {
      dist: {
        files: {
          '.tmp/styles/screen.css': 'public/styles/screen.scss'
        }
      }
    }

  });

  grunt.registerTask('default', []);
};
