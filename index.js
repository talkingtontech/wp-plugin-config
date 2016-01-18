/* global require, __dirname */
module.exports = function() {
  'use strict';

  var path = require('path');
  var project = {};

  project.paths = {
    config:    'config/',
    assets:    'assets/',
    dist:      'dist/',
    languages: 'languages/',
    tmp:       'tmp/',
    jsSrc:     'js/src/',
    cssSrc:    'css/src/',
    fontSrc:   'font/src/',
    imagesSrc: 'images/src/',
    bower:     'bower/',
    composer:  'composer/',
    grunt:     'config/grunt/',
    tasks:     'tasks/'
  };

  project.paths.global = {
    config: path.join(__dirname, 'config/'),
    grunt:  path.join(__dirname, 'config/grunt/'),
    tasks:  path.join(__dirname, 'tasks/')
  };

  project.taskMap = {
    addtextdomain: 'grunt-wp-i18n',
    makepot:       'grunt-wp-i18n',
    readpkg:       'ttech-plugin-config'
  };

  project.files = {
    scss:   project.paths.cssSrc  + '**/*.scss',
    config: project.paths.config  + '**/*.js'
  };

  project.files.js = [
    project.paths.jsSrc + '**/*.js',
    '!' + project.paths.jsSrc + '**/*.min.js',
    '!' + project.paths.jsSrc + 'vendor/'
  ];

  project.files.php = [
    '*.php',
    '**/*.php',
    '!.git/**',
    '!.sass-cache/**',
    '!assets/**',
    '!css/**',
    '!release/**',
    '!fonts/**',
    '!images/**',
    '!js/**',
    '!languages/**',
    '!bower_components/**',
    '!bower/**',
    '!composer/**',
    '!node_modules/**',
    '!tmp/**'
  ];

  return project;
};
