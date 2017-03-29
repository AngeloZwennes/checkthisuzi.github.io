app.controller("CustomerController", function($scope,CustomersFactory,$location) {
    $scope.customers = CustomersFactory.getAllCustomers();

    $scope.editCustomer = function(index){
        CustomersFactory.editCustomer(index);
        $location.path("/customers/EditCustomer");
    };
    $scope.deleteCustomer = function(product){
    };
});