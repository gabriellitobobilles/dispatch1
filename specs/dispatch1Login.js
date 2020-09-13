const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const testdata = require(`../test-data/testdata`);
const assert = require("assert");

describe('My Login application', () => {

    beforeEach(function() {
        // runs before all tests in this file regardless where this line is defined.
        LoginPage.open();
        SecurePage.loginBtn.waitForDisplayed({ timeout: 270000 });
        SecurePage.loginBtn.click()
        LoginPage.login(testdata.Account.Email, testdata.Account.Password);
        
    });

    it('should login with valid credentials', () => {
        
        

        //**client */
        SecurePage.dispatchMenu.moveTo()
        SecurePage.dispatchManageSubMenu.click()
        browser.pause(1000);
        SecurePage.addTicketBtn.waitForDisplayed({ timeout: 270000 });
        SecurePage.addTicketBtn.click()
        browser.pause(1000);
        SecurePage.addClientOption.moveTo();
        SecurePage.addClientOption.selectByVisibleText(`Walker Industries`)
        browser.pause(5000);
        SecurePage.endClientOption.moveTo()
        SecurePage.endClientOption.selectByVisibleText(`Thornton and Co`)
        browser.pause(5000);
        SecurePage.clientContactOption.moveTo()
        SecurePage.clientContactOption.selectByVisibleText(`Menwon  Borh`)
        browser.pause(5000);
        SecurePage.clientCountryOption.moveTo()
        SecurePage.clientCountryOption.selectByVisibleText(`Guam`)
        browser.pause(5000);
        SecurePage.clientLocationOption.moveTo()
        SecurePage.clientLocationOption.selectByVisibleText(`Tamuning, GU||12398 Russell Street|Tamuning|GU|Guam`)

        //**OverView */
        SecurePage.issueTitle.click();
        SecurePage.issueTitle.setValue(`Test Gabriel`)
        SecurePage.scopeOfWork.click()
        SecurePage.scopeOfWork.setValue(`This is just a test project please ignore thanks ~~ gabriel`)
        browser.pause(5000);
        SecurePage.problemCodeId.scrollIntoView()
        SecurePage.problemCodeId.moveTo()
        SecurePage.problemCodeId.selectByVisibleText(`New Equipment Installation`)
        browser.pause(5000);
        SecurePage.technicianTypeId.scrollIntoView()
        SecurePage.technicianTypeId.moveTo()
        SecurePage.technicianTypeId.selectByVisibleText(`Field Tech`)
        browser.pause(5000);
        SecurePage.numberOfTechs.scrollIntoView()
        SecurePage.numberOfTechs.moveTo()
        SecurePage.numberOfTechs.selectByVisibleText(`10`)

        // ** Scheduling */
        SecurePage.kinettixResponseCategoryId.scrollIntoView()
        SecurePage.kinettixResponseCategoryId.moveTo()
        SecurePage.kinettixResponseCategoryId.selectByVisibleText(`Next Business Day`)
        browser.pause(1000);
        SecurePage.clientPreferredDateTime.click()

        // ** required Tools */
        SecurePage.ticketRequiredTools.scrollIntoView()
        SecurePage.ticketRequiredTools.click()
        SecurePage.ticketRequiredTools.setValue(`This is just a test project please ignore thanks ~~ gabriel`)


        SecurePage.saveBtn.scrollIntoView()
        SecurePage.saveBtn.click()
        SecurePage.statusDropDown.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.cancelTicketBtn.isEnabled(), true);
        assert.strictEqual(SecurePage.holdTicketBtn.isEnabled(), true);
        // browser.pause(900000);

    });
});


