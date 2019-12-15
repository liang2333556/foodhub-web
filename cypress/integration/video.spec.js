// eslint-disable-next-line no-undef
context('Video', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/video')
  })

  // eslint-disable-next-line no-undef
  it('Video Page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.el-menu-demo > :nth-child(3)').should('contain', 'Video')
    // eslint-disable-next-line no-undef
    cy.get('#vjs_video_3_html5_api').should('be.exist')
  })
})
