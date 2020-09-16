describe('Example', () => {
    beforeEach(() => {
       browser.url('https://webdriver.io');
    });
    
    it('should save some screenshots', () => {
      // Save a screen
      browser.saveScreen('examplePaged', { /* some options*/ });
      
      // Save an element
      browser.saveElement($('.button'), 'firstButtonElement', { /* some options*/ });
      
      // Save a full page screens
      browser.saveFullPageScreen('fullPage', { /* some options*/ });
    });
    
    it('should compare successful with a baseline', () => {
      // Check a screen
     //  expect(browser.checkScreen('examplePaged', { 	})).toEqual(0);
      
      // Check an element
     // expect(browser.checkElement($('.button'), 'firstButtonElement', { /* some options*/ })).toEqual(0);
      
      // Check a full page screens
      expect(browser.checkFullPageScreen('fullPage', { /* some options*/ })).toEqual(0);
    });
  });