
  it('should pass', () => {
    // Alias the route to wait for its response
    cy.visit('https://www.unilever.com/')
    cy.get('nav').should('not.be.visible')
  })

