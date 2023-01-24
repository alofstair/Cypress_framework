//This page has the methods for selecting an item on a web page.


//This method looks at a pageSelector that returns many values and indexes them to find the specified value.
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


//This method looks for a defined pageSelector and clicks on it for you
export function  clickAnitem(pageSelector) {
    cy.get(pageSelector).click()
}


//This method looks for a defined pageSelector, asserts it has the defined text then clicks on it for you
export function hasTextandClick(pageSelector, text){
    cy.get(pageSelector).should('have.text', text).click()
}

//This method selects a value from a dropdown list
export function dropdownSelect(pageSelector, value){
    cy.get(pageSelector).select(value)
}

//This method checks the checkbox where pageSelector has a type of checkbox
export function checkboxCheck(pageSelector) {
    cy.get('[type="checkbox"]').check(pageSelector)
}

//This method unchecks the checkbox where pageSelector has a type of checkbox
export function checkboxUncheck(pageSelector) {
    cy.get('[type="checkbox"]').uncheck(pageSelector)
}