export class UserManagementPage {
  // Locators

  admin_menu_item = ":nth-child(1) > .oxd-main-menu-item > .oxd-text";
  admin_add_btn = "button.oxd-button--primary";
  user_role_txt =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon";
  user_role_arrowBtn = ".oxd-select-dropdown > :nth-child(2)";
  user_role = ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input";
  user_password =
    ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input";

  // Steps

  navigateToUserManagement() {
    cy.get(this.admin_menu_item).click();
  }

  clickAddBtnUser() {
    cy.get(".orangehrm-header-container > .oxd-button").click();
  }

  selectUserRole() {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
  }

  AutoCompleteUser() {
    cy.get(".oxd-autocomplete-text-input > input").type("a");
  }

  AutoXComplet2() {
    cy.get('input[placeholder="Type for hints..."]').click().type("A");
  }

  WaitforSecond() {
    cy.wait(3000);
  }

  Selecteduser() {
    cy.get(".oxd-autocomplete-dropdown > :nth-child(1)").click();
  }

  OptionsStatus() {
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
  }
  OptionStatus2() {
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
  }

  validUserEnabled() {
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(5) > div"
    ).should("contain", "Enabled");
  }

  Statusclick() {
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
  }

  InsertUsername(nome) {
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(nome);
  }

  InsertPassword() {
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("adminFulano123");
  }

  ConfirmPassword() {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("adminFulano123");
  }

  clickSaveBtn() {
    cy.get(
      "button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"
    ).click();
  }

  verifyMessage() {
    cy.get(".oxd-toast").should("contain", "Successfully Saved");
  }

  clickSearchbyname() {
    cy.get(":nth-child(2) > .oxd-input").type("Admin");
  }
  ValidName() {
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div"
    ).should("contain", "Admin");
  }

  UserRole() {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
  }

  OptionUserRole() {
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  }

  OptionUserRoleESS() {
    cy.get(".oxd-select-dropdown > :nth-child(3)").click();
  }

  validAdmin() {
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div"
    ).should("contain", "Admin");

    cy.contains("div", /Admin/).should("exist");
  }

  ValidESS() {
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div"
    ).should("contain", "ESS");
  }
}
