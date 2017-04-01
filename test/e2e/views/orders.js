describe('orders page accordion', function(){
    beforeEach(function(){
        browser.get('http://localhost:8080/#/orders');
    });
    it('filter orders when selecting a customer',function(){
        element(by.cssContainingText('option', 'Angelo')).click();
        expect(element.all(by.repeater('order in orders')).count()).toEqual(1);
    });
});