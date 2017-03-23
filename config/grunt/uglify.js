// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
    plugin: {
        options: {
            preserveComments: /^!/,
            sourceMap: false,
            mangle: true,
            compress: true,
            report: 'gzip'
        },
        files: [
            {
                expand: true,
                cwd: '<%= paths.js %>',
                src: [
                    '**/*.js',
                    '!**/*.min.js'
                ],
                dest: '<%= paths.js %>',
                ext: '.min.js',
                extDot: 'last'
            }
        ]
    }
};