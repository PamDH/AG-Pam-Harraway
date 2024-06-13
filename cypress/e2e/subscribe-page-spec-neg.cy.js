import SubscribeInfoPage from "../page_objects/subscribe.info.page.js";

let user 
let error

describe('Complete Subscribe Form Negative Test Functionality', () => {
    before(() => {
        cy.fixture("testData/userInfo.json").then((data) => {
            user = data;
        })

        cy.fixture('testData/errorText.json').then((data) => {
            error = data;
        })
    })

    beforeEach(() => {
        cy.visit('https://insights.jahnelgroup.com/subscribe');
    })

    it('Should not submit Subscribe form without filling in credentials', () => {
        SubscribeInfoPage.submitButton.click();
        cy.contains(error.allRequiredFields);
    })

    it('Should not submit Subscribe form with invalid email', () => {
        SubscribeInfoPage.enterSubscribeInfo(user.invalidEmail, user.firstName, user.lastName,  user.company, user.city, user.state, user.phone);
        cy.contains(error.emailFormatting);    
    })

    it('Should not submit Subscribe form with blank first name', () => {
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.blankFirstName, user.lastName,  user.company, user.city, user.state, user.phone);
        cy.contains(error.thisRequiredField); 
    })    

    it('Should not submit Subscribe form with blank last name', () => {
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.firstName, user.blankLastName,  user.company, user.city, user.state, user.phone);
        cy.contains(error.thisRequiredField); 
    })    

    it('Should not submit Subscribe form with empty check box', () => {
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.firstName, user.lastName,  user.company, user.city, user.state, user.phone);
        SubscribeInfoPage.submitButton.click();
        cy.contains(error.thisRequiredField); 
    })    
})