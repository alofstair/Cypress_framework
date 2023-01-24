//This page has the methods for asserting an item on a web page.


//This method looks at a pageSelector and asserts some of the text matches that defined
export function containsText(pageSelector, text) {
    cy.get(pageSelector).should('contains.text', text)
}


//This method looks at a pageSelector and asserts that the text matches that defined

export function hasText(pageSelector, text) {
    cy.get(pageSelector).should('have.text', text)
}