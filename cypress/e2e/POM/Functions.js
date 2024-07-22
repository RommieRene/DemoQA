export default class Functions {

    url = 'https://demoqa.com'
    submitButton = '[id="submit"]'
    Yes = 'label[for="yesRadio"]'
    impressive = '[for="impressiveRadio"]'

    visitToHomePage() {
        cy.visit(this.url)
    }
    clickSubmitButton() {
            cy.get(this.submitButton).click()
        }
    clickYesRadioButton() {
        cy.get(this.Yes).click()
    }
    clickImpressiveRadioButton() {
        cy.get(this.impressive).click()
    }
}


