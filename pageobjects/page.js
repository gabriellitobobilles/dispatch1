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
        browser.waitUntil(() => browser.isAlertOpen() === true, { timeout: 270000 })
        if(browser.isAlertOpen()){
            browser.acceptAlert()
        }
        
    }
}
