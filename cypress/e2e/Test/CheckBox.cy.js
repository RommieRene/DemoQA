import Functions from "../POM/Functions";
import Elements from "../POM/Elements";
import Verifications from "../POM/Verifications";
import CheckBox from "../POM/CheckBox";

const check = new CheckBox()
const basePage = new Functions()
const elementItem = new Elements()
const verify = new Verifications()

describe('Automation Test', () => {
    beforeEach(() => {
        basePage.visitToHomePage();
        elementItem.NavigateToTab("Elements");
        elementItem.check_CheckBoxPage();
        check.expandAllFolders();
    });
    it('Open All Toggles step by step', () =>{
        check.collapseAllFolders();
        check.clickFirstTitleToggle();
        check.clickSecondTitleToggle();
        check.clickThirdTitleToggle();
        check.clickFourthTitleToggle();
        check.clickFifthTitleToggle();
        check.clickSixthTitleToggle();
        check.clickSixthTitleToggle();
        check.clickFifthTitleToggle();
        check.clickFourthTitleToggle();
        check.clickThirdTitleToggle();
        check.clickSecondTitleToggle();
        check.clickFirstTitleToggle();
    });
    it('verify Success message ', () => {
          check.clickOnCheckBoxButton();
          verify.VerifySuccessMessage();
          check.clickOnCheckBoxButton();
    });
    it('Click on Notes Folder Verify Success Message and unmark it', ()=>{
          check.clickNotesFolder();
          verify.VerifyEachFolderSuccessMessage('notes')
          check.clickNotesFolder();
    });
    it('Click on Commands Folder Verify Success Message and unmark it', ()=>{
          check.clickCommandsFolder();
          verify.VerifyEachFolderSuccessMessage('commands')
          check.clickCommandsFolder();
    });
    it('Click on React Folder Verify Success Message and unmark it', ()=>{
          check.clickReactFolder();
          verify.VerifyEachFolderSuccessMessage('react')
          check.clickReactFolder();
    });
    it('Click on Angular Folder Verify Success Message and unmark it', ()=>{
          check.clickAngularFolder();
          verify.VerifyEachFolderSuccessMessage('angular')
          check.clickAngularFolder();
    });
    it('Click on Veu Folder Verify Success Message and unmark it', ()=>{
          check.clickVeuFolder();
          verify.VerifyEachFolderSuccessMessage('veu')
          check.clickVeuFolder();
    });
    it('Click on Public Folder Verify Success Message and unmark it', ()=> {
          check.clickPublicFolder();
          verify.VerifyEachFolderSuccessMessage('public')
          check.clickPublicFolder();
    });
    it('Click on Private Folder Verify Success Message and unmark it', ()=> {
          check.clickPrivateFolder();
          verify.VerifyEachFolderSuccessMessage('private')
          check.clickPrivateFolder();
    });
    it('Click on Classified Folder Verify Success Message and unmark it', ()=> {
          check.clickClassifiedFolder();
          verify.VerifyEachFolderSuccessMessage('classified')
          check.clickClassifiedFolder();
    });
    it('Click on General Folder Verify Success Message and unmark it', ()=> {
          check.clickGeneralFolder();
          verify.VerifyEachFolderSuccessMessage('general')
          check.clickGeneralFolder();
    });
    it('Click on Word Folder Verify Success Message and unmark it', ()=> {
          check.clickWordFileDoc()
          verify.VerifyEachFolderSuccessMessage('wordFile')
          check.clickWordFileDoc()
    });
    it('Click on Excel Folder Verify Success Message and unmark it', ()=> {
          check.clickExcelFileDoc();
          verify.VerifyEachFolderSuccessMessage('excelFile')
          check.clickExcelFileDoc();
    });
    it('Verify Three Success Messages',()=> {
        check.clickDesktopFolder();
        verify.verifyThreeSuccessMessage();
    });
    it('Verify Four Success Messages',()=> {
        check.clickWorkSpaceFolder();
        verify.verifyFourSuccessMessage();
    });
    it('Verify Five Success Messages',()=> {
        check.clickOfficeFolder();
        verify.verifyFiveSuccessMessage();
    });
    it ('Verify Three Success Messages', () =>{
        check.clickDownloadsFolder();
        verify.verifyThreeWordsSuccessMessage();
    });
});


