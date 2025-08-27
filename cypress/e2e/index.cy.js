/// <reference types="cypress" />

context("Todolist", () => {
  beforeEach(() => {
    cy.visit("../../pages/index.html");
  });

  //1
  it("devrait ajouter 4 todos, en supprimer un, et en laisser 3", () => {
    cy.get('input[placeholder="What needs to be done?"]').type(
      `"test1"{enter}`
    );
    cy.get('input[placeholder="What needs to be done?"]').type(
      `"test2"{enter}`
    );
    cy.get('input[placeholder="What needs to be done?"]').type(
      `"test3"{enter}`
    );
    cy.get('input[placeholder="What needs to be done?"]').type(
      `"test4"{enter}`
    );

    cy.get('div[x-text="todo.content"]').should("have.length", 4);
    cy.contains("Nombre de tâche(s) : 4").should("be.visible");
    cy.contains("test2").parent().find("button").click();
    cy.get('div[x-text="todo.content"]').should("have.length", 3);
    cy.contains("Nombre de tâche(s) : 3").should("be.visible");
  });
});
