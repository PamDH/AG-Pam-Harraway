class SubscribeInfoPage {
    get emailInput() { return cy.get('input[name="email"]') };
    get firstNameInput() { return cy.get('input[name="firstname"]') };
    get lastNameInput() { return cy.get('input[name="lastname"]')};
    get companyInput() { return cy.get('input[name="company"]')};
    get cityInput() { return cy.get('input[name="city"]')};
    get stateInput() { return cy.get('input[name="state"]')};
    get phoneInput() { return cy.get('input[name="phone"]') };
    get selectCheckBox() { return cy.get('input[type="checkbox"]') };
    get setCheckBox() { return cy.get('input[type="checkbox"]').should('be.checked')};
    get submitButton() { return cy.get('[type="submit"]') };

    enterSubscribeInfo(email, firstName, lastName, company, city, state, phone) {
        this.emailInput.type(email).should('be.visible');
        this.firstNameInput.type(firstName).should('be.visible');
        this.lastNameInput.type(lastName).should('be.visible');
        this.companyInput.type(company).should('be.visible');
        this.cityInput.type(city).should('be.visible');
        this.stateInput.type(state).should('be.visible');
        this.phoneInput.type(phone).should('be.visible');
    }
}

export default new SubscribeInfoPage();