const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "t6ni3z",
  // retries: 1,
  e2e: {
    chromeWebSecurity: false,
    //specPattern: 'cypress\e2e\test\registro-autenticacion.cy.js',
      setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      projectId: "t6ni3z"
    },
  },
});

