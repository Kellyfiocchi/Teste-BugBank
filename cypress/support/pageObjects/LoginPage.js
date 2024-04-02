export class LoginPage {
  // Locators

// AS LINHAS ABAIXO FORAM COMENTADAS PARA QUE O CÓDIGO FUNCIONE
// POIS ELAS ESTÃO DANDO CONFLITO COM OS MÉTODOS(Funções) QUE FORAM CRIADOS

  // enterUserName = 'input[name="username"]';
  // enterPassword = 'input[type="password"]';
  // clickLogin = 'button[type="submit"]';
  // LoginSuccessfully = "p.oxd-text[data-v-7b563373][data-v-133d244a]";
  // EnterInvalidName = 'input[name="username"]';
  // invalidCredentials =
  //   "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]";
  // shouldContainRequiredFields = ".oxd-input-group > .oxd-text";
  // clickForgotPassword = ".orangehrm-login-forgot > .oxd-text";
  // ButtonConfirmResetPassword =
  //   "button.oxd-button.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset[data-v-10d463b7][data-v-76e562c4]";
  // ValidMessageReset = ".orangehrm-forgot-password-title";
  // ValidResetPassword =
  //   "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]";
  // loginClearInputBox = 'input[name="username"]';

  // Steps Login com sucesso

  visitHomePage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  // Criação de exceções e utilização correta dos Metodos(funções)
  enterUserName(name) {
    if (name === undefined) {
      throw new Error("Nome de usuário não fornecido");
    }
    cy.get('input[name="username"]').type(name);
  }

  enterPassword(Password) {
    if (Password === undefined) {
      throw new Error("Senha não fornecida");
    }
    cy.get('input[type="password"]').type(Password);
    }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  // Assertions

  LoginSuccessfully() {
    cy.get("p.oxd-text[data-v-7b563373][data-v-133d244a]").should(
      "contain",
      "Time at Work"
    );
  }

  // Steps Login com falha

  EnterInvalidName() {
    cy.get('input[name="username"]').type("Admi");
  }

  invalidCredentials() {
    cy.get(
      "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]"
    ).should("contain", "Invalid credentials");
  }

  shouldContainRequiredFields() {
    cy.get(".oxd-input-group > .oxd-text").should("contain", "Required");
  }

  // Steps Reset Password
  clickForgotPassword() {
    cy.get(".orangehrm-login-forgot > .oxd-text").click();
  }

  ButtonConfirmResetPassword() {
    cy.get(
      "button.oxd-button.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset[data-v-10d463b7][data-v-76e562c4]"
    ).click();
  }
  ValidMessageReset() {
    cy.get(".orangehrm-forgot-password-title").should(
      "contain",
      "Reset Password link sent successfully"
    );
  }

  ValidResetPassword() {
    cy.get(
      "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]"
    ).should("contain", "Reset Password link sent successfully");
  }

  // Clear input box
  loginClearInputBox() {
    cy.get(this.username_textbox).clear().get(this.password_textbox).clear();
  }
}
