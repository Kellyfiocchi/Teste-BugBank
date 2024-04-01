/// <reference types="cypress"/>;
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../support/pageObjects/LoginPage";
import { DasDashboardPage } from "../../support/pageObjects/DashboardPage.cy";
import { UserManagementPage } from "../../support/pageObjects/UserManagementPage";

const loginPage = new LoginPage();
const dashboardPage = new DasDashboardPage();
const userManagementPage = new UserManagementPage();

describe("Gerenciamento de Usuários", () => {
  beforeEach(() => {
    loginPage.visitHomePage();
    loginPage.enterUserName("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    dashboardPage.navigateToAdmin();
  });

  it.only("Deve criar um novo usuário", () => {
    var nome = faker.internet.userName();

    userManagementPage.clickAddBtnUser();
    userManagementPage.selectUserRole();
    userManagementPage.AutoCompleteUser();
    userManagementPage.WaitforSecond();
    userManagementPage.Selecteduser();
    userManagementPage.OptionsStatus();
    userManagementPage.clickSaveBtn();
    userManagementPage.InsertUsername(nome);
    userManagementPage.InsertPassword();
    userManagementPage.ConfirmPassword();
    userManagementPage.clickSaveBtn();
    userManagementPage.verifyMessage();
  });

  it("Deve procurar usuario do sistema por Username", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }
    userManagementPage.clickSearchbyname();
    userManagementPage.ValidName();
    dashboardPage.clickSearch();
  });

  it("Deve procurar usuario do sistema por User Role Admin", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    userManagementPage.UserRole();
    userManagementPage.OptionUserRole();
    dashboardPage.clickSearch();
    userManagementPage.validAdmin();
  });

  it("Deve procurar usuario do sistema por User Role ESS", () => {
    ///Parei aqui
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    userManagementPage.UserRole();
    userManagementPage.OptionUserRoleESS();
    dashboardPage.clickSearch();
    userManagementPage.ValidESS();
  });

  it("Deve procurar usuario do sistema por Employee Name", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    dashboardPage.navigateToAdmin();
    userManagementPage.AutoXComplet2();
    userManagementPage.WaitforSecond();
    userManagementPage.Selecteduser();
    dashboardPage.clickSearch();
    userManagementPage.validAdmin();
  });
  it("Deve procurar usuario do sistema por Status", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    dashboardPage.navigateToAdmin();
    userManagementPage.Statusclick();
    userManagementPage.OptionStatus2();
    dashboardPage.clickSearch();
    userManagementPage.validUserEnabled();
  });
});
