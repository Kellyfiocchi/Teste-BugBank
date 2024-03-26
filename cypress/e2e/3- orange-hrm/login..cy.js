/// <reference types="cypress" />;

describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer login com sucesso", () => {
    cy.get('input.oxd-input[placeholder="Username"]').type("Admin");
    cy.get('input.oxd-input[type="password"][placeholder="Password"]').type(
      "admin123"
    );
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get("p.oxd-text[data-v-7b563373][data-v-133d244a]").should(
      "contain",
      "Time at Work"
    );
  });

  it("Deve exibir uma mensagem de erro ao inserir credenciais inválidas", () => {
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
    ).should("contain", "Invalid credentials");
  });

  it("Deve exibir mensagem de erro para campos obrigatórios", () => {
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get(
      "span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message[data-v-7b563373][data-v-957b4417]"
    )
      .should("be.visible")
      .and("contain", "Required");
  });

  it("Deve permitir redefinir senha", () => {
    cy.get(".orangehrm-login-forgot > .oxd-text").click();
    cy.get('input.oxd-input[placeholder="Username"][data-v-1f99f73c]').type(
      "Admin"
    );
    cy.get(
      "button.oxd-button.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset[data-v-10d463b7][data-v-76e562c4]"
    )
      .should("contain", "Reset")
      .click();
    cy.get(
      "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]"
    ).should("contain", "Reset Password link sent successfully");
  });

  it("Deve fazer logout com sucesso", () => {
    cy.get('input.oxd-input[placeholder="Username"]').type("Admin");
    cy.get('input.oxd-input[type="password"][placeholder="Password"]').type(
      "admin123"
    );
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get("span.oxd-userdropdown-tab[data-v-bdd6d943]").click();
    cy.wait(3000);
    cy.get(
      'a[href="/web/index.php/auth/logout"].oxd-userdropdown-link'
    ).click();
    cy.get(
      "h5.oxd-text.oxd-text--h5.orangehrm-login-title[data-v-7b563373][data-v-0af708be]"
    ).should("contain", "Login");
  });
});
