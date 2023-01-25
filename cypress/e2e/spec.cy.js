
// Here I am importing the page objects that I have defined to that they can be used with my test
import * as itemSelect from '../page_objects/selecting_items.js'
import * as itemDefine from '../page_objects/defining_items.js'
import * as itemAssert from '../page_objects/asserting_items.js'
import * as testRecording from "../page_objects/recording_tests"; '../page_objects/recording_tests.js'


//Simple example
describe('Interacting with web elements', () => {
  it('This is a test', () => {
    //cy.visit('[Page I want to test]')
    //itemSelect.hasTextandClick('#id or other page selector', 'text I want to assert on')
    //itemAssert.hasText('#id or other page selector', 'text I want to assert on')
    //testRecording.takeAscreenshot('Name I want to record screenshot as')
  })
})