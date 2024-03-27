/// <reference types="cypress"/>;
import { faker } from "@faker-js/faker";

describe("Gerenciamento de Usuários", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input.oxd-input[placeholder="Username"]').type("Admin");
    cy.get('input.oxd-input[type="password"][placeholder="Password"]').type(
      "admin123"
    );
    cy.get('button.oxd-button[type="submit"].orangehrm-login-button').click();
    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
  });

  it("Deve criar um novo usuário", () => {
    var nome = faker.internet.userName();

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-autocomplete-text-input > input").type("a");
    cy.wait(3000);
    cy.get(".oxd-autocomplete-dropdown > :nth-child(1)").click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(nome);
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("adminFulano123");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("adminFulano123");
    cy.get(
      "button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"
    ).click();
    cy.get(".oxd-text--toast-message").should("contain", "Successfully Saved");
  });

  it("Deve procurar usuario do sistema por Username", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(":nth-child(2) > .oxd-input").type("Cordia123");
    cy.get("button.oxd-button--secondary").contains("Search").click();
  });

  it("Deve procurar usuario do sistema por User Role Admin", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div"
    ).should("contain", "Admin");
  });

  it("Deve procurar usuario do sistema por User Role ESS", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(3)").click();
    cy.get("button.oxd-button--secondary").contains("Search").click();
    cy.get(":nth-child(7) > .oxd-table-row > :nth-child(3) > div").should(
      "contain",
      "ESS"
    );
  });

  it("Deve procurar usuario do sistema por Employee Name", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get('input[placeholder="Type for hints..."]').click().type("A");
    cy.wait(3000);
    cy.get(".oxd-autocomplete-dropdown > :nth-child(1)").click();
    cy.get("button.oxd-button--secondary").contains("Search").click();
    cy.contains("div", "A8DCo 010Z").should("exist");
  });
  it("Deve procurar usuario do sistema por Status", () => {
    if (Cypress.mocha.getRunner().suite.suites.length === 3) {
      beforeEach(() => {});
    }

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get("button.oxd-button--secondary").contains("Search").click();
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(5) > div"
    ).should("contain", "Enabled");
  });

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
      cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input");
      cy.get(
        ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
      );
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input");
      cy.get(
        "button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"
      ).click();
    });

    camposObrigatorios.forEach((campo) => {
      it(`Deve exibir mensagem de erro "${campo.message}" para o campo "${campo.field}"`, () => {
        cy.get(
          ".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message"
        ).should("exist");
      });
    });
  });
});
