module.exports = function () {
    'use strict';
    var tasks = {
        'build': [
            'clean',
            'build:fonts',
            'build:css',
            'build:images',
            'build:js',
            'build:i18n'
        ],
        'build:dependencies': [
            'build:dependencies:css',
            'build:dependencies:fonts',
            'build:dependencies:js'
        ],
        'build:i18n': [
            'clean:languages',
            'addtextdomain',
            'makepot',
            'newer:copy:languages'
        ],
        'newplugin': [
            'copy:rename',
            'replace:packagename',
            'build'
        ],
        'package': [
            'build',
            'compress'
        ],
        'package:dev': [
            'build',
            'compress:dev'
        ],
        'release:major': [
            'version::major',
            'package'
        ],
        'release:minor': [
            'version::minor',
            'package'
        ],
        'release:patch': [
            'version::patch',
            'package'
        ],
        'default': [
            'watch'
        ]
    };

    return tasks;
};