var config = require('../config');
var gulp   = require('gulp');
var minify = require('gulp-jsonminify');

gulp.task('json', function (callback) {
  return gulp.src(config.paths.json.source)
    // [TODO] Make this take less time: .pipe(minify())
    .pipe(gulp.dest(config.paths.json.release));
});