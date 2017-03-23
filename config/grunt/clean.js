// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
    css: {
        src: [
            '<%= paths.css %>',
            '<%= paths.cssVend %>'
        ]
    },
    fonts: {
        src: [
            '<%= paths.fonts %>',
            '<%= paths.fontsVend %>'
        ]
    },
    php: {
        src: [
            '<%= paths.phpVend %>'
        ]
    },
    js: {
        src: [
            '<%= paths.js %>',
            '<%= paths.jsVend %>'
        ]
    },
    images: {
        src: [
            '<%= paths.images %>',
            '<%= paths.imagesVend %>'
        ]
    },
    languages: {
        src: [
            '<%= paths.languages %>'
        ]
    },
    dist: {
        src: [
            '<%= paths.dist %>'
        ]
    }
};