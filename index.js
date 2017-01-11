/* global require, __dirname */
module.exports = function() {
  'use strict';

  var path = require('path');
  var project = {};

	project.paths = {
		config:     'config/',
		assets:     'assets/',
		languages:  'languages/',
		release:    'release/',
		jsSrc:      'js/src/',
		jsVend:     'js/src/vendor/',
		jsDist:     'js/dist/',
		cssSrc:     'css/src/',
		cssVend:    'css/src/vendor/',
		cssDist:    'css/dist/',
		fontsSrc:   'fonts/src/',
		fontsVend:  'fonts/src/vendor/',
		fontsDist:  'fonts/dist/',
		imagesSrc:  'images/src/',
		imagesDist: 'images/dist/',
		bower:      'bower/',
		grunt:      'config/grunt/',
		tasks:      'tasks/'
	};

  project.paths.global = {
    config: path.join( __dirname, 'config/' ),
    grunt:  path.join( __dirname, 'config/grunt/' ),
    tasks:  path.join( __dirname, 'tasks/' )
  };

  project.taskMap = {
    addtextdomain: 'grunt-wp-i18n',
    makepot:       'grunt-wp-i18n',
    readpkg:       'ttech-wp-plugin-config'
  };

	project.files = {
		scss:   project.paths.cssSrc  + '**/*.scss',
		images: project.paths.imagesSrc  + '**/*',
		config: project.paths.config  + '**/*.js'
	};

	project.files.js = [
		project.paths.jsSrc + '**/*.js',
		'!' + project.paths.jsSrc + '**/*.min.js',
		'!' + project.paths.jsVend
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
    '!node_modules/**',
    '!tmp/**'
  ];

  return project;
};
