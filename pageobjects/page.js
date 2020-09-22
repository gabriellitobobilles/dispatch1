/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const elem = require('./secure.page');
const assert = require("assert");
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        // return browser.url(`https://the-internet.herokuapp.com/${path}`)
        return browser.url(path)
    }

    login (username, password) {
      

        elem.inputUsername.click();
        elem.inputUsername.setValue(username);
        elem.nextBtn.click()
        elem.nextBtn.waitForDisplayed({ timeout: 270000 });
        elem.inputPassword.click();
        elem.inputPassword.setValue(password);
        elem.nextBtn.click(); 
        elem.remainBtn.waitForDisplayed({ timeout: 270000 });
        elem.remainBtn.click()
        browser.waitUntil(() => browser.isAlertOpen() === false, { timeout: 270000 })
        if(browser.isAlertOpen()){
            browser.acceptAlert()
        }
        
    }

    createNewDispatchTicket () {
        //**client */
        this.moveToElement(elem.dispatchMenu)
        elem.dispatchManageSubMenu.click()
        browser.pause(1000);
        // expect($('#kinettixLoaderimg')).toExist()
        elem.addTicketBtn.waitForDisplayed({ timeout: 270000 });
        elem.addTicketBtn.click()
        browser.pause(1000);
        this.moveToElement(elem.addClientOption)
        elem.addClientOption.selectByVisibleText(`Walker Industries`)
        $(`//select[@id='EndClientID']//option[text()= "Thornton and Co"]`).waitForExist({ timeout: 10000 });
        this.moveToElement(elem.endClientOption)
        elem.endClientOption.selectByVisibleText(`Thornton and Co`)
        $(`//select[@id='ClientTicketInitiator']//option[text()= " Menwon  Borh"]`).waitForExist({ timeout: 10000 });
        browser.pause(3000);
        this.moveToElement(elem.clientContactOption)
        elem.clientContactOption.selectByVisibleText(`Menwon  Borh`)
        $(`//select[@id='CountryId']//option[text()= "Guam"]`).waitForExist({ timeout: 10000 });
        browser.pause(3000);
        this.moveToElement(elem.clientCountryOption)
        elem.clientCountryOption.selectByVisibleText(`Guam`)
        $(`//select[@id='ClientSiteID']//option[text()= "Tamuning, GU||12398 Russell Street|Tamuning|GU|Guam"]`).waitForExist({ timeout: 10000 });
        this.moveToElement(elem.clientLocationOption)
        elem.clientLocationOption.selectByVisibleText(`Tamuning, GU||12398 Russell Street|Tamuning|GU|Guam`)

        //**OverView */
        this.scrollElement(elem.issueTitle)
        elem.issueTitle.click();
        elem.issueTitle.setValue(`Test Gabriel`)
        browser.switchToFrame($(`#ScopeOfWork_ifr`))
        elem.scopeOfWork.click()
        elem.scopeOfWork.setValue(`This is just a test project please ignore thanks ~~ gabriel`)
        browser.switchToParentFrame();
        browser.pause(2000);
        this.scrollElement(elem.problemCodeId)
        this.moveToElement(elem.problemCodeId)
        elem.problemCodeId.selectByVisibleText(`New Equipment Installation`)
        $(`//select[@id='TechnicianTypeId']//option[text()= "Field Tech"]`).waitForExist({ timeout: 10000 });
        this.scrollElement(elem.technicianTypeId)
        this.moveToElement(elem.technicianTypeId)
        elem.technicianTypeId.selectByVisibleText(`Field Tech`)
        $(`//select[@id='NumberOfTechs']//option[text()= "10"]`).waitForExist({ timeout: 10000 });
        this.scrollElement(elem.numberOfTechs)
        this.moveToElement(elem.numberOfTechs)
        elem.numberOfTechs.selectByVisibleText(`10`)

        // ** Scheduling */
        this.scrollElement(elem.kinettixResponseCategoryId)
        this.moveToElement(elem.kinettixResponseCategoryId)
        elem.kinettixResponseCategoryId.selectByVisibleText(`Next Business Day`)
        browser.pause(1000);
        this.preferredTechDate()

        // ** required Tools */
        browser.switchToFrame($(`#TicketRequiredTools_ifr`))
        this.scrollElement(elem.ticketRequiredTools)
        elem.ticketRequiredTools.click()
        elem.ticketRequiredTools.setValue(`This is just a test project please ignore thanks ~~ gabriel`)
        browser.switchToParentFrame();

        elem.MSN.click()
        elem.MSN.setValue(`3424342342343244`)
        browser.pause(3000);
        this.moveToElement(elem.equipment)
        elem.equipment.selectByVisibleText(`IT`)
        
        this.scrollElement(elem.saveBtn)
        elem.saveBtn.click()
        elem.statusDropDown.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.cancelTicketBtn.isEnabled(), true);
        assert.strictEqual(elem.holdTicketBtn.isEnabled(), true);
        // browser.pause(900000);
    }

    techCheckInDate () {
      
        let schedTime =this._getSchedule()
        let month = this._getmonth_name(new Date(schedTime))
        let dt =  new Date(schedTime)
        let day = dt.getDate()
        elem.clientPreferredDateTime.click()
        browser.pause(3000);
        $(`[class="picker-switch"]`).moveTo()
        $(`[class="picker-switch"]`).click()
        $(`span=${month}`).click()
        $(`td=${day}`).click()
        
    }

    preferredTechDate () {
      
        let schedTime =this._getSchedule()
        let month = this._getmonth_name(new Date(schedTime))
        let dt =  new Date(schedTime)
        let day = dt.getDate()
        elem.clientPreferredDateTime.click()
        browser.pause(3000);
        $(`[class="picker-switch"]`).moveTo()
        $(`[class="picker-switch"]`).click()
        $(`span=${month}`).click()
        $(`td=${day}`).click()
        
    }

    _getSchedule(){


        const now = new Date(new Date().setDate(new Date().getDate() +this._randomDated()));
        const day = ('0' + now.getDate()).slice(-2);
        const month = ('0' + (now.getMonth() + 1)).slice(-2);
        const today = (month) + '/' + (day) + '/' + now.getFullYear();
        return today;

    }

     _getmonth_name (dt){
        let mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
          return mlist[dt.getMonth()];
        }
        
    _randomDated(){
        return Math.floor(Math.random() * 7) + 1
    }

    _randomString(length){

        var result= '';
        var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }

    scrollElement (selector){
        selector.scrollIntoView();
    }

    moveToElement (selector){
        selector.moveTo();
    }
}
