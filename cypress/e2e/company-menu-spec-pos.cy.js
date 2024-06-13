import NavigationPage from "../page_objects/navigation.page.js"; 

describe('Company Menu Navigation Functionality', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should Redirect to Team web page', () => {
        NavigationPage.footerTeamLink.click();
        cy.contains('MEET THE TEAM');
    })

    it('Should Redirect to Culture web page', () => {
        NavigationPage.footerCultureLink.click();
        cy.contains('Can you still call it work');
    })

    it('Should Redirect to Careers web page', () => {
        NavigationPage.footerCareersLink.click();
        cy.contains('Our Mission Statement');
    })

    it('Should Redirect to Recruiting Services web page', () => {
        NavigationPage.footerRecruitingLink.click();
        cy.contains('Book your free consultation');
    })

    it('Should Redirect to Site Map web page', () => {
        NavigationPage.footerSiteMapLink.click();
        cy.contains('Use the links below to explore this website');
    })
})