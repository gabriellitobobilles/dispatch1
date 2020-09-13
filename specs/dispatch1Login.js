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
        
    });

    it('should login with valid credentials', () => {
        
        LoginPage.login(testdata.Account.Email, testdata.Account.Password);
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
        $(`[id="Issue"]`).click();
        $(`[id="Issue"]`).setValue(`Test Gabriel`)
        $(`[id="ScopeOfWork"]`).click()
        $(`[id="ScopeOfWork"]`).setValue(`This is just a test project please ignore thanks ~~ gabriel`)
        browser.pause(5000);
        $(`[id="ProblemCodeId"]`).scrollIntoView()
        $(`[id="ProblemCodeId"]`).moveTo()
        $(`[id="ProblemCodeId"]`).selectByVisibleText(`New Equipment Installation`)
        browser.pause(5000);
        $(`[name="TechnicianTypeId"]`).scrollIntoView()
        $(`[name="TechnicianTypeId"]`).moveTo()
        $(`[name="TechnicianTypeId"]`).selectByVisibleText(`Field Tech`)
        browser.pause(5000);
        $(`[id="NumberOfTechs"]`).scrollIntoView()
        $(`[id="NumberOfTechs"]`).moveTo()
        $(`[id="NumberOfTechs"]`).selectByVisibleText(`10`)

        // ** Scheduling */
        $(`[id="KinettixResponseCategoryId"]`).scrollIntoView()
        $(`[id="KinettixResponseCategoryId"]`).moveTo()
        $(`[id="KinettixResponseCategoryId"]`).selectByVisibleText(`Next Business Day`)
        browser.pause(1000);
        $(`[id="ClientPreferredDateTime"]`).click()

        // ** required Tools */
        $(`[id="TicketRequiredTools"]`).scrollIntoView()
        $(`[id="TicketRequiredTools"]`).click()
        $(`[id="TicketRequiredTools"]`).setValue(`This is just a test project please ignore thanks ~~ gabriel`)


        $('button=Save').scrollIntoView()
        $('button=Save').click()
        $(`[id="StatusdDropDown"]`).waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($('button=Cancel Ticket').isEnabled(), true);
        assert.strictEqual($('button=Hold Ticket').isEnabled(), true);
        // browser.pause(900000);

    });
});


