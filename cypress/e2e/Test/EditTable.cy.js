import Functions from "../POM/Functions";
import Elements from "../POM/Elements";
import Verifications from "../POM/Verifications";
import WebTable from "../POM/WebTable";

const table = new WebTable()
const basePage = new Functions()
const elementItem = new Elements()
const verify = new Verifications()

describe('Automation Test', () => {
    let inputValue;
    beforeEach(() => {
        basePage.visitToHomePage();
        elementItem.NavigateToTab("Elements")
        elementItem.checkWebTablePage();

    });
    it('first table',()=> {
        table.checkEditButton();
        table.getFirstName();
        table.editFirstName();
        table.getLastName();
        table.editLastName();
        table.getEmail();
        table.editEmail();
        table.getAge();
        table.editAge();
        table.getSalary();
        table.editSalary();
        table.getDepartment();
        table.editDepartment();
        table.checkSubmitButton();
        table.verifyChangedName();
        table.verifyChangedLastName();
        table.verifyChangedAge();
        table.verifyChangedEmail();
        table.verifyChangedSalary();
        table.verifyChangedDepartment();
        table.checkEditButton();
        table.editFirstNameSecondTime();
        table.editLastNameSecondTime();
        table.editAgeSecondTIme();
        table.editEmailSecondTime();
        table.editSalarySecondTime();
        table.editDepartmentSecondTIme();
        table.checkSubmitButton();
    })
    it('second Table', ()=>{

        table.checkSecondEditButton();
        table.getSecondFirstName();
        table.editFirstName();
        table.getSecondLastName();
        table.editLastName();
        table.getSecondAge();
        table.editAge();
        table.getSecondEmail();
        table.editEmail();
        table.getSecondSalary()
        table.editSalary();
        table.getSecondDepartment();
        table.editDepartment();
        table.checkSubmitButton();
        table.verifyChangedName();
        table.verifyChangedLastName();
        table.verifyChangedAge();
        table.verifyChangedEmail();
        table.verifyChangedSalary();
        table.verifyChangedDepartment();
        table.checkSecondEditButton();
        table.editFirstNameSecondTime();
        table.editLastNameSecondTime();
        table.editAgeSecondTIme();
        table.editEmailSecondTime();
        table.editSalarySecondTime();
        table.editDepartmentSecondTIme();
        table.checkSubmitButton();
    })
    it('third table', ()=>{

        table.checkThirdEditButton();
        table.getThirdFirstName();
        table.editFirstName();
        table.getThirdLastName();
        table.editLastName();
        table.getThirdAge();
        table.editAge();
        table.getThirdEmail();
        table.editEmail();
        table.getThirdSalary();
        table.editSalary();
        table.getThirdDepartment();
        table.editDepartment();
        table.checkSubmitButton();
        table.checkThirdEditButton();
        table.verifyChangedName();
        table.verifyChangedLastName()
        table.verifyChangedAge();
        table.verifyChangedEmail();
        table.verifyChangedSalary();
        table.verifyChangedDepartment();
        table.editFirstNameSecondTime();
        table.editLastNameSecondTime();
        table.editAgeSecondTIme();
        table.editEmailSecondTime();
        table.editSalarySecondTime();
        table.editDepartmentSecondTIme();
        table.checkSubmitButton();
    })
})