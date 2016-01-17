// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
  plugin: {
    options: {
      domainPath: '<%= paths.languages %>',
      exclude: [
        '<%= paths.composer %>.*'
      ],
      potHeaders: {
        poedit: true,
        'report-msgid-bugs-to': '<%= package.pot.reportmsgidbugsto %>',
        'last-translator': '<%= package.pot.lasttranslator %>',
        'language-team': '<%= package.pot.languageteam %>'
      },
      type: 'wp-plugin'
    }
  }
};