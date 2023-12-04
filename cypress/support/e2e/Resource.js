describe('Reqres.in Resources', () => {
    


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
