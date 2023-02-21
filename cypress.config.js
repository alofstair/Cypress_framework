const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    viewportWidth: 1500,
    viewportHeight: 760,
    experimentalSessionAndOrigin: true
    //env: {
    //  env1: 'url',
    //  env2: 'url',
    //}
  },
});


require('@applitools/eyes-cypress')(module);
