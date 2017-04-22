var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var utility     = require('gulp-util');

gulp.task('compile', ['json', 'css', 'js', 'js-templates']);

gulp.task('build', function (callback) {
  // 1. clean to start from scratch
  // 2. move the libs to the final release directory
  // 3. compile the code, which relies on the libs being in the release directory
  // 4. compile the html, which relies on the js being in the release directory
  return runSequence(
    'clean',
    'move',
    'compile',
    'html',
    callback
  );
});