Cypress.Commands.add('post', (method, url, body) => {
    cy.request(method, url, body)
            .then(postResponse => {
                expect(postResponse.status).to.eq(200);
                expect(postResponse.body).to.eql({
                    "code": 200,
                    "type": "unknown",
                    "message": "ok"
                })
            })
})

Cypress.Commands.add('put', (method, url, body) => {
    cy.request(method, url, body)
            .then(putResponse => {
                expect(putResponse.status).to.eq(200);
                expect(putResponse.body.type).to.eq("unknown");
            })
})

Cypress.Commands.add('delete', (method, url) => {
    cy.request(method, url)
    .then(deleteResponse => {
        expect(deleteResponse.status).to.eq(200);
    })
})

Cypress.Commands.add('notfound', (url) => {
    cy.request({
        failOnStatusCode: false,
        url
    }).then((getResponse) => {
        expect(getResponse.status).eq(404);
    })
})