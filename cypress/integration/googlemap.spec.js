// eslint-disable-next-line no-undef
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/googlemap')
  })

  // eslint-disable-next-line no-undef
  it('Map Page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.text').should('contain', 'Please input the name of restaurant:')
    // eslint-disable-next-line no-undef
    cy.get('input').type('Ireland') .should('have.value', 'Ireland')
    // eslint-disable-next-line no-undef
    cy.get('.map').should('be.visible')
  })
})
