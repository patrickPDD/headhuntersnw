var config  = require('../config');
var gulp    = require('gulp');
var jade    = require('gulp-jade');
var utility = require('gulp-util');

gulp.task('html', function() {
  var ENVIRONMENT = (typeof process.env.ENVIRONMENT === 'undefined') ? utility.env.env : process.env.ENVIRONMENT;
  return gulp.src(config.paths.html.source)
    .pipe(jade({
      pretty: true,
      locals: {
        scriptPaths: (ENVIRONMENT === 'development') ? config.paths.js.scripts.source : config.paths.js.scripts.release.source
      }
    }))
    .pipe(gulp.dest(config.paths.html.release))
    .pipe(gulp.dest(config.paths.html.testing));
});