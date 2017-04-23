var concat     = require('gulp-concat');
var config     = require('../config');
var gulp       = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var minify_js  = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var utility    = require('gulp-util');

var sourceArray = [];
for (var i = 0, originalArrayLength = config.paths.js.scripts.source.app.length; i < originalArrayLength; i++){
  sourceArray.push(config.paths.source + config.paths.js.scripts.source.app[i]);
}

// This task is only run in the production environment. However, it is helpful
// to have sourcemapping for testing, thus it can be run by itself with an
// environment name flag to allow for sourcemapping
gulp.task('js-app', function() {
  var ENVIRONMENT = (typeof process.env.ENVIRONMENT === 'undefined') ? utility.env.env : process.env.ENVIRONMENT;
  return gulp.src(sourceArray)
    .pipe(sourcemaps.init())
      .pipe(ngAnnotate())
      .pipe(concat(config.names.js.app))
      .pipe(minify_js())
    .pipe((ENVIRONMENT === 'development') ? sourcemaps.write() : sourcemaps.write(config.paths.js.scripts.sourcemaps))
    .pipe(gulp.dest(config.paths.js.scripts.release.release));
});