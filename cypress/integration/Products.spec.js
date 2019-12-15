// eslint-disable-next-line no-undefs
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/Products')
  })

  // eslint-disable-next-line no-undef
  it('Products List', () => {
    // eslint-disable-next-line no-undef
    cy.contains('Products');
    cy.contains('price');
    cy.contains('likes');
    cy.contains('€');
    cy.get('button').should('contain', 'Just Buy')
  })
})
