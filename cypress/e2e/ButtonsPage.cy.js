import Functions from "./POM/Functions";
import Elements from "./POM/Elements";
import Verifications from "./POM/Verifications";
import Buttons from "./POM/Buttons";

const buttonPage = new Buttons()
const basePage = new Functions()
const elementItem = new Elements()
const verify = new Verifications()

describe('Automation Test', () => {
    beforeEach(() => {
        basePage.visitToHomePage();
        elementItem.NavigateToTab('Elements');
        elementItem.checkButtonsPage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('buttons title visibility', () =>{
         verify.checkButtonsTitleVisibility();
     })
    it('"Double Click Me" button visibility', () =>{
         verify.checkDoubleClickMeButtonVisibility();
     })
    it('"Right Click Me" button visibility', () => {
         verify.checkRightClickMeButtonVisibility();
     })
    it('"Click Me" button visibility', () => {
         verify.checkClickMeButtonVisibility();
     })
    it('Double Click and Success Message Verification', () =>{
        buttonPage.checkDoubleClickButton();
        verify. doubleClickSuccessMessageVisibility();
     })
    it('Right Click and Success Message Verification', () => {
        buttonPage.checkRightClickButton();
        verify.rightClickSuccessMessageVisibility();
    })
    it('Click Me Button and Success Message Verification', () =>{
        buttonPage.checkClickMeButton();
        verify.clickMeSuccessMessageVisiblity();
     })













})