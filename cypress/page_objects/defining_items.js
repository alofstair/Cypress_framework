export function defineText(pageSelector, text) {
    cy.get(pageSelector).type(text)
}

export function clearThentype(pageSelector, text) {
    cy.get(pageSelector).clear()
        .type(text)
}