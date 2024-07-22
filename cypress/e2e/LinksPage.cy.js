import Functions from "./POM/Functions";
import Elements from "./POM/Elements";
import Verifications from "./POM/Verifications";
import Buttons from "./POM/Buttons";
import Status from "./POM/Status";

const checkStatus = new Status()
const button = new Buttons()
const verify = new Verifications()
const basePage = new Functions()
const elementItem = new Elements()


describe('Test Statuses', () => {
    beforeEach(() => {
        basePage.visitToHomePage();
        elementItem.NavigateToTab("Elements")
        elementItem.checkLinksPage();

    });
    it('Verify Success or failed message ', () => {
        verify.verifyFirstSubTitleVisibility();
        button.checkHomeButton();
        button.checkSecondHomeButton();
        verify.verifySecondSubTitleVisibility();
    })
    it('Created Status', () =>{
        checkStatus.verifyCreatedStatus();
    })
    it('No Content Status',() => {
        checkStatus.verifyNoContentStatus();
    })
    it('Moved Status', () =>{
        checkStatus.verifyMovedStatus();
    })
    it('Bad Request Status', () =>{
        checkStatus.verifyBadRequestStatus();
    })
    it('Unauthorized Status',()=>{
        checkStatus.verifyUnauthorizedStatus();
    })
    it('Forbidden Status',()=>{
        checkStatus.verifyForbiddenStatus();
    })
    it('Not Found Status',()=>{
        checkStatus.verifyNotFoundStatus();
    })


})



