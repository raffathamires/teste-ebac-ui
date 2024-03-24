/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario,login.senha)
        })
      });

      afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        var primeiroNome = faker.person.firstName()
        var ultimoNome = faker.person.lastName()
        var usuario = faker.internet.userName()

        cy.detalhesConta(primeiroNome, ultimoNome, usuario)
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
});