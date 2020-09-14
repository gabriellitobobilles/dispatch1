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
        LoginPage.moveToElement(SecurePage.dispatchMenu)
        SecurePage.dispatchManageSubMenu.click()
        browser.pause(1000);
        SecurePage.addTicketBtn.waitForDisplayed({ timeout: 270000 });
        SecurePage.addTicketBtn.click()
        browser.pause(1000);
        LoginPage.moveToElement(SecurePage.addClientOption)
        SecurePage.addClientOption.selectByVisibleText(`Walker Industries`)
        browser.pause(5000);
        LoginPage.moveToElement(SecurePage.endClientOption)
        SecurePage.endClientOption.selectByVisibleText(`Thornton and Co`)
        browser.pause(5000);
        LoginPage.moveToElement(SecurePage.clientContactOption)
        SecurePage.clientContactOption.selectByVisibleText(`Menwon  Borh`)
        browser.pause(5000);
        LoginPage.moveToElement(SecurePage.clientCountryOption)
        SecurePage.clientCountryOption.selectByVisibleText(`Guam`)
        browser.pause(5000);
        LoginPage.moveToElement(SecurePage.clientLocationOption)
        SecurePage.clientLocationOption.selectByVisibleText(`Tamuning, GU||12398 Russell Street|Tamuning|GU|Guam`)

        //**OverView */
        SecurePage.issueTitle.click();
        SecurePage.issueTitle.setValue(`Test Gabriel`)
        SecurePage.scopeOfWork.click()
        SecurePage.scopeOfWork.setValue(`This is just a test project please ignore thanks ~~ gabriel`)
        browser.pause(5000);
        LoginPage.scrollElement(SecurePage.problemCodeId)
        LoginPage.moveToElement(SecurePage.problemCodeId)
        SecurePage.problemCodeId.selectByVisibleText(`New Equipment Installation`)
        browser.pause(5000);
        LoginPage.scrollElement(SecurePage.technicianTypeId)
        LoginPage.moveToElement(SecurePage.technicianTypeId)
        SecurePage.technicianTypeId.selectByVisibleText(`Field Tech`)
        browser.pause(5000);
        LoginPage.scrollElement(SecurePage.numberOfTechs)
        LoginPage.moveToElement(SecurePage.numberOfTechs)
        SecurePage.numberOfTechs.selectByVisibleText(`10`)

        // ** Scheduling */
        LoginPage.scrollElement(SecurePage.kinettixResponseCategoryId)
        LoginPage.moveToElement(SecurePage.kinettixResponseCategoryId)
        SecurePage.kinettixResponseCategoryId.selectByVisibleText(`Next Business Day`)
        browser.pause(1000);
        SecurePage.clientPreferredDateTime.click()

        // ** required Tools */
        LoginPage.scrollElement(SecurePage.ticketRequiredTools)
        SecurePage.ticketRequiredTools.click()
        SecurePage.ticketRequiredTools.setValue(`This is just a test project please ignore thanks ~~ gabriel`)


        LoginPage.scrollElement(SecurePage.saveBtn)
        SecurePage.saveBtn.click()
        SecurePage.statusDropDown.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.cancelTicketBtn.isEnabled(), true);
        assert.strictEqual(SecurePage.holdTicketBtn.isEnabled(), true);
        // browser.pause(900000);

    });
});


