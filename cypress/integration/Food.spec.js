// eslint-disable-next-line no-undefs
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/Foods')
  })
  describe("order list contains", () => {
    // eslint-disable-next-line no-undef
    it('food list', () => {
      // eslint-disable-next-line no-undef
      cy.get(".vue-title").should("contain", "View the foods people like")
      cy.contains('type');
      cy.contains('likes');
      cy.contains('Upvote');
    })
  })
  describe("Upvote for the food", () => {
    it("Upvote for food", () => {
      // Click trash/delete link of 3rd donation in list
      cy.get(":nth-child(1) > :nth-child(3) > .fa")
        .eq(0)
        .click();

    });
  })
})
