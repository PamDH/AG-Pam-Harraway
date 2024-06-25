class ContactPage {
    get companyInput() { return cy.get('input[name="company"]')};
    get firstNameInput() { return cy.get('input[name="firstName"]') };
    get lastNameInput() { return cy.get('input[name="lastName"]')};
    get phoneInput() { return cy.get('input[name="phone"]') };
    get emailInput() { return cy.get('input[name="email"]') };
    get checkForBlankEmail() { return cy.get('#emailInput:invalid').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.') };
    get checkForInvalidEmail() { return cy.get('#emailInput:invalid').invoke('prop', 'validationMessage').should('equal', "Please enter a part following '@'. '1@' is incomplete.") };
    get contactLink() { return cy.get('.nav-link[href="contact.html"]') };
    get letsTalkButton() { return cy.contains('.jg-btn-contact', "Let's Talk") };
    get contactButton() { return cy.get('[type="submit"]') };
 
    enterContactInfo(company, firstName, lastName, phone, email) {
        this.companyInput.type(company).should('be.visible');
        this.firstNameInput.type(firstName).should('be.visible');
        this.lastNameInput.type(lastName).should('be.visible');
        this.phoneInput.type(phone).should('be.visible');
        this.emailInput.type(email).should('be.visible');
    }
}
export default new ContactPage();