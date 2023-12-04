describe('E2E Reqres.in', () => {
    let registerData = {
        "email": Cypress.env('email'),
        "password": Cypress.env('password'),
    }

    it('Register', () => {
        
        cy.log('Dataset : ')
        cy.log('email: '+ registerData.email)
        cy.log('password: ' + registerData.password)
        cy.request('POST', `/register`, registerData).as('registerUser')
        cy.get('@registerUser').
        then(user =>{
            expect(user.status).to.equal(200)
            expect(user.body).to.haveOwnProperty('token')
        })
    });

    it('Login', () => {
        cy.log('Dataset : ')
        cy.log('email: '+ registerData.email)
        cy.log('password: ' + registerData.password)
        cy.request('POST', `/login`, registerData).as('loginUser')
        cy.get('@loginUser').
        then(user =>{
            expect(user.status).to.equal(200)
            expect(user.body).to.haveOwnProperty('token')
        })
    });
    
    it('GET list of all resources', () => {
        cy.request('/unknown').as('getResourceList')
        cy.get('@getResourceList').then(resources => {
            expect(resources.status).to.equal(200)
        })
    });
    
    it('GET list of single resource', () => {
        const resourceId = 2
        cy.request(`/unknown/${resourceId}`).as('getResource')
        cy.get('@getResource').then(resources => {
            expect(resources.status).to.equal(200)
        })
    });
});
