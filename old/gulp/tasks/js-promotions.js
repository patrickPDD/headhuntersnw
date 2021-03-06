var concat     = require('gulp-concat');
var config     = require('../config');
var gulp       = require('gulp');
var minify_js  = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var utility    = require('gulp-util');

var sourceArray = [];
for (var i = 0, originalArrayLength = config.paths.js.scripts.source.promotions.length; i < originalArrayLength; i++){
  sourceArray.push(config.paths.source + config.paths.js.scripts.source.promotions[i]);
}

gulp.task('js-promotions', function() {
  var ENVIRONMENT = (typeof process.env.ENVIRONMENT === 'undefined') ? utility.env.env : process.env.ENVIRONMENT;
  var compileStream = gulp.src(sourceArray)
    .pipe(sourcemaps.init())
      .pipe(concat(config.names.js.promotions))
      .pipe((ENVIRONMENT !== 'development') ? minify_js() : utility.noop())
    .pipe((ENVIRONMENT === 'development') ? sourcemaps.write() : sourcemaps.write(config.paths.js.scripts.sourcemaps))
    .pipe(gulp.dest(config.paths.js.scripts.release.release));

  return (sourceArray.length > 0) ? compileStream : false;
});