const fixtureData = require('../../fixtures/fixtureData')

beforeEach('Intercepting responses',() => {
  cy 
    .intercept({
          method: 'GET',
          url: '/'
      })
      .as('GETcall')
  cy 
    .intercept({
          method: 'POST',
           url: Cypress.env('POSTUrl')
      })
      .as('POSTcall')   

})
describe('TC1_Positive_User_Login_A',() => {

  it('Printing to console Cypress.env', () => {

    console.log('Printing Cypress variables:')
    console.table(Cypress.env())
    console.log('Printing Fixture variables:')
    console.table(fixtureData)

 cy
   .visit('/')
 
 cy
   .wait('@GETcall').then(resp =>{
     expect(resp.response.statusCode).to.eq(fixtureData.expectedStatusCodeGET)
    })   
  })
})

describe('English language', () => {

  it('Loging in User (valid email && password)',() => {
    cy
      .visit(`/${fixtureData.language.en}`)

    cy
      .wait('@POSTcall').then(resp =>{
        expect(resp.response.statusCode).to.eq(fixtureData.expectedStatusCodePOST)
      })

    cy
      .get('[class="css-1rqqzcq"] [data-test="HeaderNav-login-link"]')
      .should('be.visible')
      .as('loginButton')

    cy
      .get('@loginButton')
      .click()    
       
    cy
      .get('[class="css-0"] [data-test="Login-email-input"]')
      .should('be.visible')
      .as('emailInput')

    cy
      .get('[class="css-0"] [data-test="Login-password-input"]')
      .should('be.visible')
      .as('passwordInput')

    cy
      .get('[class="css-14vxn7k"] [class="chakra-button css-1fjuk23"]')
      .should('be.visible')
      .as('submitButton')

    cy 
      .get('@emailInput')
      .type(fixtureData.emailUser)

    cy 
      .get('@passwordInput')
      .type(fixtureData.password)

    cy 
      .get('@submitButton')
      .click() 
          
    cy
      .get('[class="HeaderNav css-aj5w2r"]')
      .should('have.css', 'color', `${fixtureData.backgroundColorUser}`) 
     
    cy
      .get('[class="css-192qrng"] [data-test="HeaderNav-account"] [class="css-70qvj9"]') 
      .should('be.visible')

    cy
      .get('[data-test="HeaderNav-chat-icon"] [class="css-79elbk"]') 
      .should('be.visible')

    cy
      .get('[class="css-1rqqzcq"]') 
      .should('be.visible')
        
  })
})

describe('Czech language', () => {

  it('Loging in User (valid email && password)',() => {
    cy
      .visit(`/${fixtureData.language.cs}`)

    cy
      .wait('@POSTcall').then(resp =>{
        expect(resp.response.statusCode).to.eq(fixtureData.expectedStatusCodePOST)
      })

    cy
      .get('[class="css-1rqqzcq"] [data-test="HeaderNav-login-link"]')
      .should('be.visible')
      .as('loginButton')

    cy
      .get('@loginButton')
      .click()    
       
    cy
      .get('[class="css-0"] [data-test="Login-email-input"]')
      .should('be.visible')
      .as('emailInput')

    cy
      .get('[class="css-0"] [data-test="Login-password-input"]')
      .should('be.visible')
      .as('passwordInput')

    cy
      .get('[class="css-14vxn7k"] [class="chakra-button css-1fjuk23"]')
      .should('be.visible')
      .as('submitButton')

    cy 
      .get('@emailInput')
      .type(fixtureData.emailUser)

    cy 
      .get('@passwordInput')
      .type(fixtureData.password)

    cy 
      .get('@submitButton')
      .click() 
          
    cy
      .get('[class="HeaderNav css-aj5w2r"]')
      .should('have.css', 'color', `${fixtureData.backgroundColorUser}`) 
     
    cy
      .get('[class="css-192qrng"] [data-test="HeaderNav-account"] [class="css-70qvj9"]') 
      .should('be.visible')

    cy
      .get('[data-test="HeaderNav-chat-icon"] [class="css-79elbk"]') 
      .should('be.visible')

    cy
      .get('[class="css-1rqqzcq"]') 
      .should('be.visible')
        
  })
})

describe('Slovak language', () => {

  it('Loging in User (valid email && password)',() => {
    cy
      .visit(`/${fixtureData.language.sk}`)

    cy
      .wait('@POSTcall').then(resp =>{
        expect(resp.response.statusCode).to.eq(fixtureData.expectedStatusCodePOST)
      })

    cy
      .get('[class="css-1rqqzcq"] [data-test="HeaderNav-login-link"]')
      .should('be.visible')
      .as('loginButton')

    cy
      .get('@loginButton')
      .click()    
       
    cy
      .get('[class="css-0"] [data-test="Login-email-input"]')
      .should('be.visible')
      .as('emailInput')

    cy
      .get('[class="css-0"] [data-test="Login-password-input"]')
      .should('be.visible')
      .as('passwordInput')

    cy
      .get('[class="css-14vxn7k"] [class="chakra-button css-1fjuk23"]')
      .should('be.visible')
      .as('submitButton')

    cy 
      .get('@emailInput')
      .type(fixtureData.emailUser)

    cy 
      .get('@passwordInput')
      .type(fixtureData.password)

    cy 
      .get('@submitButton')
      .click() 
          
    cy
      .get('[class="HeaderNav css-aj5w2r"]')
      .should('have.css', 'color', `${fixtureData.backgroundColorUser}`) 
     
    cy
      .get('[class="css-192qrng"] [data-test="HeaderNav-account"] [class="css-70qvj9"]') 
      .should('be.visible')

    cy
      .get('[data-test="HeaderNav-chat-icon"] [class="css-79elbk"]') 
      .should('be.visible')

    cy
      .get('[class="css-1rqqzcq"]') 
      .should('be.visible')
        
  })
})