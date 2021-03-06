// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require('autoprefixer');

module.exports = {
    options: {
        map: false,
        processors: [
            autoprefixer({
                browsers: [
                    'Android >= 2.1',
                    'Chrome >= 21',
                    'Edge >= 12',
                    'Explorer >= 8',
                    'Firefox >= 17',
                    'Opera >= 12.1',
                    'Safari >= 6.0'
                ]
            })
        ]
    },
    plugin: {
        expand: true,
        cwd: '<%= paths.css %>',
        src: [
            '*.css',
            '**/*.css',
            '!*.min.css',
            '!**/*.min.css'
        ],
        dest: '<%= paths.css %>',
        ext: '.css',
        extDot: 'last'
    }
};