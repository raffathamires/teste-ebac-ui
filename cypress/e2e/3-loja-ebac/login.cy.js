/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('raffaela.monteiro@gmail.com')
        cy.get('#password').type('doddy3009')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','raffaela.monteiro')

      })












})