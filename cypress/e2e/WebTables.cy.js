import Functions from "./POM/Functions";
import Elements from "./POM/Elements";
import Verifications from "./POM/Verifications";
import WebTable from "./POM/WebTable";

const table = new WebTable()
const basePage = new Functions()
const elementItem = new Elements()
const verify = new Verifications()

describe('Automation Test', () => {
    beforeEach(() => {
        basePage.visitToHomePage();
        elementItem.NavigateToTab("Elements")
        elementItem.checkWebTablePage();

    });
    it('Verify Page', () =>{
        verify.webPageTitleVisibility();
        verify.tableVisibility();


    })
    it('Column Existence', () =>{
        verify.verifyColumnFirstName();
        verify.verifyColumnLastName();
        verify.verifyColumnAge();
        verify.verifyColumnEmail();
        verify.verifyColumnSalary();
        verify.verifyColumnDepartment();
    })
    it('tables amount ', () => {
        table.selectFiveRows();
        verify.verifyFiveRowsVisibility();
        table.selectTenRows();
        verify.verifyTenRowsVisibility();
        table.selectFiftyRows();
        verify.verifyFiftyRowsVisibility();
        table.selectHundredRows();
        verify.verifyHundredRowsVisibility();
    })
    it('search field', () =>{
        table.typeNameInSearchField();
        table.checkSearchButton();
        table.verifySearchedName();
    })
    it('add table',()=>{
        table.clickAddButton();
        table.checkFirstNameField();
        table.checkLastNameField();
        table.checkEmailfield();
        table.checkAgeField();
        table.checkSalaryField();
        table.checkDepartmentField();
        table.checkSubmitButton();
        table.verifyAddedItem();
        table.checkEditButton();
    })
    it('Edit Table and Delete row', () =>{
        table.checkEditButton();
        table.editFirstName();
        table.editLastName();
        table.editEmail();
        table.editAge();
        table.editSalary();
        table.editDepartment();
        table.checkSubmitButton();
        table.checkDeleteButton();
    })
});