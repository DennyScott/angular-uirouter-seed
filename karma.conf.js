module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular-route/angular-route.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'tests/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
