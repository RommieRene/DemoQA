import Functions from "./POM/Functions";
import Elements from "./POM/Elements";
import Verifications from "./POM/Verifications";

const basePage = new Functions()
const elementItem = new Elements()
const verify = new Verifications()

describe('Automation Test', () => {
    beforeEach(() => {
        basePage.visitToHomePage();
        elementItem.NavigateToTab("Elements")
        elementItem.checkRadioButtonPage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('"Yes" Radio buttons ', () => {
            basePage.clickYesRadioButton();
            verify.selectionYesVerification();
    });
    it('Impressive Radio Button ', () => {
            basePage.clickImpressiveRadioButton();
            verify.selectionImpressiveVerification();
    });
    it('verify No Radio Button is disabled ', () => {
            verify.NoRadioButtonDisabled();
    });
});
