
// Here I am importing the page objects that I have defined to that they can be used with my test
import * as itemSelect from '../page_objects/selecting_items.js'
import * as itemDefine from '../page_objects/defining_items.js'
import * as itemAssert from '../page_objects/asserting_items.js'
import * as testRecording from '../page_objects/recording_tests'
import * as applitoolsEyes from '../page_objects/applitools_eyes_support'
import {clickAnitem} from "../page_objects/selecting_items.js";
import {doesNotexist, indexSelector} from "../page_objects/asserting_items.js";


describe('Shopping', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    itemDefine.defineText('[data-test="username"]', 'standard_user')
    itemDefine.defineText('[data-test="password"]', 'secret_sauce')
    itemSelect.clickAnitem('#login-button')
  });

  it('Choose and remove item from the main page', () => {
    cy.step('Choose item')
    itemSelect.clickAnitem('#add-to-cart-sauce-labs-fleece-jacket')
    cy.step('Checking the count')
    itemAssert.hasText('.shopping_cart_badge', '1')
    cy.step('Removing the item')
    itemSelect.clickAnitem('#remove-sauce-labs-fleece-jacket')
    cy.step('Checking the count is updated')
    itemAssert.doesNotexist('.shopping_cart_badge')
  });

  it('Interacting with the cart', () => {
    cy.step('Adding items to the cart')
    itemSelect.clickAnitem('#add-to-cart-sauce-labs-fleece-jacket')
    itemSelect.clickAnitem('#add-to-cart-sauce-labs-bolt-t-shirt')
    cy.step('Assert cart count')
    itemAssert.hasText('.shopping_cart_badge', '2')
    cy.step('Visit the cart')
    itemSelect.clickAnitem('#shopping_cart_container')
    cy.step('Find am item added')
    itemAssert.indexSelectorContainsText('.cart_item', '1', 'Sauce Labs Bolt T-Shirt')
  });
});