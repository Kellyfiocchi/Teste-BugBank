/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/LoginPage";
import { DasDashboardPage } from "../../support/pageObjects/DashboardPage";
import { UserManagementPage } from "../../support/pageObjects/UserManagementPage";

const loginPage = new LoginPage();
const dashboardPage = new DasDashboardPage();
const userManagementPage = new UserManagementPage();

describe("Validação de campos obrigatórios ", () => {
  const camposObrigatorios = [
    { field: "User Role", message: "Required" },
    { field: "Employee Name", message: "Required" },
    { field: "Status", message: "Required" },
    { field: "Username", message: "Required" },
    { field: "Password", message: "Required" },
    { field: "Confirm Password", message: "Passwords do not match" },
  ];

  beforeEach(() => {
    loginPage.visitHomePage();
    loginPage.enterUserName();
    loginPage.enterPassword();
    loginPage.clickLogin();
    dashboardPage.navigateToAdmin();
    userManagementPage.clickAddBtnUser();
    userManagementPage.clickSaveBtn();
  });

  camposObrigatorios.forEach((campo) => {
    it(`Deve exibir mensagem de erro "${campo.message}" para o campo "${campo.field}"`, () => {
      if (campo.message === "Passwords do not match") {
        // Verifica se a mensagem "Passwords do not match" está presente em algum lugar na página
        cy.contains("Passwords do not match").should("be.visible");
      } else {
        // Verifica se a mensagem de erro correta é exibida para o campo obrigatório
        userManagementPage.RequiredFields(campo.field, campo.message);
      }
    });
  });
});
