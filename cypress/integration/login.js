/// <reference types="cypress" />

describe('Login as standard user', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verify login success', () => {
    cy.login('standard_user')
    cy.get('#header_container').should('have.length', 1)
  })
})

describe('Login as lockedout user', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verify login fail', () => {
    cy.login('locked_out_user')
    cy.get('.error-message-container.error')
      .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
})
