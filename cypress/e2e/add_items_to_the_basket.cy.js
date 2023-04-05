
// Here I am importing the page objects that I have defined to that they can be used with my test
import * as itemSelect from '../page_objects/selecting_items.js'
import * as itemDefine from '../page_objects/defining_items.js'
import * as itemAssert from '../page_objects/asserting_items.js'
import * as testRecording from '../page_objects/recording_tests'
import * as applitoolsEyes from '../page_objects/applitools_eyes_support'
import {clickAnitem} from "../page_objects/selecting_items.js";
import {doesNotexist} from "../page_objects/asserting_items.js";


describe('Shopping', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    itemDefine.defineText('[data-test="username"]', 'standard_user')
    itemDefine.defineText('[data-test="password"]', 'secret_sauce')
    itemSelect.clickAnitem('#login-button')
  });

  it('Choose and remove item from the main page', () => {
    itemSelect.clickAnitem('#add-to-cart-sauce-labs-fleece-jacket')
    itemAssert.hasText('.shopping_cart_badge', '1')
    itemSelect.clickAnitem('#remove-sauce-labs-fleece-jacket')
    itemAssert.doesNotexist('.shopping_cart_badge')
  });

  it.only('Interacting with the cart', () => {
    itemSelect.clickAnitem('#add-to-cart-sauce-labs-fleece-jacket')
    itemSelect.clickAnitem('#add-to-cart-sauce-labs-bolt-t-shirt')
    itemAssert.hasText('.shopping_cart_badge', '2')
    itemSelect.clickAnitem('#shopping_cart_container')
  });
});