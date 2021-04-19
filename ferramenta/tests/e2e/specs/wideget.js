// https://docs.cypress.io/api/introduction/api.html

const APP_URL = process.env.APP_URL || 'htto://localhost:8080'
describe('Widget', () => {
  it('Checando o botão se stão mostrando', () => {
    cy.visit(APP_URL)
    cy.wait(2000)
    cy.get('#widget-open-button')
  })
})
