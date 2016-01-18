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
          '!.jscsrc',
          '!.jshintrc',
          '!config/**',
          '!dist/**',
          '!css/src/**',
          'css/src/vendor/**',
          '!bower_components/**',
          '!bower/**',
          '!composer/**',
          '!node_modules/**',
          '!tmp/**',
          '!*.json',
          '!*.sublime*',
          '!.DS_Store',
          '!.gitattributes',
          '!.gitignore',
          '!composer.lock',
          '!gruntfile.js',
          '!package.json'
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