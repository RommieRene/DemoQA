import {faker} from "@faker-js/faker";

const username = faker.internet.userName()
const userEmail = faker.internet.email()
const searchText = 'Cie';
let inputValue;
let inputLastName;
let inputEmail;
let inputAge;
let inputSalary;
let inputDep
export default class webTable{

     name = 'Vegan'
    LastName = 'Buduryan'
    email = 'email@mail.email'
    Age= '30'
    Salary = '12345'
    Department = 'Hospital'
    addBUtton = '[id="addNewRecordButton"]'
    firstName = '[id="firstName"]'
    lastName = '[id="lastName"]'
    userEmail = '[id="userEmail"]'
    age = '[id="age"]'
    salary = '[id="salary"]'
    department = '[id="department"]'
    submitButton = '[id="submit"]'
    searchField = '[id="searchBox"]'
    searchButton = '[class="input-group-text"]'
    selectRows = '[aria-label="rows per page"]'
    firstColumn = '.rt-td'
    firstEditButton = '[id="edit-record-1"]'
    secondEditButton = '[id="edit-record-2"]'
    thirdEditButton = '[id="edit-record-3"]'
    editFirstNameField = '[placeholder="First Name"]'
    editLastNameField =  '[placeholder="Last Name"]'
    editAgeField = '[placeholder="Age"]'
    editEmailField = '[placeholder="name@example.com"]'
    editSalaryField = '[placeholder="Salary"]'
    editDepartmentField = '[placeholder="Department"]'
    deleteButton = '[id="delete-record-1"]'
    firstNameField = '[id="firstName"]'

    clickAddButton(){
        cy.get(this.addBUtton).click()
    }
    checkFirstNameField() {
        cy.get(this.firstName).type(username).should('have.value', username);
    }
    checkLastNameField() {
        cy.get(this.lastName).type(username)
    }
    checkEmailField(){
        cy.get(this.userEmail).type(email)
    }
    checkEmailfield(){
        cy.get(this.userEmail).type(userEmail)
    }
    checkAgeField(){
        cy.get(this.age).type('30')
    }
    checkSalaryField(){
        cy.get(this.salary).type('1')
    }
    checkDepartmentField(){
        cy.get(this.department).type('something')
    }
    checkSubmitButton(){
        cy.get(this.submitButton).click()
    }
    verifyAddedItem() {
        cy.get(this.firstColumn)
            .should('contain', username)
    }
    selectFiveRows () {
        cy.get(this.selectRows).select('5 rows')
    }
    selectTenRows () {
        cy.get(this.selectRows).select('10 rows')
    }
    selectFiftyRows () {
        cy.get(this.selectRows).select('50 rows')
    }
    selectHundredRows () {
        cy.get(this.selectRows).select('100 rows')
    }
    typeNameInSearchField(){
        cy.get(this.searchField).type(searchText)
            .should('have.value', searchText);
    }
    checkSearchButton() {
        cy.get(this.searchButton).click()
    }
    verifySearchedName() {
        cy.get(this.firstColumn)
            .invoke('text')
            .then((text) => {
                const cierraFirstThreeLetters = text.trim().slice(0, 3);
                expect(cierraFirstThreeLetters.toLowerCase()).to.equal(searchText.toLowerCase());
            });
    }
    checkEditButton() {
        cy.get(this.firstEditButton).click()
    }
    checkSecondEditButton(){
         cy.get(this.secondEditButton).click()
    }
    checkThirdEditButton(){
        cy.get(this.thirdEditButton).click()
    }
    editFirstName(){
        cy.get(this.editFirstNameField).clear().type(this.name)
    }

    editLastName(){
        cy.get(this.editLastNameField).clear().type(this.LastName)
    }
    editEmail(){
        cy.get(this.editEmailField).clear().type(this.email)
    }
    editAge(){
        cy.get(this.editAgeField).clear().type(this.Age)
    }
    editSalary(){
        cy.get(this.editSalaryField).clear().type(this.Salary)
    }
    editDepartment(){
        cy.get(this.editDepartmentField).clear().type('Hospital')
    }
    checkDeleteButton(){
        cy.get(this.deleteButton).click()
    }
    getFirstName() {
        cy.get(this.editFirstNameField)
            .invoke('val')
            .then((value) => {

                inputValue = String(value);


                cy.log(`Input value: ${inputValue}`); // Output: Cierra


                expect(inputValue).to.equal('Cierra');
            });

    }

    verifyChangedName(){
        cy.get('[class="rt-td"]').should('contain', this.name)
    }
    verifyChangedLastName(){
        cy.get('[class="rt-td"]').should('contain', this.LastName)
    }
    verifyChangedAge(){
        cy.get('[class="rt-td"]').should('contain',this.Age)
    }
    verifyChangedEmail(){
        cy.get('[class="rt-td"]').should('contain',this.email)
    }
    verifyChangedSalary(){
        cy.get('[class="rt-td"]').should('contain',this.Salary)
    }
    verifyChangedDepartment(){
        cy.get('[class="rt-td"]').should('contain',this.Department)
    }
    changedNameVerfication(){
        cy.then(() => {
            cy.get('[class="rt-td"]').should('contain', inputValue)
        });
    }
    editFirstNameSecondTime(){
        cy.then(() => {
            cy.get(this.editFirstNameField).clear().type(inputValue)
        });
    }
    getLastName(){
         cy.get(this.editLastNameField)
             .invoke('val')
             .then((value)=>{
                 inputLastName = String(value);
                 cy.log(`Input Value: ${inputLastName}`);
                 expect(inputLastName).to.eq('Vega')
             });
    }

