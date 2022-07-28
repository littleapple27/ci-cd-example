/// <reference types="cypress" />

const getInputByLabel = (label) => {
  return cy
    .contains("label", label)
    .invoke("attr", "for")
    .then((id) => {
      cy.get("#" + id);
    });
};

describe("example js-form tests", () => {
  before(() => {
    cy.visit("/js-form");
  });

  it("tests js-form page render", () => {
    cy.get("h1").should("exist").and("have.text", "Form with JavaScript.");
  });

  it("tests js-form inputs and submit", () => {
    getInputByLabel("First Name").type("Andrea");
    getInputByLabel("Last Name").type("Legleiter");
    cy.get("button").should("have.text", "Submit").click({ force: true });
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Is this your full name: Andrea Legleiter");
    });
  });
});
