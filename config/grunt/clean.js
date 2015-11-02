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
			'js/*',
			'!<%= paths.jsSrc %>**',
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
	},
	release: {
		src: [
			'<%= paths.release %>'
		]
	}
};