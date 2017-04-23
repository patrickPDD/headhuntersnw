var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var merge        = require('merge-stream');
var minify_css   = require('gulp-cssnano');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var utility      = require('gulp-util');
var livereload   = require('gulp-livereload');


gulp.task('css', function(){
  var ENVIRONMENT = (typeof process.env.ENVIRONMENT === 'undefined') ? utility.env.env : process.env.ENVIRONMENT;
  var tasks = config.paths.css.source.map(function(options){
    return gulp.src(options.path)
      .pipe((ENVIRONMENT === 'development') ? sourcemaps.init() : utility.noop())
        .pipe(sass().on('error', handleErrors))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat(options.name + '.css'))
        .pipe((ENVIRONMENT !== 'development') ? minify_css() : utility.noop())
      .pipe((ENVIRONMENT === 'development') ? sourcemaps.write() : utility.noop())
      .pipe(gulp.dest(config.paths.css.release))
      .pipe(gulp.dest(config.paths.css.testing))
      .pipe((ENVIRONMENT === 'development' && options.name == 'styles') ? livereload() : utility.noop());
  });

  return merge(tasks);
});