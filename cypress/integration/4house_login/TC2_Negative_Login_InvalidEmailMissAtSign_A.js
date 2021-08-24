
//const fixtureData2 = require(`${Cypress.env('fixturesPath')}`)
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
describe('TC2_Negative_Login_InvalidEmailMissAtSign_A',() => {

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

  it('Loging in User (Wrong Email without "@")',() => {
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
      .type(fixtureData.invalidEmailMissAtSign)

    cy 
      .get('@passwordInput')
      .type(fixtureData.password)

    cy 
      .get('@submitButton')
      .click() 
      
    cy
      .get('[class="chakra-input css-e63ue2"]')
      .invoke('prop', 'validationMessage').then(resp => {
        expect(resp).to.eq(`${fixtureData.validationMessage.part1EN} ${fixtureData.invalidEmailMissAtSign} ${fixtureData.validationMessage.part2EN}`)
      })     
  })
})

describe('Czech language', () => {

  it('Loging in User (Wrong Email without "@")',() => {
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
      .type(fixtureData.invalidEmailMissAtSign)

    cy 
      .get('@passwordInput')
      .type(fixtureData.password)

    cy 
      .get('@submitButton')
      .click() 
      
    cy
      .get('[class="chakra-input css-e63ue2"]')
      .invoke('prop', 'validationMessage').then(resp => {
        expect(resp).to.eq(`${fixtureData.validationMessage.part1CS} ${fixtureData.invalidEmailMissAtSign} ${fixtureData.validationMessage.part2CS}`)
      })  
   })
})

describe('Slovak language', () => {

      it('Loging in User (Wrong Email without "@")',() => {
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
          .type(fixtureData.invalidEmailMissAtSign)

        cy 
          .get('@passwordInput')
          .type(fixtureData.password)

        cy 
          .get('@submitButton')
          .click() 
          
        cy
          .get('[class="chakra-input css-e63ue2"]')
          .invoke('prop', 'validationMessage').then(resp => {
            expect(resp).to.eq(`${fixtureData.validationMessage.part1SK} ${fixtureData.invalidEmailMissAtSign} ${fixtureData.validationMessage.part2SK}`)
          })     
     })
  })
