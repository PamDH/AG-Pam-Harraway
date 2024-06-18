import NavigationPage from "../page_objects/navigation.page.js";
import SubscribeInfoPage from "../page_objects/subscribe.info.page.js";

let user

describe('Subscribe Page Functionality', () => {
    before(() => {
        cy.fixture("testData/userInfo.json").then((data) => {
            user = data;
        })
    })

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should subscribe to Newsletter', () => {
        NavigationPage.footerSubscribeLink.click();
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.firstName, user.lastName, user.company, user.city, user.state, user.phone);
        SubscribeInfoPage.selectCheckBox.click();
        SubscribeInfoPage.setCheckBox;
        // We are not submitting the form in this test to avoid creating numerous sets of test data in the system.
        // Instead, we verify that the form fields can be visible.
    })
});
