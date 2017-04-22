var config     = require('../config');
var gulp       = require('gulp');
var ngConstant = require('gulp-ng-constant');

gulp.task('js-constants', function() {
  // Map only certain constants so as not to expose the whole environment to the
  // front-end
  var constants = {
    "ENVIRONMENT"          : process.env.ENVIRONMENT,
    "CONTENTFUL_ID"        : process.env.CONTENTFUL_ID,
    "CONTENTFUL_TOKEN"     : process.env.CONTENTFUL_TOKEN,
    "GCD_AZURE_ENDPOINT"   : process.env.GCD_AZURE_ENDPOINT,
    "GCD_MEZR_ENDPOINT"   : process.env.GCD_MEZR_ENDPOINT,
    "CMS_ENDPOINT"         : process.env.CMS_ENDPOINT,
    "ROLLBAR_ACCESS_TOKEN" : process.env.ROLLBAR_CLIENT_ACCESS_TOKEN
  };

  return ngConstant({
      name: 'ngConstants',
      constants: constants,
      stream: true
    })
    .pipe(gulp.dest(config.paths.js.templates.release));
});
