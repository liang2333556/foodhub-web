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
    cy.get(".el-button--success").click()
    cy.url().should('contain','/register')
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('liang',{ delay: 1000 }).should('have.value', 'liang')
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('liang',{ delay: 1000 }).should('have.value', 'liang')
    cy.get(".el-button--primary > span").eq(0).click()
    cy.url().should('contain','/login')
    cy.get(".el-button--default").click()
    cy.get('input').eq(0).should("have.value","")
    cy.get('input').eq(1).should("have.value","")
  })
})
