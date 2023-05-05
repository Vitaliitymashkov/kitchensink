// load the global Cypress types
/// <reference types="cypress" />

// typically custom commands are added in this support folder
// so it makes sense to put their TypeScript definitions here
// from the JavaScript specs loads this file using
// the triple slash "reference" comment like this:


declare namespace Cypress {
    interface Chainable {
      /**
       * Check login
       * @example cy.checkEnv()
       */
      checkEnv(value: string, value: string): void
    }


  }