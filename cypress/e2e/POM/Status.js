export default class Status{


    createdButton = '[id="created"]'
    statusMessage = '[id="linkResponse"]'
    noContentButton = '[id="no-content"]'
    movedButton = '[id="moved"]'
    badRequestButton = '[id="bad-request"]'
    unauthorizedButton = '[id="unauthorized"]'
    forbiddenButton = '[id="forbidden"]'
    invalidUrlButton = '[id="invalid-url"]'

    verifyCreatedStatus(){
        cy.request({
            url: 'https://demoqa.com/created',
            method: 'GET',
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.visit('https://demoqa.com/links');
            cy.get(this.createdButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '201');
                cy.get('b').last().should('contain', 'Created');
            });
        });
    }
    verifyNoContentStatus(){
        cy.request({
            url: 'https://demoqa.com/no-content',
            method: 'GET',
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(204);
            cy.visit('https://demoqa.com/links');
            cy.get(this.noContentButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '204');
                cy.get('b').last().should('contain', 'No Content');
            });
        });
    }
    verifyMovedStatus(){

        cy.request({
            url: 'https://demoqa.com/moved',
            method: 'GET',
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(301);
            cy.visit('https://demoqa.com/links');
            cy.get(this.movedButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '301');
                cy.get('b').last().should('contain', 'Moved Permanently');
            });
        });
    }
    verifyBadRequestStatus(){
        cy.get('[id="bad-request"]').click();
        cy.request({
            url: 'https://demoqa.com/bad-request',
            method: 'GET',
            failOnStatusCode: false,
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            cy.visit('https://demoqa.com/links');
            cy.get(this.badRequestButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '400');
                cy.get('b').last().should('contain', 'Bad Request');
            });
        });
    }
    verifyUnauthorizedStatus(){
        cy.request({
            url: 'https://demoqa.com/unauthorized',
            method: 'GET',
            failOnStatusCode: false,
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(401);
            cy.visit('https://demoqa.com/links');
            cy.get(this.unauthorizedButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '401');
                cy.get('b').last().should('contain', 'Unauthorized');
            });
        });
    }
    verifyForbiddenStatus(){
        cy.request({
            url: 'https://demoqa.com/forbidden',
            method: 'GET',
            failOnStatusCode: false,
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            cy.visit('https://demoqa.com/links');
            cy.get(this.forbiddenButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '403');
                cy.get('b').last().should('contain', 'Forbidden');
            });
        });
    }
    verifyNotFoundStatus(){
        cy.request({
            url: 'https://demoqa.com/invalid-url',
            method: 'GET',
            failOnStatusCode: false,
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.visit('https://demoqa.com/links');
            cy.get(this.invalidUrlButton).click();
            cy.get(this.statusMessage).within(() => {
                cy.get('b').first().should('contain', '404');
                cy.get('b').last().should('contain', 'Not Found');
            });
        });
    }


}