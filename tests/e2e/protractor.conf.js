exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true
  },
  allScriptsTimeout: 20000,
  onPrepare: function() {
    browser.driver.get('http://localhost:3000');
  }
};
