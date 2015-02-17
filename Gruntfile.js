var grunt = require('grunt');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    concurrent: {
      server: {
        tasks: ['connect', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          keepalive: true,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('public')
            ];
          }
        }
      }
    },

    watch: {
      js: {
        files: ['public/scripts/**/*.js'],
        tasks: ['requirejs']
      },
      sass: {
        files: ['public/styles/*.scss'],
        tasks: ['sass:server']
      },
      options: {
        reload: true
      }
    },

    requirejs: {
      server: {
        options: {
          basePath: 'public/scripts',
          mainConfigFile: 'public/scripts/main.js',
          out: '.tmp/scripts/main.js',
          name: '../bower_components/almond/almond',
          include: ['main']
        }
      }
    },

    sass: {
      server: {
        files: {
          '.tmp/styles/screen.css': 'public/styles/screen.scss'
        },
        options: {
          outputStyle: 'expanded'
        }
      },
      dist: {
        files: {
          '.tmp/styles/screen.css': 'public/styles/screen.scss'
        }
      }
    }

  });

  grunt.registerTask('server', ['concurrent:server']);

  grunt.registerTask('default', []);
};
