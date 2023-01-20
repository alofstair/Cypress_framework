// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('login', (url, username, password) => {
    cy.session([url, username, password], () => {
        cy.visit(url)
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.btn').should('contain.text', 'Log In').click()
    })
})
// this'd be used in a spec toi preserve the session between tests so as to not have to log in each time
// describe('tests', () => {
//   beforeEach(() => {cy.login()
//     });

Cypress.Commands.add("clickLinkWithHrefDynamicPart[item]", (dynamic) => {
    cy.get(`a[href*="${dynamic}/show_notify"]`).click();
});
// this will be paired with:
// const  dynamic= "[vaue]"
//cy.clickLinkWithHrefDynamicPart[item](dynamic)
// in the spec