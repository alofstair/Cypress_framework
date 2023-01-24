//This page has the methods for typing in a field.


//This method looks at a pageSelector and then adds the value supplied
export function defineText(pageSelector, text) {
    cy.get(pageSelector).type(text)
}


//This method looks at a pageSelector, clears any value already there and then adds the value supplied
export function clearThentype(pageSelector, text) {
    cy.get(pageSelector).clear()
        .type(text)
}