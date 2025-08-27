/// <reference types="cypress" />

context("Scroll", () => {
  beforeEach(() => {
    cy.visit("../../pages/scroll-to-top.html");
  });

  //1
  it("Tester l’apparition du bouton scroll-to-top en bas à droite lorsqu’on scroll vers le bas", () => {
    cy.get('[data-cy="scroll-to-top-button"]').should("not.be.visible");
    cy.contains("Scroll").click();
    cy.get('[data-cy="scroll-to-top-button"]').should("be.visible");
  });

  //2
  it("Tester le retour en haut de la page et la disparition du bouton scroll-to-top lors du clique sur celui-ci", () => {
    cy.get('[data-cy="scroll-to-top-button"]').should("not.be.visible");
    cy.contains("Scroll").click();
    cy.get('[data-cy="scroll-to-top-button"]').should("be.visible");
    cy.get('[data-cy="scroll-to-top-button"]').click();
    cy.get('[data-cy="scroll-to-top-button"]').should("not.be.visible");
  });
});
