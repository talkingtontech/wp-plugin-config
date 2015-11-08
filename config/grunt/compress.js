// https://github.com/gruntjs/grunt-contrib-compress
module.exports = {
  release: {
    options: {
      archive: '<%= paths.release %><%= pkg.name %>-<%= pkg.version %>.zip'
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
          '!release/**',
          '!css/src/**/*.scss',
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
        dest: '<%= pkg.name %>'
      }
    ]
  }
};