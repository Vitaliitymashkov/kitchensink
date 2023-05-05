module.exports = {
  projectId: "xgcj9n",
  env: {
    username: "jack",
    password: "",
  },
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["cypress/e2e/1-getting-started/todo_on_desktop.cy.js"],
  },
};
