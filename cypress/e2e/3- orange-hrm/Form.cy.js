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
