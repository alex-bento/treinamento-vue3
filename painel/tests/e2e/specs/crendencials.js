const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credenciasl', () => {
  it('Shoul generetes an Api key', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('alex@alex.com')
    cy.get('#passworld-field').type('1234')
    cy.get('#submit-button').click()

    cy.wait(4000)
    cy.visit(`${APP_URL}/crendencial`)
    cy.wait(2000)

    const oldApiKey = cy.get('#apiKey').invoke('text')
    cy.get('#generete_apiKey').click()
    cy.wait(2000)
    const newApiKey = cy.get('#apiKey').invoke('text')

    expect(oldApiKey).to.not.equal(newApiKey)
  })
})

// npm bin onde vai mostrar os binarios dos projetos
// encapsolar com o cypres ${npm bin}/cypress
