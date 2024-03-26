/// <reference types="cypress" />;

describe("Funcionalidade: Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input.oxd-input[placeholder="Username"]').type("Admin");
    cy.get('input.oxd-input[type="password"][placeholder="Password"]').type(
      "admin123"
    );
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get(
      "p.oxd-text.orangehrm-buzz-widget-header-emp[data-v-7b563373][data-v-f8f18dc0]"
    ).should("be.visible");
  });

  it("Deve exibir uma mensagem de erro ao inserir credenciais inválidas", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input.oxd-input[placeholder="Username"]').type("Admin");
    cy.get('input.oxd-input[type="password"][placeholder="Password"]').type(
      "admin1234"
    );
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get(
      "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]"
    ).contains("Invalid credentials");
    cy.get(
      "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]"
    )
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });

  it("Deve exibir mensagem de erro para campos obrigatórios", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get(
      "span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message[data-v-7b563373][data-v-957b4417]"
    )
      .should("be.visible")
      .and("contain", "Required");
  });
  it.only("Deve permitir redefinir senha", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(".orangehrm-login-forgot > .oxd-text").click();
    cy.get(
      "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-76e562c4]"
    )
      .should("be.visible")
      .and("contain", "Reset Password");
    cy.get('input.oxd-input[placeholder="Username"][data-v-1f99f73c]').type(
      "Admin"
    );
    cy.get(
      "button.oxd-button.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset[data-v-10d463b7][data-v-76e562c4]"
    )
      .contains("Reset Password")
      .click();
    cy.get(
      "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]"
    )
      .should("be.visible")
      .and("contain", "Reset Password link sent successfully");
  });
});
