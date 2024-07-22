import Functions from "./POM/Functions";
import Elements from "./POM/Elements";
import InputFields from "./POM/InputFields";
import Verifications from "./POM/Verifications";

const verify = new Verifications()
const input = new InputFields()
const elementItem = new Elements()
const basePage = new Functions()



describe('Test Automation', () => {
    beforeEach(() => {
        basePage.visitToHomePage()
        elementItem.NavigateToTab("Elements")
        elementItem.checkTextBoxPage()

    })
    it('type Full Name', () => {
        input.typeFullName()
        basePage.clickSubmitButton()
        input.fullNameVerification()
    })
    it('type Correct Email ', () => {
        input.typeCorrectEmail()
        basePage.clickSubmitButton()
        input.emailVerification()
    })
    it('type incorrect Email', () =>{
        input.typeIncorrectEmail()
        basePage.clickSubmitButton()
        verify.errorFieldVerification()

    })
    it('type Current Address', () => {
        input.typeCurrentAddress()
        basePage.clickSubmitButton()
        input.currentAddressVerification()
    })
    it('type Permanent Address ', () =>{
        input.typePermanentAddress()
        basePage.clickSubmitButton()
        input.permanentAddressVerification()
    })

})