/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('doddy3009')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        //tempo de espera
        cy.wait(5000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o cadastro com sucesso usando variáveis', () => {
        var primeiroNome = faker.person.firstName()
        var ultimoNome = faker.person.lastName()
        var email = faker.internet.email(primeiroNome)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('doddy3009')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(ultimoNome)
        //tempo de espera
        cy.wait(5000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });

    it('Deve exibir mensagem de erro ao realizar cadastro com email já cadastrado', () => {
        cy.get('#reg_email').type('raffaela.monteiro@gmail.com')
        cy.get('#reg_password').type('doddy3009')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
        
    });

});
