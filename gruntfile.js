/*
 * grunt-contrib-imagemin
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    clean: {
      test: ['tmp']
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '**/*.{gif,GIF,jpg,JPG,png,PNG}',
          dest: 'images/'
        }]
      },
      rename: {
        files: {
          'tmp/rename.jpg': 'test/fixtures/test.jpg'
        }
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('test', [
    'jshint',
    'clean',
    'imagemin',
    'nodeunit',
    'clean'
  ]);

  grunt.registerTask('default', ['test', 'build-contrib']);
};