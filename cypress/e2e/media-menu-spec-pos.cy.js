import NavigationPage from "../page_objects/navigation.page.js"; 

describe('Media Menu Navigation Functionality', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should Redirect to Photo Gallery web page', () => {
        NavigationPage.footerPhotoGalleryLink.click();
        cy.url().should('include', 'photos')
    })

    it('Should Redirect to Video Gallery web page', () => {
        NavigationPage.footerVideoGalleryLink.click();
        cy.contains('See for yourself');
    })

    it('Should Redirect to Press web page', () => {
        NavigationPage.footerPressLink.click();
        cy.contains('Steady and consistent pressure');
    })

    it('Should Redirect to Insights web page', () => {
        NavigationPage.footerInsightsLink.click();
        cy.contains('Empower your development');
    })

    //it('Should Redirect to Subscribe web page - opens in a new window', () => {
        // NavigationPage.footerSubscribeLink.should('be.visible').click()
        // cy.contains('Stay informed');
    //})
})