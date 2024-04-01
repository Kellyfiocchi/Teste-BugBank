export class DasDashboardPage {
  // Locators

  dashboard_txt = ":nth-child(8) > .oxd-main-menu-item";
  SideMenu_Admin = ":nth-child(1) > .oxd-main-menu-item > .oxd-text";

  // Assertions

  clickSearch() {
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  }

  navigateToAdmin() {
    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
  }
}
