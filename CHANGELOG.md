## 4.0.0

- synced with wpsitecare/sitecare-plugin-config@93bc00e
- Bumped all dependencies to the latest version
- Changed default directory structure

## 3.0.0

- synced with wpsitecare/sitecare-plugin-config@103fb88
- Bumped all dependencies to the latest version
- Changed default directory structure
- Removed grunt-shell
- Removed Bower dependency
- Removed Composer dependency

## 1.5.0

- scss directory moved up and out of css/src to scss/.
- deps: now using semver caret (^).

## 1.4.0

- publish to npm registry.
- deps: update to grunt-contrib-clean@1.0.x.
- deps: update to grunt-contrib-compress@1.0.x.
- deps: update to grunt-contrib-concat@1.0.x.
- deps: update to grunt-contrib-jshint@1.0.x.
- deps: update to grunt-potomo@3.4.x.
- deps: update to grunt-rtlcss@2.0.x.

## 1.3.1

- deps: really add grunt-version@1.0.x.

## 1.3.0

- make use of assets folder for bower and composer.
- more granular cleaning of the js dir.
- set default options for sass.

## 1.2.2

- adjust clean:release to proper clean:dist.

## 1.2.1

- fix taskMap for readpkg.

## 1.2.0

- use textdomain property from root of package.json.
- use default options for cssmin.
- deps: add grunt-version@1.0.x.
- deps: update to autoprefixer@6.2.x.
- deps: drop checktextdomain.
- deps: drop grunt-wp-css.
- swap pkg for package as load-grunt-config already reads the package file upfront.
- add release tasks that utilize grunt-version.
- fix readpkg mapping.

## 1.1.0

- drop grunt-webfont.

## 1.0.15

- deps: downgrade to grunt-webfont@0.5.x.

## 1.0.14

- deps: update to grunt-webfont@1.0.1.

## 1.0.13

- deps: downgrade to grunt-webfont@0.5.x.

## 1.0.12

- deps: update to grunt-contrib-clean@0.7.x.
- deps: update to grunt-contrib-uglify@0.11.x.
- deps: update to grunt-webfont@1.1.x.

## 1.0.11

- deps: updated to grunt-contrib-imagemin@1.0.x.

## 1.0.10

- config: adjust to whitelist css/src/vendor/ specifically.

## 1.0.9

- config: only exclude scss files as there could be vendor css. exclude bower/ and composer/.

## 1.0.8

- config: fix some missed references to nameDashed.
- config: run build:css:nodeps on scss change to allow for a quicker controllable build.

## 1.0.7

- exclude bower and composer files from addtextdomain.
- config: preserve elevated comments during uglify.
- config: adjust naming of cssmin:style task to match uglify naming.
- config: fix some missed references to nameDashed.
- config: ensure that cssmin places minified vendor css next to existing file for script loader.
- deps: update to autoprefixer@6.1.x.

## 1.0.6

- config: exclude composer files from makepot.

## 1.0.5

- cleanup rogue tab indents.

## 1.0.4

- config: build php dependencies.

## 1.0.3

- fix syntax error in last release.

## 1.0.2

- config: add paths.composer and clean it.

## 1.0.1

- deps: updated to grunt-contrib-compress@0.14.x.
- deps: updated to grunt-contrib-uglify@0.10.x.
- deps: updated to grunt-sass@1.1.x.
- deps: updated to grunt-webfont@1.0.x.
- config: create compressed zip on release.
- config: update autoprefixer to include Microsoft Edge Browser.

## 1.0.0

- Forked from WP Site Care
- Changed code style and new lines
- Updated package.json
- Updated deps

## 0.1.4

- Fixed the JS paths to prevent recursion when running the watch command
- Relaxed peerDependencies even more because FUUUUUUUUU

## 0.1.3

- Actually Fixed incorrect settings in the RTL paths because I'm extremely dumb
- Bumped grunt-replace to the latest version

## 0.1.2

- Fixed an incorrect path in the makepot task.
- Stopped cleaning the entire languages directory.
- Fixed incorrect settings in the RTL paths because I'm dumb.

## 0.1.1

- Fixed a bunch of issues with paths and task names.
- Improved minification and RTL implementation.

## 0.1.0

First public release.
