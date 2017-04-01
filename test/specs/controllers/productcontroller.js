describe('ProductController'),function(){
 beforeEach(module('angular-store'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    describe('$scope.deleteProduct',function(){
       it('deletes the selected product from the array',function(){
           var $scope = {};
           var controller = $controller('ProductController',{$scope: $scope});
           $scope.products = [
               {
                   "name": "Product1",
                   "information": "Info1",
                   "price": 0.20,
                   "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323733373037_1_LowRes_JPG.JPG",
                   "id": "9fe8ef16-0591-4416-6d91-b7752f197aa2"
               },
               {
                   "name": "Product2",
                   "information": "Info2",
                   "price": 0.30,
                   "image": "https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323733373037_1_LowRes_JPG.JPG",
                   "id": "9fe8ee16-0591-4416-6d91-b7752f197aa2"
               }
           ];
           expect(controller)
       });
    });
}