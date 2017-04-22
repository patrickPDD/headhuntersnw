var config        = require('../config');
var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('js-templates', function () {
  return gulp.src(config.paths.js.templates.source)
    .pipe(templateCache({
      module: 'jackintheboxApp'
    }))
    .pipe(gulp.dest(config.paths.js.templates.release));
});