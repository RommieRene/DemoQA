export default class CheckBox {
    checkBox = '[class="rct-checkbox"]'
    titleToggle = '[title="Toggle"]'
    checkBoxButton = '[class="rct-checkbox"]'
    expandAll= '[title="Expand all"]'
    collapseAll= '[title="Collapse all"]'

    expandAllFolders(){
        cy.get(this.expandAll).click();
    }
    collapseAllFolders(){
        cy.get(this.collapseAll).click()
    }
    clickOnCheckBoxButton(){
        cy.get(this.checkBoxButton).eq(0).click();
    }
    clickFirstTitleToggle() {
        cy.get(this.titleToggle).first().click();
    }
    clickSecondTitleToggle() {
        cy.get(this.titleToggle).eq(1).click();
    }
    clickThirdTitleToggle() {
        cy.get(this.titleToggle).eq(2).click();
    }
    clickFourthTitleToggle() {
        cy.get(this.titleToggle).eq(3).click();
    }
    clickFifthTitleToggle() {
        cy.get(this.titleToggle).eq(4).click();
    }
    clickSixthTitleToggle() {
        cy.get(this.titleToggle).eq(5).click();
    }
    clickDesktopFolder() {
        cy.get(this.checkBox).eq(1).click();
    }
    clickNotesFolder() {
        cy.get(this.checkBox).eq(2).click();
    }
    clickCommandsFolder() {
        cy.get(this.checkBox).eq(3).click();
    }

    clickWorkSpaceFolder() {
        cy.get(this.checkBox).eq(5).click();
    }
    clickReactFolder() {
        cy.get(this.checkBox).eq(6).click();
    }
    clickAngularFolder() {
        cy.get(this.checkBox).eq(7).click();
    }
    clickVeuFolder() {
        cy.get(this.checkBox).eq(8).click();
    }
    clickOfficeFolder() {
        cy.get(this.checkBox).eq(9).click();
    }
    clickPublicFolder() {
        cy.get(this.checkBox).eq(10).click();
    }
    clickPrivateFolder() {
        cy.get(this.checkBox).eq(11).click();
    }
    clickClassifiedFolder() {
        cy.get(this.checkBox).eq(12).click();
    }
    clickGeneralFolder() {
        cy.get(this.checkBox).eq(13).click();
    }
    clickDownloadsFolder() {
        cy.get(this.checkBox).eq(14).click();
    }
    clickWordFileDoc() {
        cy.get(this.checkBox).eq(15).click();
    }
    clickExcelFileDoc() {
        cy.get(this.checkBox).eq(16).click();
    }
}