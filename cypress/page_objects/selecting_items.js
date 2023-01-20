export function textToindexSeeker (pageSelector, text) {
    cy.get(pageSelector).each(($el, index) => {
    if ($el.text() === text) {
      cy.get(pageSelector).eq(index).click()
      return
    }
  })
 }

export function tdselectOnpage (pageSelector, text) {
    cy.contains('td', pageSelector)  // gives you the cell
        .siblings()                 // gives you all the other cells in the row
        .contains(text)            // finds the text
        .click()
}

export function  typeinAnitem(pageSelector, text) {
    cy.get(pageSelector).type(text)
}

export function  clickAnitem(pageSelector) {
    cy.get(pageSelector).click()
}

export function hasTextandClick(pageSelector, text){
    cy.get(pageSelector).should('have.text', text).click()
}