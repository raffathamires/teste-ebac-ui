Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('preCadastro', (email, senha, primeiroNome, ultimoNome) => { 
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(primeiroNome)
    cy.get('#account_last_name').type(ultimoNome)
    //tempo de espera
    cy.wait(5000)
    cy.get('.woocommerce-Button').click()
 })

 Cypress.Commands.add('detalhesConta', (primeiroNome, ultimoNome, usuario) => { 
    cy.get('#account_first_name').type(primeiroNome)
    cy.get('#account_last_name').type(ultimoNome)
    cy.get('#account_display_name').clear()
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()
 })