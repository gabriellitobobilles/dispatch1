/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

const elem = require('./secure.page');
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

    scrollElement (selector){
        selector.scrollIntoView();
    }

    moveToElement (selector){
        selector.moveTo();
    }
}
