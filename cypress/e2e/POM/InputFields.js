import {faker} from "@faker-js/faker";

let username = faker.internet.userName();
let email = faker.internet.email();

export default class inputFields {

    fullName = '[id="userName"]'
    emailField = '[id="userEmail"]'
    currentAddressField = '[id="currentAddress"]'
    permanentAddress = '[id="permanentAddress"]'


    typeFullName(){
        cy.get(this.fullName).type(username)
    }
    typeCorrectEmail(){
        cy.get(this.emailField).type(email)
    }
    typeIncorrectEmail() {
        cy.get(this.emailField).type('buya@')
    }
    typeCurrentAddress(){
        cy.get(this.currentAddressField).type('davtashen')
    }
    typePermanentAddress () {
        cy.get(this.permanentAddress).type('huawei')
    }
    fullNameVerification() {
        cy.get('#name.mb-1').invoke('text')
            .then((text) => {
                const actualText = text
                    .replace('Name:', '')
                    .trim();
                expect(actualText).to.be.eq(username)
            });
    }
    emailVerification(){
            cy.get('#email.mb-1').invoke('text')
                .then((text) => {
                    const actualText = text
                        .replace('Email:', '')
                        .trim();
                    expect(actualText).to.be.eq(email)
                });
    }
    currentAddressVerification(){
        cy.get('#currentAddress.mb-1').invoke('text')
            .then((text) => {
                const actualText = text
                    .replace('Current Address :', '')
                    .trim();
                expect(actualText).to.be.eq('davtashen')
            });
    }
    permanentAddressVerification(){
        cy.get('#permanentAddress.mb-1').invoke('text')
            .then((text) => {
                const actualText = text
                    .replace('Permananet Address :', '')
                    .trim();
                expect(actualText).to.be.eq('huawei')
            });
    }
}