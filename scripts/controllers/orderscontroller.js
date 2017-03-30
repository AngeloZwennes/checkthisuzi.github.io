app.controller("OrdersController",function($scope,OrdersFactory,CustomersFactory){
    $scope.orders = OrdersFactory.getOrders();
    $scope.customers = CustomersFactory.getAllCustomers();
    $scope.customer;

    $scope.filterOrders = function(){
    //call everytime the select box changes to filter orders
       $scope.orders = OrdersFactory.getFilteredOrders($scope.customer.id);
    }

    //make sure the accordion table can only collapse when the ng-repeat is done.
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        $('.collapse').on('show.bs.collapse', function () {
            $('.collapse.in').collapse('hide');
        });
    });

});