import NavigationPage from "../page_objects/navigation.page.js"; 

describe('Company Menu Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should Redirect to Team web page', () => {
        NavigationPage.footerTeamLink.click();
        cy.contains('MEET THE TEAM');
        cy.url().should('include', 'team.html');
    })

    it('Should Redirect to Culture web page', () => {
        NavigationPage.footerCultureLink.click();
        cy.contains('Can you still call it work');
        cy.url().should('include', 'culture.html');
    })

    it('Should Redirect to Careers web page', () => {
        NavigationPage.footerCareersLink.click();
        cy.contains('Our Mission Statement');
        cy.url().should('include', 'careers.html');
    })

    it('Should Redirect to Recruiting Services web page', () => {
        NavigationPage.footerRecruitingLink.click();
        cy.contains('Book your free consultation');
        cy.url().should('include', 'recruiting-services.html');
    })

    it('Should Redirect to Site Map web page', () => {
        NavigationPage.footerSiteMapLink.click();
        cy.contains('Use the links below to explore this website');
        cy.url().should('include', 'site-map.html');
    })
})