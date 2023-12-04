const {defineConfig} = require("cypress")

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://reqres.in/api',
        specPattern: 'cypress/support/e2e',
        supportFile: false
    }
})