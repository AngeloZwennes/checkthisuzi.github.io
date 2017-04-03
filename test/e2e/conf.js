exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['**/*.js'],

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};