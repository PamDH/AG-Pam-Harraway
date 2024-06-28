import ContactPage from "../page_objects/contact.page.js"; 

let user

describe('Complete Contact Us Form - Positive Test', () => {
    before(() => {
        cy.fixture("testData/userInfo.json").then((data) => {
            user = data;
        })
    })

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should Redirect to Contact Us web page', () => {
        ContactPage.contactLink.click();
        cy.contains("We'd love to work with you");
        cy.url().should('include', 'contact.html');
    })

    it('Should Scroll Down to Contact Us Section', () => {
        ContactPage.contactLink.click();
        ContactPage.letsTalkButton.click();
        cy.contains('Send us a message');
    })

    it('Should populate Contact Info fields', () => {
        ContactPage.contactLink.click();
        ContactPage.enterContactInfo(user.company, user.firstName, user.lastName, user.phone, user.email);
        // We are not submitting the form in this test to avoid creating numerous sets of test data in the system.
        // Instead, we verify that the form fields can be visible.
    })
})