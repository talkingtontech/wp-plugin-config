// https://github.com/gruntjs/grunt-contrib-compress
module.exports = {
    dist: {
        options: {
            archive: '<%= paths.dist %><%= package.name %>-<%= package.version %>.zip'
        },
        files: [
            {
                expand: true,
                src: [
                    '**',
                    '.*',
                    '!.git/**',
                    '!.sass-cache/**',
                    '!assets/**',
                    '!config/**',
                    '!dist/**',
                    '!logs/**',
                    '!node_modules/**',
                    '!tmp/**',
                    '!css/src/**',
                    'css/src/vendor/**',
                    '!bower_components/**',
                    '!*.json',
                    '!*.sublime*',
                    '!.DS_Store',
                    '!.gitattributes',
                    '!.gitignore',
                    '!composer.lock',
                    '!gruntfile.js',
                    '!package.json',
                    '!.jscsrc',
                    '!.jshintrc'
                ],
                dest: '<%= package.name %>'
            }
        ]
    },
    dev: {
        options: {
            archive: '<%= paths.dist %><%= package.name %>-developer-<%= package.version %>.zip'
        },
        files: [
            {
                expand: true,
                src: [
                    '**',
                    '.*',
                    '!node_modules/**',
                    '!.sass-cache/**',
                    '!dist/**',
                    '!logs/**',
                    '!tmp/**',
                    '!*.sublime*',
                    '!.DS_Store'
                ],
                dest: '<%= package.name %>'
            }
        ]
    }
};