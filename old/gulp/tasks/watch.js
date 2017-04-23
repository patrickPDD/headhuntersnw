var config  = require('../config');
var gulp    = require('gulp');
var utility = require('gulp-util');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var ENVIRONMENT = (typeof process.env.ENVIRONMENT === 'undefined') ? utility.env.env : process.env.ENVIRONMENT;

  gulp.watch(config.paths.css.watch, ['css']);
  gulp.watch(config.paths.html.watch, ['html']);

  if (ENVIRONMENT !== 'development') {
  	
    gulp.watch(config.paths.js.scripts.watch, ['js-constants', 'js-app', 'js-libs', 'js-promotions']);
    gulp.watch(config.paths.js.templates.watch, ['js-templates']);
  }
  if (ENVIRONMENT === 'development') {
  	livereload.listen({port:9009,start:true});
  }
});