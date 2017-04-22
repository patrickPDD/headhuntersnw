var sourceDirectory   = 'app';
var compiledDirectory = 'dist';


// #############################################################################
// [NOTE]
//
// The long arrays of script file paths are necessary as they are used in both:
// - the creation of the final html file via jade and
// - the final script compilation
// Thus, globbing patterns can't be used because of the jade -> html step
// #############################################################################

module.exports = {
  paths: {
    source: sourceDirectory,
    release: compiledDirectory,
    css: {
      source:  [
        {
          name: 'styles',
          path: sourceDirectory + '/styles/main.scss'
        },
        {
          name: 'ie',
          path: sourceDirectory + '/styles/ie.scss'
        }
      ],
      watch: [
        sourceDirectory + '/styles/**/*.scss',
        sourceDirectory + '/promotions/**/*.scss'
      ],
      release: compiledDirectory + '/styles',
      testing: sourceDirectory   + '/styles'
    },
    html: {
      source:  [
        sourceDirectory  + '/*.jade',
        '!' + sourceDirectory + '/_layout.jade'
      ],
      watch:   sourceDirectory  + '/**/*.jade',
      release: compiledDirectory,
      testing: sourceDirectory
    },
    js: {
      scripts: {
        source: {
          bower_components: [
            '/bower_components/jquery/dist/jquery.js',
            '/bower_components/angular/angular.js',
            '/bower_components/angular-animate/angular-animate.js',
            '/bower_components/angular-cookies/angular-cookies.js',
            '/bower_components/angular-resource/angular-resource.js',
            '/bower_components/angular-sanitize/angular-sanitize.js',
            '/bower_components/angular-touch/angular-touch.js',
            '/bower_components/angular-ui-router/release/angular-ui-router.js',
            '/bower_components/angular-ui-router-anim-in-out/anim-in-out.js',
            '/bower_components/ui-router-extras/release/ct-ui-router-extras.js',
            '/bower_components/ng-directive-lazy-image/release/lazy-image.js',
            '/bower_components/angular-contentful/dist/angular-contentful.js',
            '/bower_components/showdown/dist/showdown.js',
            '/bower_components/jquery.easing/js/jquery.easing.js',
            '/bower_components/angular-filter/dist/angular-filter.js',
            '/bower_components/fastclick/lib/fastclick.js',
            '/scripts/services/markerclusterer.js',
            '/bower_components/ng-rollbar/ng-rollbar.min.js',
              '/bower_components/angular-inview/angular-inview.js',
              '/bower_components/angular-scroll/angular-scroll.js',
              '/bower_components/angular-ui-mask/dist/mask.min.js'
          ],
          app: [
            '/scripts/app.js'
          ],
          promotions: [''
          ]
        },
        watch: sourceDirectory + '/scripts/**/*.js',
        release: {
          source: {
            libs:       ['/scripts/libs.js'],
            app:        ['/scripts/angular.js'],
            promotions: ['/scripts/promotions.js']
          },
          release: compiledDirectory + '/scripts'
        },
        sourcemaps: '../sourcemaps'
      },
      templates: {
        source: [
          sourceDirectory + '/views/**/*.html',
          sourceDirectory + '/promotions/**/*.html',
        ],
        watch: [
          sourceDirectory + '/views/**/*.html',
          sourceDirectory + '/promotions/**/*.html',
        ],
        release: sourceDirectory + '/scripts'
      }
    },
    json: {
      source:  sourceDirectory   + '/data/**/*.json',
      watch:   sourceDirectory   + '/data/**/*.json',
      release: compiledDirectory + '/data'
    },
    move: [
      {
        source:  sourceDirectory   + '/images/**',
        release: compiledDirectory + '/images'
      },
      {
        source:  sourceDirectory   + '/fonts/**',
        release: compiledDirectory + '/fonts'
      },
      {
        source:  sourceDirectory   + '/bower_components/**',
        release: compiledDirectory + '/bower_components'
      },
      {
        source:  sourceDirectory   + '/views/**',
        release: compiledDirectory + '/views'
      },
      {
        source:  sourceDirectory   + '/promotions/**',
        release: compiledDirectory + '/promotions'
      }
    ],
    clean: [
      compiledDirectory + '',
      sourceDirectory + '/css/styles.css',
      sourceDirectory + '/*.html'
    ],
    superclean: [
      compiledDirectory + '',
      sourceDirectory + '/css/styles.css',
      sourceDirectory + '/*.html',
      sourceDirectory + '/bower_components',
      './bower_components',
      './node_modules'
    ]
  },
  names: {
    css: 'styles.css',
    js: {
      libs:       'libs.js',
      app:        'angular.js',
      promotions: 'promotions.js'
    }
  }
};
