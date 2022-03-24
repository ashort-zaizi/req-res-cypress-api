/// <reference types="cypress" />

import { Given, When, Then, And  } from "cypress-cucumber-preprocessor/steps";

let apiEndPoint;
let response;

Given('I have the GET users end point', () => {
    apiEndPoint = Cypress.env('reqresUrl') + 'api/users?page=2';
    cy.log(apiEndPoint)
})

When('I send a GET users request', () => {
    cy.request({
        method: 'GET',
        url: apiEndPoint
    }).then((resp) => {
        response = resp;
    })
})

Then('response status code equals 200', () => {
    expect(response.status).to.eq(200);
})

And('response body contains all users', () => {
    cy.log(response.body.data[1].email)
    // Expect the respoinse body to contain more than 5 users
    cy.log(response.body.data.length)
    expect(response.body.data.length).to.be.greaterThan(1);

})