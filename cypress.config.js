const {defineConfig} = require("cypress")

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://reqres.in/api',
        specPattern: 'cypress/support/e2e',
        supportFile: false,
    },

    env:{
        name: 'al',
        job: 'web developer',
        email: 'eve.holt@reqres.in',
        password: 'pistol',
        }
        
    }
)