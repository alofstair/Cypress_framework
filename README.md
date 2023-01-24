#How do I get set up?#
Clone this repository
You will need the minimum NodeJS version installed as identified in the cypress website.
Then you need to have Cypress installed
Visit https://www.cypress.io/
In a command line in the directory you want to run Cypress from type: "npm install --save-dev cypress"


#Webkit installation#
Installation:
In the cypress project you have created run the following from the command line.
npm install --save-dev playwright-webkit
Ensure that experimentalWebKitSupport: true is set in the cypress.config.js file


#Running Headless#
To run headless when you don't have an npm script set up use the following command.
npx cypress run --browser chrome --spec cypress/[filepath of your test.cy.js]