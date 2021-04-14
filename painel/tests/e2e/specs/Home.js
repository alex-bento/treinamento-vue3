const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('Shoud render create accout modal click on CTA create account button', () => {
    cy.visit(APP_URL)

    cy.get('#cta-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('Shoud render create accout modal click on Header create', () => {
    cy.visit(APP_URL)

    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('Shoud render login modal when click on Header login button', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')
  })

  it('Shoud login width an email and password', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('alex@alex.com')
    cy.get('#passworld-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
  })

  it('Shoud show an error with an invalid email', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('alex@alex')
    cy.get('#passworld-field').type('1234')
    cy.get('#submit-button').click()

    cy.get('#email-error')
  })

  it('Shoud logaut work correcty', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('alex@alex.com')
    cy.get('#passworld-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
