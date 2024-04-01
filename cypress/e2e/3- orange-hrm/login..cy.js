/// <reference types="cypress" />;
import { LoginPage } from "../../support/pageObjects/LoginPage";

const loginPage = new LoginPage();

describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    loginPage.visitHomePage();
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer login com sucesso", () => {
    loginPage.enterUserName("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    loginPage.LoginSuccessfully();
  });

  it("Não Deve Fazer Login - Usuário Nulo", () => {
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    loginPage.shouldContainRequiredFields();
  });

  it("Não Deve Fazer Login - Senha Nula", () => {
    loginPage.enterUserName("Admin");
    loginPage.clickLogin();
    loginPage.shouldContainRequiredFields();
  });

  it("Não Deve Fazer Login - Nome de Usuário Inválido", () => {
    loginPage.EnterInvalidName();
    loginPage.enterPassword("admin");
    loginPage.clickLogin();
    loginPage.invalidCredentials();
  });

  it("Deve permitir redefinir senha", () => {
    loginPage.clickForgotPassword();
    loginPage.enterUserName("Admin");
    loginPage.ButtonConfirmResetPassword();
    loginPage.ValidMessageReset();
  });
});
