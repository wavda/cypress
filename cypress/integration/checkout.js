/// <reference types="cypress" />
describe('Login as standard user', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('Checkout product', () => {
        cy.login('standard_user')
        cy.get('#header_container').should('have.length', 1)

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()

        cy.get('#shopping_cart_container').click()
        cy.get('.cart_item').should('have.length', 2)

        cy.get('#checkout').click()

        cy.get('#first-name').should('have.length', 1).type('Aniva')
        cy.get('#last-name').should('have.length', 1).type('Z')
        cy.get('#postal-code').should('have.length', 1).type('11111')

        cy.get('#continue').click()
        cy.get('#checkout_summary_container').should('have.length', 1)

        cy.get('#finish').click()
        cy.get('.complete-header')
        .should('have.text', 'THANK YOU FOR YOUR ORDER')
    })
})