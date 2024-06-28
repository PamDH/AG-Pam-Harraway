import NavigationPage from "../page_objects/navigation.page.js"; 

describe('Media Menu Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should Redirect to Photo Gallery web page', () => {
        NavigationPage.footerPhotoGalleryLink.click();
        cy.url().should('include', 'photos')
        cy.url().should('include', 'photos.html');
    })

    it('Should Redirect to Video Gallery web page', () => {
        NavigationPage.footerVideoGalleryLink.click();
        cy.contains('See for yourself');
        cy.url().should('include', 'videos.html');
    })

    it('Should Redirect to Press web page', () => {
        NavigationPage.footerPressLink.click();
        cy.contains('Steady and consistent pressure');
        cy.url().should('include', 'press');
    })

    it('Should Redirect to Insights web page', () => {
        NavigationPage.footerInsightsLink.click();
        cy.contains('Empower your development');
        cy.url().should('include', 'insights.jahnelgroup.com');
    })

    it('Should Redirect to Subscribe web page', () => {
        NavigationPage.footerSubscribeLink.click();
        cy.contains('Stay informed');
        cy.url().should('include', 'insights.jahnelgroup.com/subscribe');
    })
})