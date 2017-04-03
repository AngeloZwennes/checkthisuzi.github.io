describe("ProductsController",function(){
   beforeEach(module("angular-store"));

    var controller,scope;

    beforeEach(inject(function($rootScope,$controller){
            scope = $rootScope.$new();
            controller = $controller("ProductController",{
                $scope: scope
        });
    }));
    it("should delete a product from the products list",function(){
        scope.products = [
            {
                "name": "Product1",
                "information": "Info1",
                "price": 0.20,
                "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323733373037_1_LowRes_JPG.JPG",
                "id": "9fe8ef16-0591-4416-6d91-b7752f197aa1"
            },
            {
                "name": "Product2",
                "information": "Info2",
                "price": 0.30,
                "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323733373037_1_LowRes_JPG.JPG",
                "id": "9fe8ee16-0591-4416-6d91-b7752f197aa2"
            }
        ];
        scope.deleteProduct(0);
       expect(scope.products[0].id).toEqual("9fe8ee16-0591-4416-6d91-b7752f197aa2");
    });
});