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
        //go directly to the page because navigating with link opens a new browser
        cy.visit('https://insights.jahnelgroup.com/subscribe');
        SubscribeInfoPage.enterSubscribeInfo(user.email, user.firstName, user.lastName, user.company, user.city, user.state, user.phone);
        SubscribeInfoPage.selectCheckBox.click();
        SubscribeInfoPage.setCheckBox;
        //click on "Submit"
    })
});
