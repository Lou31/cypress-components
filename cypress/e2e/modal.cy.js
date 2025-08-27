/// <reference types="cypress" />

context("Modal", () => {
  beforeEach(() => {
    cy.visit("../../pages/modal.html");
  });

  //1
  it("hidden on the loading of the page", () => {
    cy.contains("Lorem Ipsum").should("not.be.visible");
  });

  it("should dsipaly modal on button click 'Display'", () => {
    cy.contains("Display").click();
    cy.contains("Lorem Ipsum").should("be.visible");
  });

  // 2
  it("closes the modal on click outside the modal", () => {
    cy.contains("Display").click();
    cy.get("body").click(0, 0);
    cy.contains("Lorem Ipsum").should("not.be.visible");
  });

  //3
  it("should coutains h2 with Lorem Ipsum", () => {
    cy.contains("Display").click();
    cy.contains("h2", "Lorem Ipsum").should("be.visible");
  });
});
