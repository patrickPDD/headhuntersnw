var gulp        = require('gulp');
var runSequence = require('run-sequence');
var utility     = require('gulp-util');

gulp.task('js', function (callback) {
  var ENVIRONMENT = (typeof process.env.ENVIRONMENT === 'undefined') ? utility.env.env : process.env.ENVIRONMENT;
  var taskSequence;

  if (ENVIRONMENT === 'development') {
    taskSequence = runSequence(
      'js-constants',
      'js-templates',
      callback
    );
  } else {
    taskSequence = runSequence(
      'js-constants',
      'js-templates',
      'js-app',
      'js-libs',
      'js-promotions',
      callback
    );
  }

  return taskSequence;
});