app.controller("ManageCustomerController",function($scope,$route,CustomersFactory,$location){
   $scope.customer = null;
    $scope.adding = $route.current.$$route.addCustomer;
    $scope.getCustomer = function(){
        $scope.customer = CustomersFactory.getCustomer();
    };
    $scope.updateCustomer = function(){
        CustomersFactory.saveCustomer($scope.customer);
        $location.path("/customers");
    };
    $scope.$watch($scope.adding,function(value){
      if(!$scope.adding){
          $scope.getCustomer();
      } else {
          $scope.addCustomer = function(customer){
              if(!customer == null){
                  CustomersFactory.addCustomer(customer);
                  $location.path("/customers");
              }
          }
      }
    });
});