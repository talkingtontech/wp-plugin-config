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
                    '!<%= paths.assets %>**',
                    '!<%= paths.config %>**',
                    '!<%= paths.cssSrc %>**',
                    '!<%= paths.dist %>**',
                    '!<%= paths.node %>**',
                    '!logs/**',
                    '!tmp/**',
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
                    '!.jshintrc',
                    '<%= paths.assets %>plugin/js/admin/**'
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
                    '!.git/**',
                    '!.sass-cache/**',
                    '!<%= paths.dist %>**',
                    '!<%= paths.node %>**',
                    '!bower_components/**',
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