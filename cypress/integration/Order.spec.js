// eslint-disable-next-line no-undefs
const apiURL = "http://localhost:3000/order";
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/Order')
  })
  describe("order list contains", () => {
    // eslint-disable-next-line no-undef
    it('Order List', () => {
      // eslint-disable-next-line no-undef
      cy.get(".vue-title").should("contain", "Order List")
      cy.contains('ID');
      cy.contains('product');
      cy.contains('Remove');
    })
  })
  describe("For a confirmed delete operation", () => {
    it("Cancel the delete operation", () => {
      // Click trash/delete link of 3rd donation in list
      cy.get(":nth-child(1) > :nth-child(3) > .fa")
        .eq(0)
        .click();
      cy.get("button")
        .contains("Cancel")
        .click();
      cy.get(".swal2-confirm")
        .click();
    });
  })
})
