// eslint-disable-next-line no-undefs
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/Essay')
  })

  // eslint-disable-next-line no-undef
  it('Essay List', () => {
    // eslint-disable-next-line no-undef
    cy.contains('title');
    cy.contains('content');
    cy.contains('author');
    cy.contains('date');
    cy.get('.button').eq(1).should('contain', 'view more comment here>>>')
    cy.get(".button").eq(1).click()
    cy.url().should('contain','/comment')

    // eslint-disable-next-line no-undef


  })
})
