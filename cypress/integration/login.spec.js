// eslint-disable-next-line no-undefs
context('Querying', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/login')
  })

  // eslint-disable-next-line no-undef
  it('Log in', () => {
    cy.contains('Username');
    cy.contains('Password');
    cy.get('input').eq(0).type('liang',{ delay: 1000 }).should('have.value', 'liang')
    cy.get('input').eq(1).type('liang',{ delay: 1000 }).should('have.value', 'liang')
    cy.get(".el-button--primary > span").eq(0).click()
    cy.url().should('contain','/')
    cy.get(".el-button--primary > span").eq(0).click()
    cy.url().should('contain','/')
    cy.get(".el-button--default").click()
    cy.get('input').eq(0).should("have.value","")
    cy.get('input').eq(1).should("have.value","")
  })
})
