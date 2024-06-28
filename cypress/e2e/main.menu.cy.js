import NavigationPage from "../page_objects/navigation.page.js"; 

describe('Main Menu Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should open Home page', () => {
        cy.contains('World Class Software Creators');
    })

    it('Should Redirect to Process web page', () => {
        NavigationPage.footerProcessLink.click();
        cy.contains("Let's Take Your Software to the Next Level");
        cy.url().should('include', 'process.html');
    })

    it('Should Redirect to Services web page', () => {
        NavigationPage.footerServicesLink.click();
        cy.contains('We build Solutions around you');
        cy.url().should('include', 'services.html');
    })

    it('Should Redirect to Clients web page', () => {
        NavigationPage.footerClientsLink.click();
        cy.contains('We have been Lucky');
        cy.url().should('include', 'clients.html');
    })

    it('Should Redirect to Contact Us web page', () => {
        NavigationPage.footerContactLink.click();
        cy.contains("We'd love to work with you");
        cy.url().should('include', 'contact.html');
    })
})