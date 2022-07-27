/// <reference types="cypress" />

describe("example index page tests", () => {
  beforeEach(() => {
    cy.visit("/js-form");
  });

  it("tests next form with js", () => {
    cy.log("here you go");
  });
});
