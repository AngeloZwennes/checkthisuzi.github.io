app.controller("ManageCustomerController",function($scope,$route,CustomersFactory,$location){
   $scope.customer = null;
    $scope.adding = $route.current.$$route.addCustomer;

    $scope.getCustomer = function(){
        $scope.customer = CustomersFactory.getCustomer();
    };
    $scope.updateCustomer = function(){
        console.log($scope.customer);
        if($scope.customer.name != "" & $scope.customer.email != "" && $scope.customer.adress != "" && $scope.customer.city != ""){
            CustomersFactory.saveCustomer($scope.customer);
            $location.path("/customers");
        }
    };
    $scope.addCustomer = function(customer){
        if(customer != null && customer.name != null && customer.email != null && customer.adress != null && customer.city != null){
            CustomersFactory.addCustomer(customer);
            $location.path("/customers");
        }
    }
    $scope.$watch($scope.adding,function(value){
      if(!$scope.adding) {
          $scope.getCustomer();
      }
    });
});