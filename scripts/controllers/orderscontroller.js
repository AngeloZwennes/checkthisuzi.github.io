app.controller("OrdersController",function($scope,OrdersFactory){
    $scope.orders = OrdersFactory.getOrders();
    console.log($scope.orders);
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        $('.collapse').on('show.bs.collapse', function () {
            $('.collapse.in').collapse('hide');
        });
    });

});