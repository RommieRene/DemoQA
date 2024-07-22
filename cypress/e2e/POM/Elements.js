export default class Elements {

    elementButton = '[class="card-body"]'
    classText = '[class="text"]'
    TextBox = 'Text Box'
    CheckBox = 'Check Box'
    radioButton = 'Radio Button'
    webTable = 'Web Tables'
    buttons = 'Buttons'
    links = 'Links'

    NavigateToTab(Tab) {
        cy.get(this.elementButton).contains(Tab).click()
    }
    checkTextBoxPage() {
        cy.get(this.classText).contains(this.TextBox).click();
    }
    check_CheckBoxPage() {
        cy.get(this.classText).contains(this.CheckBox).click();
    }
    checkRadioButtonPage(){
        cy.get(this.classText).contains(this.radioButton).click()
    }
    checkWebTablePage(){
        cy.get(this.classText).contains(this.webTable).click()
    }
    checkButtonsPage(){
        cy.get(this.classText).contains(this.buttons).click()
    }
    checkLinksPage(){
        cy.get(this.classText).contains(this.links).click()
    }
}