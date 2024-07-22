/*describe('Http request', ()=>{
    it('Get Call', () =>{
        cy.request('GET', 'https://demoqa.com/')
            .its('status').should('equal', 200)
    })
})*/
cy.request({
    url: urlHttp,
    followRedirect: false, // turn off following redirects
}).then((resp) => {
    // redirect status code is 301
    expect(resp.status).to.eq(301)
    expect(resp.redirectedToUrl).to.eq(baseUrlTesla)
})