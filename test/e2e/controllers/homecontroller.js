describe('E2E angularjs homepage statustext', function(){
   beforeEach(function(){
      browser.get('http://localhost:8080');
   });
    it('should display a website title',function(){
       var title = element(by.class("navbar-brand"));
        var titleText = title.getText();

        expect(titleText).toBe('Angular store');
    });
});