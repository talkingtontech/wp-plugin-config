// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
  images: {
    files: [
      {
        expand: true,
        cwd: 'images/src/',
        src: [ '**/*.{png,jpg,jpeg,gif,svg}' ],
        dest: 'images/'
      }
    ]
  }
};