

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage  {
    /**
     * define selectors using getter methods
     */
    get wholePage () { return browser.maximizeWindow(); }
    get inputUsername () { return $(`[name="loginfmt"]`) }
    get nextBtn() {return $(`[id="idSIButton9"]`)}
    get inputPassword () { return $(`[name="passwd"]`) }
    get loginBtn(){return $(`[class="btn btn-default submit"]`)}
    get btnSubmit () { return $('button[type="submit"]') }
    get remainBtn () { return $(`[id="idBtn_Back"]`)}
    get dispatchMenu () { return $(`[id="dispatchUrl"]`)}
    get dispatchManageSubMenu () { return  $(`a=Manage`)}
    get addTicketBtn () { return $(`[id="btnAddTicket"]`)}
    get addClientOption () { return $(`[id="ClientID"]`)}
    get endClientOption () { return $('//*[@id="EndClientID"]')}
    get clientContactOption () { return $('//*[@id="ClientTicketInitiator"]')}
    get clientCountryOption () { return $('//*[@id="CountryId"]')}
    get clientLocationOption () { return $('//*[@id="ClientSiteID"]')}
    
    
    
    
}

module.exports = new SecurePage();
