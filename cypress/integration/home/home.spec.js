/// <reference types="cypress" />

describe("example index page tests", () => {
  before(() => {
    cy.visit("/");
  });

  it("Checks home page render", () => {
    cy.get(".Home_container__bCOhY").should("exist");
  });

  it("Checks js-form and no-js-form have text", () => {
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

  it("checks validity of all links on page", () => {
    cy.get("a").each((link) => {
      cy.wrap(link)
        .invoke("attr", "href")
        .then((href) => {
          cy.request(href).then((resp) => {
            expect(resp.status).to.eq(200);
          });
        });
    });
  });
});