    editLastNameSecondTime(){
        cy.then(() => {
            cy.get(this.editLastNameField).clear().type(inputLastName)
        });
    }
    getEmail(){
         cy.get(this.editEmailField)
             .invoke('val')
             .then((value)=>{
             inputEmail = String(value);
             cy.log(`Input Value: ${inputEmail}`);
             expect(inputEmail).to.eq('cierra@example.com')
         })
    }
    editEmailSecondTime(){
         cy.then(() => {
             cy.get(this.editEmailField).clear().type(inputEmail)
         })
    }
    getAge(){
         cy.get(this.editAgeField).invoke('val').then((value)=>{
           inputAge = String(value);
           cy.log(`Input Value; ${inputAge}`);
           expect(inputAge).to.eq('39')
         })
    }
    editAgeSecondTIme(){
         cy.then(()=>{
             cy.get(this.editAgeField).clear().type(inputAge)
         })
    }
    getSalary(){
        cy.get(this.editSalaryField).invoke('val').then((value)=>{
            inputSalary = String(value);
            cy.log(`Input Value; ${inputSalary}`);
            expect(inputSalary).to.eq('10000')
        })
    }
    editSalarySecondTime(){
         cy.then(()=>{
             cy.get(this.editSalaryField).clear().type(inputSalary)
         })
    }
    getDepartment(){
         cy.get(this.editDepartmentField).invoke('val').then((value)=>{
             inputDep = String(value);
             cy.log(`Input Value: ${inputDep}`);
             expect(inputDep).to.eq('Insurance')
         })
    }
    editDepartmentSecondTIme(){
         cy.then(()=>{
             cy.get(this.editDepartmentField).clear().type(inputDep)
         })
    }
    getSecondFirstName() {
        cy.get(this.editFirstNameField)
            .invoke('val')
            .then((value) => {

                inputValue = String(value);


                cy.log(`Input value: ${inputValue}`); // Output: Cierra


                expect(inputValue).to.equal('Alden');
            });

    }
    getSecondLastName(){
        cy.get(this.editLastNameField)
            .invoke('val')
            .then((value)=>{
                inputLastName = String(value);
                cy.log(`Input Value: ${inputLastName}`);
                expect(inputLastName).to.eq('Cantrell')
            });
    }
    getSecondEmail(){
        cy.get(this.editEmailField)
            .invoke('val')
            .then((value)=>{
                inputEmail = String(value);
                cy.log(`Input Value: ${inputEmail}`);
                expect(inputEmail).to.eq('alden@example.com')
            })
    }
    getSecondAge(){
        cy.get(this.editAgeField).invoke('val').then((value)=>{
            inputAge = String(value);
            cy.log(`Input Value; ${inputAge}`);
            expect(inputAge).to.eq('45')
        })
    }
    getSecondSalary(){
        cy.get(this.editSalaryField).invoke('val').then((value)=>{
            inputSalary = String(value);
            cy.log(`Input Value; ${inputSalary}`);
            expect(inputSalary).to.eq('12000')
        })
    }
    getSecondDepartment(){
        cy.get(this.editDepartmentField).invoke('val').then((value)=>{
            inputDep = String(value);
            cy.log(`Input Value: ${inputDep}`);
            expect(inputDep).to.eq('Compliance')
        })
    }
    getThirdFirstName() {
        cy.get(this.editFirstNameField)
            .invoke('val')
            .then((value) => {

                inputValue = String(value);


                cy.log(`Input value: ${inputValue}`); // Output: Cierra


                expect(inputValue).to.equal('Kierra');
            });

    }
    getThirdLastName(){
        cy.get(this.editLastNameField)
            .invoke('val')
            .then((value)=>{
                inputLastName = String(value);
                cy.log(`Input Value: ${inputLastName}`);
                expect(inputLastName).to.eq('Gentry')
            });
    }
    getThirdEmail(){
        cy.get(this.editEmailField)
            .invoke('val')
            .then((value)=>{
                inputEmail = String(value);
                cy.log(`Input Value: ${inputEmail}`);
                expect(inputEmail).to.eq('kierra@example.com')
            })
    }
    getThirdAge(){
        cy.get(this.editAgeField).invoke('val').then((value)=>{
            inputAge = String(value);
            cy.log(`Input Value; ${inputAge}`);
            expect(inputAge).to.eq('29')
        })
    }
    getThirdSalary(){
        cy.get(this.editSalaryField).invoke('val').then((value)=>{
            inputSalary = String(value);
            cy.log(`Input Value; ${inputSalary}`);
            expect(inputSalary).to.eq('2000')
        })
    }
    getThirdDepartment(){
        cy.get(this.editDepartmentField).invoke('val').then((value)=>{
            inputDep = String(value);
            cy.log(`Input Value: ${inputDep}`);
            expect(inputDep).to.eq('Legal')
        })
    }
}
