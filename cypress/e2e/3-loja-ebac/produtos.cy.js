/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
      cy.visit('produtos')
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.block-inner') //elemento que contem somente a imagem
            .first()
            .click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block')
            .last()
            .click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Deve selecionar o terceiro produto da lista', () => {
        cy.get('.product-block')
            .eq(2)
            .click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Deve selecionar o produto da lista pelo nome', () => {
        cy.get('.product-block')
            .contains('Apollo Running Short')
            .click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

})