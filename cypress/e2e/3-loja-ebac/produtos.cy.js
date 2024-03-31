/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
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
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProdutoLista(produto)
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Deve visitar a página do produtos', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.visitarProduto(produto)
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Aero Daily Fitness Tee'
        let qtd = 7
        produtosPage.buscarProduto(produto)
        produtosPage.addProdutoCarrinho('S','Black',qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho,dados[0].cor,dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
    });
})