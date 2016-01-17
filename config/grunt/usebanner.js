// https://github.com/mattstyles/grunt-banner
module.exports = {
  plugin: {
    options: {
      position: 'top',
      banner: '/*!\n' +
        ' * Plugin Name: <%= package.nameHuman %>\n' +
        ' * Version:     <%= package.version %>\n' +
        ' * Author:      <%= package.author.name %>\n' +
        ' * License:     <%= package.license %>\n' +
        ' */\n',
      linebreak: true
    },
    files: [
      {
        cwd: '<%= paths.tmp %>',
        src: '<%= package.name %>.css',
        dest: '<%= paths.tmp %>',
        expand: true
      }
    ]
  },
  adminStyle: {
    options: {
      position: 'top',
      banner: '/*!\n' +
        ' * <%= package.nameHuman %> Admin Styles\n' +
        ' * Version: <%= package.version %>\n' +
        ' */\n',
      linebreak: true
    },
    files: [
      {
        cwd: '<%= paths.tmp %>',
        src: '<%= package.name %>-admin.css',
        dest: '<%= paths.tmp %>',
        expand: true
      }
    ]
  }
};