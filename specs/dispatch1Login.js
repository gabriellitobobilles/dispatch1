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

    it('Add New Dispatch Ticket', () => {
        
        LoginPage.createNewDispatchTicket()

    });

    it('KIN-838: Validate Primary Vendor Number', () => {
        
        //**client */
        LoginPage.moveToElement(SecurePage.ventureUrl)
        SecurePage.ventureUrl.click()
        browser.waitUntil(() => $(`[class="nprogress-busy"]`).waitForExist( { reverse:false }), { timeout: 270000 })
        // // browser.pause(3000);
        SecurePage.addVendorBtn.click()
       //  browser.waitUntil(() => $(`[class="nprogress-busy"]`).waitForExist( { reverse:false }), { timeout: 270000 })
        SecurePage.vendorName.waitForDisplayed({ timeout: 270000 });
        SecurePage.vendorName.click()
        SecurePage.vendorName.setValue(`Gabriel`)
        browser.pause(3000);
        LoginPage.moveToElement(SecurePage.vendorTypeOption)
        SecurePage.vendorTypeOption.selectByVisibleText(`Individual`)
        SecurePage.vendorDetails.click()
        SecurePage.vendorDetails.setValue(`This is just a test vendor creation`)
        LoginPage.scrollElement(SecurePage.vendorBusinessPhone)
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.setValue(`998-388-83`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998-388-8`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneValid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneValid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998-388`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998-38`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998-388-85`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998-388-835`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorBusinessPhone.click()
        SecurePage.vendorBusinessPhone.clearValue()
        SecurePage.vendorBusinessPhone.setValue(`998-388-8358`)
        SecurePage.vendorSecondaryPhone.click();
        SecurePage.vendorPhoneValid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneValid.getText(), `Valid`);

    });

    it('KIN-838: Validate Secondary Vendor Number', () => {
        
        //**client */
        LoginPage.moveToElement(SecurePage.ventureUrl)
        SecurePage.ventureUrl.click()
        browser.waitUntil(() => $(`[class="nprogress-busy"]`).waitForExist( { reverse:false }), { timeout: 270000 })
        // // browser.pause(3000);
        SecurePage.addVendorBtn.click()
       //  browser.waitUntil(() => $(`[class="nprogress-busy"]`).waitForExist( { reverse:false }), { timeout: 270000 })
        SecurePage.vendorName.waitForDisplayed({ timeout: 270000 });
        SecurePage.vendorName.click()
        SecurePage.vendorName.setValue(`Gabriel`)
        browser.pause(3000);
        LoginPage.moveToElement(SecurePage.vendorTypeOption)
        SecurePage.vendorTypeOption.selectByVisibleText(`Individual`)
        SecurePage.vendorDetails.click()
        SecurePage.vendorDetails.setValue(`This is just a test vendor creation`)
        LoginPage.scrollElement(SecurePage.vendorSecondaryPhone)
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.setValue(`998-388-83`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998-388-8`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneValid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneValid.getText(), `Valid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998-388`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998-38`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998-388-85`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998-388-835`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneInvalid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneInvalid.getText(), `InValid`);
        SecurePage.vendorSecondaryPhone.click()
        SecurePage.vendorSecondaryPhone.clearValue()
        SecurePage.vendorSecondaryPhone.setValue(`998-388-8358`)
        SecurePage.vendorBusinessPhone.click();
        SecurePage.vendorPhoneValid.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(SecurePage.vendorPhoneValid.getText(), `Valid`);

    });

    it('KIN-773: Limit field lengths on Client Provided PO and WO Number', () => {

        //**client */
        LoginPage.moveToElement(SecurePage.dispatchMenu)
        SecurePage.dispatchManageSubMenu.click()
        browser.pause(1000);
        SecurePage.addTicketBtn.waitForDisplayed({ timeout: 270000 });
        SecurePage.addTicketBtn.click()
        browser.pause(1000);
        SecurePage.poNumber.click();
        SecurePage.poNumber.setValue(LoginPage._randomString(35));
        assert.strictEqual(SecurePage.poNumber.getValue().length, 29);
        browser.pause(1000);
        SecurePage.woNumber.click()
        SecurePage.woNumber.setValue(LoginPage._randomString(35));
        assert.strictEqual(SecurePage.woNumber.getValue().length, 29);
    
    });
    
    it('KIN3-74: Client Portal Not Secure', () => {

        //**client */
        browser.url(`http://qa.clientportal.dispatch1.com/login?returnUrl=%2FDashboard`)
        assert.strictEqual(browser.getUrl(), `https://qa.clientportal.dispatch1.com/login?returnUrl=%2FDashboard`);
        
    
    });
    
    afterEach(function() {
        // runs after all tests in this file
        browser.closeWindow()
        browser.reloadSession()
    });
});


