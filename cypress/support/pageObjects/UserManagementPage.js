export class UserManagementPage {
  // Steps add user

  navigateToUserManagement() {
    cy.get('a[class="oxd-main-menu-item active"]').click();
  }

  clickAddBtnUser() {
    cy.get(".orangehrm-header-container > .oxd-button").click();
  }

  selectUserRole() {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();

    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
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

    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  }

  validUserEnabled() {
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(5) > div"
    ).should("contain", "Enabled");
  }

  StatusClick() {
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();

    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
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
    cy.get(".oxd-button--secondary").click();
  }

  verifyMessage() {
    cy.get(".oxd-toast").should("contain", "Successfully Saved");
  }

  // Steps search user

  AddName() {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
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
    cy.get(".oxd-autocomplete-text-input > input");

    cy.contains("div", /Admin/).should("exist");
  }

  ValidESS() {
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div"
    ).should("contain", "ESS");
  }

  RequiredFields() {
    cy.get(
      ":nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text"
    ).should("contain", "Required");
  }
}
