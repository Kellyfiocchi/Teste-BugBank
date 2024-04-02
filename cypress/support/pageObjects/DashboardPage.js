export class DasDashboardPage {
  // Assertions

  clickSearch() {
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  }

  navigateToAdmin() {
    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
  }
}
