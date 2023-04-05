
// Here I am importing the page objects that I have defined to that they can be used with my test
import * as itemSelect from '../page_objects/selecting_items.js'
import * as itemDefine from '../page_objects/defining_items.js'
import * as itemAssert from '../page_objects/asserting_items.js'
import * as testRecording from '../page_objects/recording_tests'
import * as applitoolsEyes from '../page_objects/applitools_eyes_support'
import {clickAnitem} from "../page_objects/selecting_items.js";


describe('Logging in', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    itemDefine.defineText('[data-test="username"]', 'standard_user')
  });

  it('Log In - valid', () => {
    itemDefine.defineText('[data-test="password"]', 'secret_sauce')
    itemSelect.clickAnitem('#login-button')
    cy.step('Successful log in assertion')
    itemAssert.hasText('.app_logo', 'Swag Labs')
  });

  it('Log In - invalid', () => {
    itemDefine.defineText('[data-test="password"]', 'invalid_password')
    itemSelect.clickAnitem('#login-button')
    cy.step('Failed log in assertion')
    itemAssert.hasText('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
  });
});