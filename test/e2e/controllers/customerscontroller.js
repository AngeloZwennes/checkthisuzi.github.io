describe('customers page', function() {
    it('adds a customer', function() {
        browser.get('http://localhost:8080/#/customers');
        //Count the current amount of ingredients
        var countRowsBefore = element.all(by.className('customersRow'));
        countRowsBefore.count().then(function (rows) {

            var btnAddCustomer = element(by.id('btnAddCustomer'));
            btnAddCustomer.click();

            var customerName = element(by.id('customerName'));
            var customerEmail = element(by.id('customerEmail'));
            var customerAdress = element(by.id('customerAdress'));
            var customerCity = element(by.id('customerCity'));
            customerName.sendKeys('Shaaaawn');
            customerEmail.sendKeys('Shaaawn@moneyman.nl');
            customerAdress.sendKeys('Ergens');
            customerCity.sendKeys('Pijnackert');
            var btnsubmit = element(by.id('btnSubmitCustomer'));
            btnsubmit.click();

            var countRowsAfter = element.all(by.exactRepeater('customer in customers')).then(function(customers) {
                expect(customers.length).toEqual(rows + 1);
            })
        });
    });
});