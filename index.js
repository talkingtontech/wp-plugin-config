/* global require, __dirname */
module.exports = function () {
    'use strict';

    var path = require('path');
    var project = {};

    project.paths = {
        config: 'config/',
        assets: 'assets/',
        dist: 'dist/',
        css: 'css/',
        cssSrc: 'scss/',
        cssVend: 'scss/vendor/',
        js: 'js/',
        jsSrc: 'assets/theme/js/',
        jsVend: 'assets/theme/js/vendor/',
        images: 'images/',
        imagesSrc: 'assets/theme/images/',
        imagesVend: 'assets/theme/images/vendor/',
        fonts: 'fonts/',
        fontsSrc: 'assets/theme/fonts/',
        fontsVend: 'assets/theme/fonts/vendor/',
        phpVend: 'includes/vendor/',
        languages: 'languages/',
        composer: 'assets/composer/',
        node: 'node_modules/',
        grunt: 'config/grunt/',
        tasks: 'tasks/'
    };

    project.paths.global = {
        config: path.join(__dirname, 'config/'),
        grunt: path.join(__dirname, 'config/grunt/'),
        tasks: path.join(__dirname, 'tasks/')
    };

    project.taskMap = {
        addtextdomain: 'grunt-wp-i18n',
        readpkg: 'ttech-wp-plugin-config',
        makepot: 'grunt-wp-i18n'
    };

    project.files = {
        scss: project.paths.cssSrc + '**/*.scss',
        images: project.paths.imagesSrc + '**/*',
        config: project.paths.config + '**/*.js'
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
        '!' + project.paths.assets + '**',
        '!' + project.paths.css + '**',
        '!' + project.paths.dist + '**',
        '!' + project.paths.fonts + '**',
        '!' + project.paths.images + '**',
        '!' + project.paths.js + '**',
        '!' + project.paths.languages + '**',
        '!' + project.paths.node + '**',
        '!bower_components/**',
        '!tmp/**'
    ];

    return project;
};
