import ContactPage from "../page_objects/contact.page.js"; 

let user, error

describe('Complete Contact Us Form - Negative Test', () => {
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

    it('Should not submit form with blank email', () => {
        ContactPage.contactLink.click();
        ContactPage.enterContactInfo(user.company, user.firstName, user.lastName, user.phone, ' ');
        ContactPage.contactButton.click();
        ContactPage.checkEmailValidationMessage(error.fillOutThisField);
    })

    it('Should not submit form with invalid email', () => {
        ContactPage.contactLink.click();
        ContactPage.enterContactInfo(user.company, user.firstName, user.lastName, user.phone, user.invalidEmail);
        ContactPage.contactButton.click();
        ContactPage.checkEmailValidationMessage(error.incompletePart);
    })
})