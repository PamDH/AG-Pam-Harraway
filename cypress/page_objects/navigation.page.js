class NavigationPage {
    get footerProcessLink() { return cy.get('.jg-footer-link[href="process.html"]') };
    get footerServicesLink() { return cy.get('.jg-footer-link[href="services.html"]') };
    get footerClientsLink() { return cy.get('.jg-footer-link[href="clients.html"]') };
    get footerContactLink() { return cy.get('.jg-footer-link[href="contact.html"]') };
    get footerTeamLink() { return cy.get('.jg-footer-link[href="team.html"]') };
    get footerCultureLink() { return cy.get('.jg-footer-link[href="culture.html"]') };
    get footerCareersLink() { return cy.get('.jg-footer-link[href="careers.html"]') };
    get footerRecruitingLink() { return cy.get('.jg-footer-link[href="recruiting-services.html"]') };
    get footerSiteMapLink() { return cy.get('.jg-footer-link[href="site-map.html"]') };
    get footerPhotoGalleryLink() { return cy.get('.jg-footer-link[href="photos.html"]') };
    get footerVideoGalleryLink() { return cy.get('.jg-footer-link[href="videos.html"]') };
    get footerPressLink() { return cy.get('.jg-footer-link[href="https://insights.jahnelgroup.com/press"]') };
    get footerInsightsLink() { return cy.get('.jg-footer-link[href="https://insights.jahnelgroup.com"]') };
    get footerSubscribeLink() { return cy.get('.jg-footer-link[href="https://insights.jahnelgroup.com/subscribe"]').invoke('removeAttr', 'target') };
}
export default new NavigationPage();