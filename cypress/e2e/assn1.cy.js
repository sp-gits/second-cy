
//  Assignment 1: Login Form Locators Test using CSS Selectors
describe('Test using CSS Selectors', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.saucedemo.com')

    cy.get('input[data-test="username"]').type('standard_user')
    cy.get('input[data-test="password"]').type('secret_sauce')
    cy.get('input[data-test="login-button"]').click()
    //assert
    cy.url().should('include', '/inventory.html')
  })
})

// Login Form Locators Test using xpath

describe('Login Test using xpath', () => {
  it('xpath, types and asserts', () => {
    cy.visit('https://www.saucedemo.com')

    cy.xpath('//input[@data-test="username"]').type('standard_user')
    cy.xpath('//input[@data-test="password"]').type('secret_sauce')
    cy.xpath('//input[@data-test="login-button"]').click()
    //assert
    cy.url().should('include', '/inventory.html')
  })
})