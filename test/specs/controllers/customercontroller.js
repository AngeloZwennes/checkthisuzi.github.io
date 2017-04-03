describe("CustomerController",function(){
    beforeEach(module("angular-store"));

    var controller,scope;

    beforeEach(inject(function($rootScope,$controller){
        scope = $rootScope.$new();
        controller = $controller("CustomerController",{
            $scope: scope
        });
    }));
    it("should delete a customer from the customerslist",function(){
        scope.customers = [
            {
                "name": "angelo",
                "email": "Info1@email.nl",
                "adress": "Planbaan",
                "city": "Zoetermeer",
                "id": "9fe8ef16-0591-4416-6d91-b7752f197aa1"
            },
            {
                "name": "martin",
                "email": "Info2@email.nl",
                "adress": "Lommerbaan",
                "city": "Zoetermeer",
                "id": "9fe8ee16-0591-4416-6d91-b7752f197aa2"
            }
        ];
        scope.deleteCustomer(0);
        expect(scope.customers[0].id).toEqual("9fe8ee16-0591-4416-6d91-b7752f197aa2");
    });
});