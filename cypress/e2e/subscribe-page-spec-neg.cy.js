import NavigationPage from "../page_objects/navigation.page.js";
import SubscribeInfoPage from "../page_objects/subscribe.info.page.js";

let user, error

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
        cy.visit('/')
    })

    it('Should not submit Subscribe form without filling in credentials', () => {
        NavigationPage.footerSubscribeLink.should('be.visible').click(); 
        cy.contains('Stay informed');
        cy.url().should('include', 'insights.jahnelgroup.com/subscribe');
        SubscribeInfoPage.submitButton.click();
        cy.contains(error.allRequiredFields);
    })

    it('Should not submit Subscribe form with invalid email', () => {
        NavigationPage.footerSubscribeLink.should('be.visible').click(); 
        cy.url().should('include', 'insights.jahnelgroup.com/subscribe');
        SubscribeInfoPage.enterSubscribeInfo(user.invalidEmail, user.firstName, user.lastName,  user.company, user.city, user.state, user.phone);
        cy.contains(error.emailFormatting);    
    })

    it('Should not submit Subscribe form with blank first name', () => {
        NavigationPage.footerSubscribeLink.should('be.visible').click(); 
        cy.url().should('include', 'insights.jahnelgroup.com/subscribe');
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.blankFirstName, user.lastName,  user.company, user.city, user.state, user.phone);
        cy.contains(error.thisRequiredField); 
    })    

    it('Should not submit Subscribe form with blank last name', () => {
        NavigationPage.footerSubscribeLink.should('be.visible').click(); 
        cy.url().should('include', 'insights.jahnelgroup.com/subscribe');
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.firstName, user.blankLastName,  user.company, user.city, user.state, user.phone);
        cy.contains(error.thisRequiredField); 
    })    

    it('Should not submit Subscribe form with empty check box', () => {
        NavigationPage.footerSubscribeLink.should('be.visible').click(); 
        cy.url().should('include', 'insights.jahnelgroup.com/subscribe');
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.firstName, user.lastName,  user.company, user.city, user.state, user.phone);
        SubscribeInfoPage.submitButton.click();
        cy.contains(error.thisRequiredField); 
    })    
})
