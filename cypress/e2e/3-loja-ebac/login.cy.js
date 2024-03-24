/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
      cy.visit('minha-conta')
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('raffaela.monteiro@gmail.com')
        cy.get('#password').type('doddy3009')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','raffaela.monteiro')
      })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('raffaela.monteiro@teste.com')
        cy.get('#password').type('doddy3009')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('raffaela.monteiro@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail raffaela.monteiro@gmail.com está incorreta.')
    });

    it('Deve exibir mensagem de erro ao não inserir a senha', () => {
        cy.get('#username').type('raffaela.monteiro@gmail.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: O campo da senha está vazio.')
    });

    it('Deve exibir mensagem de erro ao não inserir email', () => {
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: Nome de usuário é obrigatório.')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','raffaela.monteiro')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false }) //não mostrar nos logs o valor da senha
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','raffaela.monteiro')
        })
    });

    it('Deve fazer login com sucesso - Usando comandos costumizados', () => {
        cy.login(perfil.usuario,perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','raffaela.monteiro')
      })

})