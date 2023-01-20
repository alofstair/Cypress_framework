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

export function  clickAnitem(pageSelector) {
    cy.get(pageSelector).click()
}

export function hasTextandClick(pageSelector, text){
    cy.get(pageSelector).should('have.text', text).click()
}

export function dropdownSelect(pageSelector, value){
    cy.get(pageSelector).select(value)
}

export function checkboxCheck(pageSelector) {
    cy.get('[type="checkbox"]').check(pageSelector)
}

export function checkboxUncheck(pageSelector) {
    cy.get('[type="checkbox"]').uncheck(pageSelector)
}