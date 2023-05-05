const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "xgcj9n",
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 320,
  viewportHeight: 480,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 1000,
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*_mobile.cy.js",
    excludeSpecPattern: "cypress/e2e/**/*_desktop.cy.js"
  },

})