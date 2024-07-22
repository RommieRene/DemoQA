export default class Buttons{

    DoubleClickButton = '[id="doubleClickBtn"]'
    rightClickButton = '[id="rightClickBtn"]'
    clickMeButton = '[class="btn btn-primary"]'
    clickMe = "Click Me"
    homeBUtton = '[id="simpleLink"]'
    HomeL4h2iButton = '[id="dynamicLink"]'

    checkHomeButton(){
        cy.get(this.homeBUtton).click();
    }
    checkSecondHomeButton(){
        cy.get(this.HomeL4h2iButton).click();
    }
    checkRightClickButton(){
        cy.get(this.rightClickButton).rightclick();
    }
    checkDoubleClickButton(){
        cy.get(this.DoubleClickButton).dblclick();
    }
    checkClickMeButton(){
        cy.get(this.clickMeButton).last().contains(this.clickMe).click();
    }
}