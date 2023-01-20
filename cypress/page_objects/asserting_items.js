export function containsText(pageSelector, text) {
    cy.get(pageSelector).should('contains.text', text)
}

export function hasText(pageSelector, text) {
    cy.get(pageSelector).should('have.text', text)
}