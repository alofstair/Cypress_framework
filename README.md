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


Applitools eyes
To do visual validation a plug in such as Applitools-eyes can be used.
To install Applitools-eyes:
first register with Applitools here - https://applitools.com/users/register
Now in a terminal pointing at this project run - npm install @applitools/eyes-cypress
Then run - npx eyes-setup
You'll then need to configure your test to send tests to applitools - take a look at the "cds.spec.js" test for an example of how to do this
Or have a watch of lesson 8 in the TAU - introduction to cypress here - https://testautomationu.applitools.com/cypress-tutorial/chapter8.html
Before running the test export the api key (which you can get from Applitools under your user avatar) in a terminal using the following command:
export APPLITOOLS_API_KEY= {yourAPIKey}
Now you can run your tests