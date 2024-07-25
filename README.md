# DEMOQA Automation Test Project

This project contains automation tests for the DEMOQA website using Cypress. The tests cover various functionalities of the site including buttons, checkboxes, tables, links, radio buttons, text boxes, and web tables.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm are installed on your machine.
- Cypress is installed in your project. If not, install it using:
  
  ```bash
  npm install cypress --save-dev

## Running Tests
### Opening Cypress Test Runner (UI)
To open the Cypress Test Runner and run tests through the browser UI, use the following command:
  ```bash 
  npx cypress open
  ```
This will open the Cypress Test Runner, where you can select and run any of the test files interactively.

### Running Tests via Terminal (Headless)
To run a specific test file in headless mode (without opening a browser UI), use the following command:
  ```bash
  npx cypress run --spec "cypress/e2e/test/{class_name}.cy.js"
  ```
Replace {class_name} with the name of the test file you want to run. Here are the available test files:
- ButtonsPage.cy.js
- CheckBox.cy.js
- EditTable.cy.js
- LinksPage.cy.js
- RadioButton.cy.js
- TextBox.cy.js
- WebTables.cy.js
  
For example, to run the ButtonsPage.cy.js test file, use:
  ```bash
  npx cypress run --spec "cypress/e2e/test/ButtonsPage.cy.js"
  ```

## Test Files
The following test files are available in this project:

- ButtonsPage.cy.js: Tests related to the buttons page.
- CheckBox.cy.js: Tests related to the checkboxes page.
- EditTable.cy.js: Tests related to editing tables.
- LinksPage.cy.js: Tests related to the links page.
- RadioButton.cy.js: Tests related to the radio buttons page.
- TextBox.cy.js: Tests related to the text boxes page.
- WebTables.cy.js: Tests related to web tables.

## Project Structure
The project structure is as follows:
```
/cypress
  /e2e
    /POM
      Button.js
      CheckBox.js
      Elements.js
      Functions.js
      InputFields.js
      Status.js
      Verifications.JS
      WebTable.js
    /Test
      ButtonsPage.cy.js
      CheckBox.cy.js
      EditTable.cy.js
      LinksPage.cy.js
      RadioButton.cy.js
      TextBox.cy.js
      WebTables.cy.js
  /fixtures
  /support
    commands.js
    e2e.js

```
## Additional Information
For more information on Cypress and how to use it, refer to the [official Cypress documentation](https://docs.cypress.io).

Happy testing! :)


