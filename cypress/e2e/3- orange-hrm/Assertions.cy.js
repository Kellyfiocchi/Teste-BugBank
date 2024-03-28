/// <reference types="cypress" />

describe("Testes de Assertivas", () => {
  it("Assertivas implícitas", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    /*Validações do login de usuário*/

    /*1 - Validamos que a URL do login inclui o valor esperado| Palavras-chave: should - and*/
    cy.url().should("include", "orangehrmlive.com");

    /*2 - Validamos que a URL do login seja a correta*/
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    /*3 - Validamos que o título do site seja correto usando palavras-chave como include, eq e contain*/
    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    /*4 - Validamos que o elemento logo exista no login*/
    cy.get(".orangehrm-login-branding > img")
      .should("exist")

      /*5 - e esteja visível*/
      .and("be.visible");

    /*6 - Verifica a quantidade de links existentes no login */
    cy.get("input[placeholder='Username']").type("Admin"); //fornecer um valor para o input
    cy.get("input[placeholder='Username']").should("have.value", "Admin"); //valor
  });

  it("Assertivas explícitas", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });

  it("Assertivas explícitas - Login bem-sucedido", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    // Verifica se o login foi bem-sucedido redirecionando para a página do dashboard
    cy.url().should("include", "/dashboard");
  });
});
