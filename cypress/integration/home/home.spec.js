/// <reference types="cypress" />

describe("example index page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Checks home page render", () => {
    cy.get(".Home_container__bCOhY").should("exist");
    cy.get(".Home_card___LpL1")
      .should("have.length", 2)
      .and("have.attr", "href");
    cy.get(".Home_card___LpL1")
      .first()
      .find("h2")
      .should("have.text", "Form with JavaScript →");
    cy.get(".Home_card___LpL1")
      .last()
      .find("h2")
      .should("have.text", "Form without JavaScript →");
  });
});
