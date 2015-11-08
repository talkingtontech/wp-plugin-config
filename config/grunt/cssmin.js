// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
  options: {
    report: 'gzip',
    sourceMap: false
  },
  plugin: {
    expand: true,
    cwd: '<%= paths.tmp %>',
    src: [
      '*.css',
      '!*.min.css'
    ],
    dest: '<%= paths.tmp %>',
    ext: '.min.css',
    extDot: 'last'
  },
  vendor: {
    expand: true,
    cwd: '<%= paths.cssSrc %>vendor/',
    src: [
      '*.css',
      '!*.min.css'
    ],
    dest: '<%= paths.cssSrc %>vendor/',
    ext: '.min.css',
    extDot: 'last'
  }
};