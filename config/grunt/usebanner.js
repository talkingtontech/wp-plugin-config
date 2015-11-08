// https://github.com/mattstyles/grunt-banner
module.exports = {
  plugin: {
    options: {
      position: 'top',
      banner: '/*!\n' +
        ' * Plugin Name: <%= pkg.plugin.name %>\n' +
        ' * Version:     <%= pkg.version %>\n' +
        ' * Author:      <%= pkg.plugin.author %>\n' +
        ' * License:     <%= pkg.plugin.license %>\n' +
        ' */\n',
      linebreak: true
    },
    files: [
      {
        cwd: '<%= paths.tmp %>',
        src: '<%= pkg.name %>.css',
        dest: '<%= paths.tmp %>',
        expand: true
      }
    ]
  },
  adminStyle: {
    options: {
      position: 'top',
      banner: '/*!\n' +
        ' * <%= pkg.plugin.name %> Admin Styles\n' +
        ' * Version: <%= pkg.version %>\n' +
        ' */\n',
      linebreak: true
    },
    files: [
      {
        cwd: '<%= paths.tmp %>',
        src: '<%= pkg.name %>-admin.css',
        dest: '<%= paths.tmp %>',
        expand: true
      }
    ]
  }
};