const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://jahnelgroup.com',
    viewportWidth: 1400,
    viewportHeight: 1200,
    specPattern: [
      'cypress/e2e/*.js',
      'cypress/e2e/**/*.js'
    ],
  },
});
