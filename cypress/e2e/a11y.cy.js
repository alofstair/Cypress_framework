/// <reference types="cypress"/>

import * as itemSelect from '../page_objects/selecting_items.js'
import * as itemDefine from '../page_objects/defining_items.js'
import * as itemAssert from '../page_objects/asserting_items.js'
import * as testRecording from '../page_objects/recording_tests'
import * as applitoolsEyes from '../page_objects/applitools_eyes_support'
import {clickAnitem} from "../page_objects/selecting_items.js";


describe('a11y', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        itemDefine.defineText('[data-test="username"]', 'standard_user')
        itemDefine.defineText('[data-test="password"]', 'secret_sauce')
        itemSelect.clickAnitem('#login-button')
    });

    it('a11y_test ', () => {
        cy.injectAxe();
        cy.step('A11y Test')
        cy.checkA11y();
    });
});
