// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
    options: {
        swapLeftRightInUrl: false,
        swapLtrRtlInUrl: false,
        autoRename: false,
        preserveDirectives: true,
        map: false
    },
    plugin: {
        expand: true,
        cwd: '<%= paths.css %>',
        src: [
            '*.css',
            '**/*.css',
            '!*-rtl.css',
            '!**/*-rtl.css',
            '!*.min.css',
            '!**/*.min.css'
        ],
        dest: '<%= paths.css %>',
        ext: '-rtl.css',
        extDot: 'last'
    }
};