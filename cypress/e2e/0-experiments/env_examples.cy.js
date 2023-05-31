/// <reference types="cypress" />

const username = Cypress.env("username");
const password = Cypress.env("password1");
const test_var = Cypress.env("TEST_VAR");
//set CYPRESS_password1=pass111
describe("example to-do app", () => {
  beforeEach(() => {
    // cy.viewport(1024, 740);
    cy.visit("/todo");
  });

  it("displays envs", () => {
    cy.checkEnv();
  });

  it("displays envs 2", () => {
    cy.log("ENV pass = " + Cypress.env("password1"));
    cy.log("ENV example = " + Cypress.env("example"));
    cy.log("ENV test_VAR= " + Cypress.env("TEST_VAR"));
    console.log("console ENV test_VAR= " + Cypress.env("TEST_VAR"));

    cy.log("ENV_CY_USER = " + username);
    cy.log("ENV_CY_PASS1 = " + password);

    expect(test_var, "test_var was set").to.be.a("string").and.not.be.empty;
    expect(username, "username was set ()" + test_var).to.be.a("string").and.not.be.empty;

    if (typeof password !== "string" || !password) {
      throw new Error("Missing password value, set using CYPRESS_password=...");
    }

    // cy.get("[name=password]")
    //   .type(password, { log: false })
    //   .should((el$) => {
    //     if (el$.val() !== password) {
    //       throw new Error("Different value of typed password");
    //     }
    //   });


  });
});
