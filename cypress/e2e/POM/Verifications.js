const words = ['desktop', 'home', 'notes', 'commands', 'documents', 'workspace',
    'react', 'angular', 'veu', 'office', 'public', 'private',
    'classified', 'general', 'downloads', 'wordFile', 'excelFile'];
const threeWords = ['desktop', 'commands', 'notes']
const fourWords = ['workspace', 'react', 'angular', 'veu']
const fiveWords = ['office', 'public','private', 'classified','general']
const three_words = ['downloads', 'wordFile','excelFile']

export default class Verifications {



    verifyYes = 'label[for="yesRadio"]'
    successText = 'span.text-success'
    verifyImpressive = 'label[for="impressiveRadio"]'
    webTableTitle = '[class="text-center"]'
    table = '[class="rt-table"]'
    tableHeader = '.rt-resizable-header-content'
    selectRows = 'select[aria-label="rows per page"]'
    title = '[class="text-center"]'
    doubleClickMeButton = '[id="doubleClickBtn"]'
    rightClickMeButton = '[id="rightClickBtn"]'
    Button = 'button'
    clickMeText = 'Click Me'
    doubleClickSuccessMessage = '[id="doubleClickMessage"]'
    rightClickSuccessMessage = '[id="rightClickMessage"]'
    clickMeSuccessMessage = '[id="dynamicClickMessage"]'
    emailField = '[id="userEmail"]'
    haveCSS = 'have.css'
    position = 'border-color'
    color = 'rgb(255, 0, 0)'
    SuccessMessage = '[class="text-success"]'
    subTitle = 'h5 strong'
    textOne = 'Following links will open new tab'
    textTwo = 'Following links will send an api call'

    verifyFirstSubTitleVisibility() {
        cy.contains(this.subTitle,this.textOne).should('be.visible');
    }
    verifySecondSubTitleVisibility(){
        cy.contains(this.subTitle,this.textTwo).should('be.visible')
    }
    verifyThreeSuccessMessage() {
        threeWords.forEach(three => {
            cy.get(this.SuccessMessage).should('include.text', three).should('exist');
        });
    }
    verifyFourSuccessMessage() {
        fourWords.forEach(three => {
            cy.get(this.SuccessMessage).should('include.text', three).should('exist');
        });
    }
    verifyFiveSuccessMessage() {
        fiveWords.forEach(three => {
            cy.get(this.SuccessMessage).should('include.text', three).should('exist');
        });
    }
    verifyThreeWordsSuccessMessage() {
        three_words.forEach(three => {
            cy.get(this.SuccessMessage).should('include.text', three).should('exist');
        });
    }
    VerifySuccessMessage(){
        words.forEach(word => {
            cy.get(this.SuccessMessage).should('include.text', word).should('exist');
        });
    }
    VerifyEachFolderSuccessMessage(string){
        cy.get(this.SuccessMessage).contains(string);
    }
    selectionYesVerification(){
        cy.get(this.verifyYes).invoke('text').then((labelText) => {
            cy.get(this.successText).should('have.text', labelText);
        });
    }
    selectionImpressiveVerification(){
        cy.get(this.verifyImpressive).invoke('text').then((labelText) => {
            cy.get(this.successText).should('have.text', labelText);
        });
    }
    No = 'input#noRadio'
    NoRadioButtonDisabled() {
        cy.get(this.No).should('exist');
    }
    webPageTitleVisibility(){
        cy.get(this.webTableTitle).should('be.visible');
    }
    tableVisibility() {
        cy.get(this.table).should('be.visible');
    }
    verifyFiveRowsVisibility(){
        cy.get(this.selectRows).should('have.value', '5');
    }
    verifyTenRowsVisibility(){
        cy.get(this.selectRows).should('have.value', '10');
    }
    verifyFiftyRowsVisibility(){
        cy.get(this.selectRows).should('have.value', '50');
    }
    verifyHundredRowsVisibility(){
        cy.get(this.selectRows).should('have.value', '100');
    }
    verifyColumnFirstName () {
        cy.get(this.tableHeader)
            .should('contain.text', 'First Name');
    }
    verifyColumnLastName () {
        cy.get(this.tableHeader)
            .should('contain.text', 'Last Name');

    }
    verifyColumnAge () {
        cy.get(this.tableHeader)
            .should('contain.text', 'Age');
    }
    verifyColumnEmail () {
        cy.get(this.tableHeader)
            .should('contain.text', 'Email');

    }
    verifyColumnSalary () {
        cy.get(this.tableHeader)
            .should('contain.text', 'Salary');

    }
    verifyColumnDepartment () {
        cy.get(this.tableHeader)
            .should('contain.text', 'Department');

    }
    checkButtonsTitleVisibility(){
        cy.get(this.title).should('be.visible')
    }
    checkDoubleClickMeButtonVisibility() {
        cy.get(this.doubleClickMeButton).should('be.visible')
    }
    checkRightClickMeButtonVisibility(){
        cy.get(this.rightClickMeButton).should('be.visible')
    }
    checkClickMeButtonVisibility() {
        cy.contains(this.Button, this.clickMeText).should('be.visible');
    }
    doubleClickSuccessMessageVisibility(){
        cy.get(this.doubleClickSuccessMessage).should('be.visible')
    }
    rightClickSuccessMessageVisibility(){
        cy.get(this.rightClickSuccessMessage).should('be.visible')
    }
    clickMeSuccessMessageVisiblity(){
        cy.get(this.clickMeSuccessMessage).should('be.visible')
    }
    errorFieldVerification() {
        cy.get(this.emailField).should(this.haveCSS, this.position, this.color);
    }

}
