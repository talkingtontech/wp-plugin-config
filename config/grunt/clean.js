// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
  bower: {
    src: [
      '<%= paths.bower %>'
    ]
  },
  bowercomponents: {
    src: [
      'bower_components/'
    ]
  },
  composer: {
    src: [
      '<%= paths.composer %>'
    ]
  },
  css: {
    src: [
      'css/*',
      '!<%= paths.cssSrc %>**',
      '<%= paths.cssSrc %>vendor/'
    ]
  },
  dist: {
    src: [
      '<%= paths.dist %>'
    ]
  },
  fonts: {
    src: [
      'font/*',
      '!<%= paths.fontSrc %>**',
      '<%= paths.fontSrc %>vendor/'
    ]
  },
  php: {
    src: [
      'includes/vendor/'
    ]
  },
  tmp: {
    src: [
      '<%= paths.tmp %>'
    ]
  },
  js: {
    src: [
      'js/*.js',
      'js/**/*.min.js',
      '<%= paths.jsSrc %>vendor/'
    ]
  },
  images: {
    src: [
      'images/*',
      '!<%= paths.imagesSrc %>**'
    ]
  },
  languages: {
    src: [
      '<%= paths.languages %>*.pot'
    ]
  }
};