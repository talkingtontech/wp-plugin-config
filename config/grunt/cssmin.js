// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
    options: {
        report: 'gzip',
        sourceMap: false
    },
    style: {
        expand: true,
        cwd: '<%= paths.css %>',
        src: [
            '*.css',
            '**/*.css',
            '!*.min.css',
            '!**/*.min.css'
        ],
        dest: '<%= paths.css %>',
        ext: '.min.css',
        extDot: 'last'
    }
};