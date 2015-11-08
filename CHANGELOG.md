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
