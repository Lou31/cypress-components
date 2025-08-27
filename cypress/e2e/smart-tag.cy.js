context("smart-tag", () => {
  beforeEach(() => {
    cy.visit("../../pages/smart-tag.html");
  });

  //1
  it("devrait afficher le tag au survol du bouton 'See more'", () => {
    cy.contains("Lorem ipsum dolor sit amet").should("not.be.visible");
    cy.contains("See more").trigger("mouseover");
    cy.contains("Lorem ipsum dolor sit amet").should("be.visible");
  });

  //2
  it("devrait enlever le tag à la sortie du survol", () => {
    cy.contains("Lorem ipsum dolor sit amet").should("not.be.visible");
    cy.contains("See more").trigger("mouseover");
    cy.contains("Lorem ipsum dolor sit amet").should("be.visible");
    cy.get("body").trigger("mouseover");
    cy.contains("Lorem ipsum dolor sit amet").should("not.be.visible");
  });
});
