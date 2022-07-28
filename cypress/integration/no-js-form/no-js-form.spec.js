/// <reference types="cypress" />

const getInputByLabel = (label) => {
  return cy
    .contains("label", label)
    .invoke("attr", "for")
    .then((id) => {
      cy.get("#" + id);
    });
};

describe("example no-js-form tests", () => {
  beforeEach(() => {
    cy.visit("/no-js-form");
  });

  it("tests no-js-form page render", () => {
    cy.get("h1").should("exist").and("have.text", "Form without JavaScript.");
  });

  it("tests js-form inputs and submit", () => {
    getInputByLabel("First Name").type("Andrea");
    getInputByLabel("Last Name").type("Legleiter");
    cy.get("button").should("have.text", "Submit").click({ force: true });
    cy.url().should("be.equal", "http://localhost:3000/api/form");
    cy.log("All done!");
  });
});
