

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
    get clientContactOption () { return $(`//*[@id="ClientTicketInitiator"]`)}
    get clientCountryOption () { return $(`//*[@id="CountryId"]`)}
    get clientLocationOption () { return $(`//*[@id="ClientSiteID"]`)}
    
    //**OverView */
    get issueTitle () { return $(`[id="Issue"]`)}
    get scopeOfWork () { return $(`[id="tinymce"]`)}
    get problemCodeId () { return $(`[id="ProblemCodeId"]`)}
    get technicianTypeId () { return $(`[name="TechnicianTypeId"]`)}
    get numberOfTechs () { return $(`[id="NumberOfTechs"]`)}
    get poNumber () { return $(`[id="ClientPO_"]`)}
    get woNumber () { return $(`[id="ClientProvidedWorkOrder_"]`)}
    // ** Scheduling */
    get kinettixResponseCategoryId () { return $(`[id="KinettixResponseCategoryId"]`)}
    get clientPreferredDateTime () { return $(`[id="ClientPreferredDateTime"]`)}
    // ** required Tools */
    get ticketRequiredTools () { return $(`[id="tinymce"]`)}
    // ** Miscellaneous elements */
    get saveBtn () { return $('button=Save')}
    get statusDropDown () { return $(`[id="StatusdDropDown"]`)}
    get cancelTicketBtn () { return $('button=Cancel Ticket')}
    get holdTicketBtn () { return $('button=Hold Ticket')}
    get MSN () { return $(`[id="CustomFields.Fields[0].Value"]`)}
    get equipment () { return $(`[id="CustomFields_Fields[1].Value"]`)}
    
    


    // ** Vendor Menu *
    get ventureUrl () { return $(`[id="vendorsUrl"]`)}
    get addVendorBtn () { return $(`[id="btnAddVendor"]`)}
    get vendorTypeOption () { return $(`[id="Type"]`)}
    get vendorName () { return $(`[id="Name"]`)}
    get vendorDetails () { return $(`[id="VendorDetails"]`)}
    get vendorBusinessPhone () { return $(`[id="BusinessPhone"]`)}
    get vendorSecondaryPhone () { return $(`[id="SecondaryPhone"]`)}
    get vendorPhoneInvalid () { return $(`[class="PhoneMessage text-danger"]`)}
    get vendorPhoneValid () { return $(`[class="PhoneMessage text-success"]`)}

    
    
    
    
}

module.exports = new SecurePage();
