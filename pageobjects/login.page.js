const Page = require('./page');
const elem = require('./secure.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        elem.wholePage
        return super.open('');
    }
}

module.exports = new LoginPage();
