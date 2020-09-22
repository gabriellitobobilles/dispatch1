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

        // LoginPage.moveToElement(SecurePage.dispatchMenu)
        // SecurePage.dispatchManageSubMenu.click()

        $(`//div[@id='dv_TicketDetail']//span`).waitForDisplayed({ timeout: 270000 });
        let kID = $(`//div[@id='dv_TicketDetail']//span`).getText()
        $(`[id="tbSearch"]`).click()
        $(`[id="tbSearch"]`).setValue(kID)
        browser.keys('Enter')
        $(`[class="jobView active"]`).waitForDisplayed({ timeout: 270000 });
        $(`[class="jobView active"]`).click()
        browser.pause(2000);
        $(`[class="btn select-vendor"]`).waitForDisplayed({ timeout: 270000 });
        $(`[class="btn select-vendor"]`).click();
        $(`button=Assign Job`).waitForDisplayed({ timeout: 270000 });
        browser.pause(2000);
        $$(`[class="step-icon"]`)[1].click();
        browser.pause(2000);
        $(`[id="searchVendorCityName"]`).waitForDisplayed({ timeout: 270000 });
        $(`[id="searchVendorCityName"]`).click()
        browser.pause(2000);
        $(`[id="searchVendorCityName"]`).setValue(`indianapolis`)
        browser.pause(2000);
        $$(`[class="btn btn-default"]`)[1].click();
        browser.pause(2000);
        $(`button=Assign Job`).click()
        $(`[id="BaseHourlyRate"]`).clearValue()
        $(`[id="BaseHourlyRate"]`).setValue(`3`)
        $(`[id="RequiredHoursOfBaseRate"]`).clearValue()
        $(`[id="RequiredHoursOfBaseRate"]`).setValue(`2`)
        $(`[id="StandardAdditionalHourRate"]`).clearValue()
        $(`[id="StandardAdditionalHourRate"]`).setValue(`1`)
        $(`[id="VendorTravelCost"]`).clearValue()
        $(`[id="VendorTravelCost"]`).setValue(`1`)
        $(`[id="CustomFields_Fields_0__Value"]`).click()
        $(`[id="CustomFields_Fields_0__Value"]`).setValue(`Information Technology`)
        LoginPage.scrollElement($(`//input[@value='Save' and @type='button']`))
        $(`//input[@value='Save' and @type='button']`).click()
        $(`//*[@id='ToBeScheduledSection']//button[text()= "Confirm"]`).waitForDisplayed({ timeout: 270000 });

        // ** To be Scheduled */
        $$(`//*[@id='ToBeScheduledSection']//button[text()= "Confirm"]`).forEach(function(elem){
            elem.click()
            $(`[class="confirm"]`).waitForDisplayed({ timeout: 270000 });
            browser.pause(2000);
            $(`[class="confirm"]`).click();
            browser.waitUntil(
                () => $(`[id="kinettixLoaderimg"]`).isDisplayed() === true,
                {
                    timeout: 270000,
                    timeoutMsg: 'expected text to be different after 5s'
                }
            );
        });

        $(`//*[@id='ScheduledSection']//button[text()= "Confirm"]`).waitForDisplayed({ timeout: 270000 });
        console.log($$(`//*[@id='ScheduledSection']//button[text()= "Confirm"]`).length)
        // ** Schedule Visit 1 confirmation*
        $$(`//*[@id='ScheduledSection']//button[text()= "Confirm"]`).forEach(function(elem){
            elem.click()
            // $(`[class="confirm"]`).waitForDisplayed({ timeout: 270000 });
            browser.pause(2000);
            // $(`[class="confirm"]`).click();
            browser.waitUntil(
                () => $(`[id="kinettixLoaderimg"]`).isDisplayed() === false,
                {
                    timeout: 270000,
                    timeoutMsg: 'expected text to be different after 5s'
                }
            );
        });
        browser.pause(2000);
        $(`button=Check In`).click();
        browser.pause(2000);
        $(`//*[@id="myModalContent"]//input[@value="Check In"]`).click()
        browser.pause(2000);
        $(`button=Check Out`).click();
        browser.pause(2000);
        $(`//*[@id="myModalContent"]//input[@value="Check Out"]`).click()
        browser.pause(2000);
        $(`[class="cancel"]`).waitForDisplayed({ timeout: 270000 });
        $(`[class="cancel"]`).click()

        // ** In Work */
        $(`//*[@id='InWorkSection']//button[text()= "Confirm"]`).waitForDisplayed({ timeout: 270000 });
        browser.pause(3000);
        $$(`//*[@id='InWorkSection']//button[text()= "Confirm"]`).forEach(function(elem){
            elem.click()
            browser.pause(2000);
            browser.waitUntil(
                () => $(`[id="kinettixLoaderimg"]`).isDisplayed() === false,
                {
                    timeout: 270000,
                    timeoutMsg: 'expected text to be different after 5s'
                }
            );
        });

            // ** PendingDeliverableSecntion */
            $(`//*[@id='PendingDeliverableSecntion']//button[text()= " Complete Now"]`).waitForDisplayed({ timeout: 270000 });
            browser.pause(2000);
            $(`//*[@id='PendingDeliverableSecntion']//button[text()= " Complete Now"]`).click()
            browser.pause(2000);
            $(`//*[@id='EditPOForm']//input[@value= "Save"]`).waitForDisplayed({ timeout: 270000 });
            $(`//*[@id='EditPOForm']//input[@value= "Save"]`).click()
            browser.pause(2000);
            $(`a=Activity`).click()
            browser.pause(2000);
            $(`//*[@id='PendingDeliverableSecntion']//button[text()= "Upload Deliverables"]`).waitForDisplayed({ timeout: 270000 });
            $(`//*[@id='PendingDeliverableSecntion']//button[text()= "Upload Deliverables"]`).click()
            browser.pause(2000);
            $(`[id="addReasonCodeBtn"]`).waitForDisplayed({ timeout: 270000 });
            $(`[id="addReasonCodeBtn"]`).click();

        browser.pause(90000000);
    });

    
    afterEach(function() {
        // runs after all tests in this file
        browser.closeWindow()
        browser.reloadSession()
    });
});


