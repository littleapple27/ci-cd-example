/// <reference types="cypress" />

describe("example index page tests", () => {
  beforeEach(() => {
    cy.visit("/no-js-form");
  });

  it("tests next form with no js", () => {
    cy.log('here you go')
  });
});
