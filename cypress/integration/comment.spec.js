// eslint-disable-next-line no-undef
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/Comment')
  })
  // eslint-disable-next-line no-undef
  it('Comment List', () => {
    // eslint-disable-next-line no-undef
    cy.contains('say');
    cy.get('.submit').should('contain', 'Submit your comment')
    cy.get('textarea').should('contain','')
    cy.get('textarea').type('liang',{force:true}).should('be.exist', 'liang')
    // cy.get('.el-button '). click()

  })
})
