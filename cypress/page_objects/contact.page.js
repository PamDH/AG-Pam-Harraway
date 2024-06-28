class ContactPage {
    get companyInput() { return cy.get('input[name="company"]')};
    get firstNameInput() { return cy.get('input[name="firstName"]') };
    get lastNameInput() { return cy.get('input[name="lastName"]')};
    get phoneInput() { return cy.get('input[name="phone"]') };
    get emailInput() { return cy.get('input[name="email"]') };
    get contactLink() { return cy.get('.nav-link[href="contact.html"]') };
    get letsTalkButton() { return cy.contains('.jg-btn-contact', "Let's Talk") };
    get contactButton() { return cy.get('[type="submit"]') };
    get invalidEmail() { return cy.get('#emailInput:invalid') };
 
    enterContactInfo(company, firstName, lastName, phone, email) {
        this.companyInput.type(company).should('be.visible');
        this.firstNameInput.type(firstName).should('be.visible');
        this.lastNameInput.type(lastName).should('be.visible');
        this.phoneInput.type(phone).should('be.visible');
        this.emailInput.type(email).should('be.visible');
    }

    checkEmailValidationMessage(expectedMessage) {
        this.invalidEmail.invoke('prop', 'validationMessage').should('equal', expectedMessage);
    }
}
export default new ContactPage();