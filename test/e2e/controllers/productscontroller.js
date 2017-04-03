describe('products page', function() {
    it('adds a product', function() {
        browser.get('http://localhost:8080/#/products');
        //Count the current amount of ingredients
        var countRowsBefore = element.all(by.className('productRow'));
        countRowsBefore.count().then(function (rows) {

            var btnAddProduct = element(by.id('btnAddProduct'));
            btnAddProduct.click();

            var productName = element(by.id('productName'));
            var productDescription = element(by.id('productDescription'));
            var productPrice = element(by.id('productPrice'));
            var productImage = element(by.id('productImage'));
            productName.sendKeys('Cola');
            productDescription.sendKeys('Cola is super lekker');
            productPrice.sendKeys(0.20);
            productImage.sendKeys('http://testimage.nl');
            var btnsubmit = element(by.id('btnSubmitProduct'));
            btnsubmit.click();

            var countRowsAfter = element.all(by.exactRepeater('product in products')).then(function(products) {
                expect(products.length).toEqual(rows + 1);
            })
        });
    });
});