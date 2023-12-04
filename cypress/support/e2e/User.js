

describe('Reqres.in User', () => {
    
    it('GET all of users', () => {
        let pageNo = 2;
        cy.request('GET', `/users?page=${pageNo}`).as('getUsers')
        cy.get('@getUsers').then(users =>{
            expect(users.status).to.equal(200)
            expect(users.body).to.haveOwnProperty('data')
        })
    });

    it('GET single user', () => {
        let userId = 2;
        cy.request('GET', `/users/${userId}`).as('getUser')
        cy.get('@getUser').then(user =>{
            expect(user.status).to.equal(200)
            expect(user.body).to.haveOwnProperty('data')
            
          if (expect(user.body.data.id).to.equal(userId)) {
            cy.log('user id is equal')
          }else{
            cy.log('user id not equal')
          }  
        })
    });

    it('CREATE single user', () => {
        let userData = {
            "name": Cypress.env('name'),
            "job": Cypress.env('job'),
        }
        cy.log('Dataset : ')
        cy.log('name: '+ userData.name)
        cy.log('job: ' + userData.job)
        cy.request('POST', `/users`, userData).as('postUser')
        cy.get('@postUser').
        then(user =>{
            expect(user.status).to.equal(201)
            expect(user.body).to.haveOwnProperty('createdAt')
            expect(user.body.name).to.equal(userData.name)
            expect(user.body.job).to.equal(userData.job)
        })
    });

    
    
});
