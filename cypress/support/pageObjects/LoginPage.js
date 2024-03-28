export class LoginPage {
  // Locators

  username_textbox = 'input.oxd-input[placeholder="Username"]';
  password_textbox = 'input.oxd-input[type="password"][placeholder="Password"]';
  login_button = 'button.oxd-button[type="submit"].orangehrm-login-button';
  invalid_credentials_message =
    "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]";
  required_fields_message = ".oxd-input-group > .oxd-text";
  forgot_password_link = ".orangehrm-login-forgot > .oxd-text";
  reset_password_button =
    "button.oxd-button.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset[data-v-10d463b7][data-v-76e562c4]";
  reset_password_message =
    "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]";
  login_title = "p.oxd-text[data-v-7b563373][data-v-133d244a]";
  reset_password_title =
    "h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title[data-v-7b563373][data-v-18892c44]";
  login_forgot = ".orangehrm-login-forgot > .oxd-text";

  // Steps

  visitHomePage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  enterUserName(username) {
    cy.get('input.oxd-input[placeholder="Username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input.oxd-input[type="password"][placeholder="Password"]').type(
      password
    );
  }

  clickLogin() {
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
  }

  // Assertions

  LoginSuccessfully() {
    cy.get("p.oxd-text[data-v-7b563373][data-v-133d244a]").should(
      "contain",
      "Time at Work"
    );
  }

  invalidCredentials() {
    cy.get(
      "p.oxd-text.oxd-alert-content-text[data-v-7b563373][data-v-87fcf455]"
    ).should("contain", "Invalid credentials");
  }

  shouldContainRequiredFields() {
    cy.get(".oxd-input-group > .oxd-text").should("contain", "Required");
  }

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

  loginClearInputBox() {
    cy.get(this.username_textbox).clear().get(this.password_textbox).clear();
  }
}
