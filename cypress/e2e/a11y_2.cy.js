/// <reference types="cypress"/>

import * as itemDefine from "../page_objects/defining_items";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

//requires installation of the i-frame module from npm. Please see the readme for details

import 'cypress-iframe';
import * as suiteContent from '../../page-objects/suite-getter.js';
import * as itemSelect from "../page_objects/selecting_items";

describe('accessibility test automation with cypress axe', () => {

    const a11YOptions = {
        runOnly: {
            type: 'tag',
            values: ['wcag2a','wcag2aa', 'wcag2.1aa']
        }
    }
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        itemDefine.defineText('[data-test="username"]', 'standard_user')
        itemDefine.defineText('[data-test="password"]', 'secret_sauce')
        itemSelect.clickAnitem('#login-button')
        cy.wait(5000);
        //Axe is injected against the page
        cy.injectAxe()
        cy.configureAxe({
            branding: {
                brand: "Swag Labs",
                application: "Swag Labs Demo App"
            },
            reporter: "v2",
            iframes: true,
        })
    })
    it('Check home page with selected a11y standards', () => {
        //This is where the test run and outputs a11y results.
        cy.checkA11y(null, a11YOptions)
    })
})