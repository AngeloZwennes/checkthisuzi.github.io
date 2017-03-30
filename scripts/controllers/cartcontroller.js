app.controller("CartController", function($scope,CartFactory,OrdersFactory,CustomersFactory,$location,$timeout) {
    $scope.cart = CartFactory.getCart();
    $scope.subTotal = CartFactory.getSubTotal();
    $scope.customers = CustomersFactory.getAllCustomers();
    $scope.customer = CustomersFactory.getCartCustomer();

    $scope.chooseCustomer = function () {
        $("#customer-popup").modal('show');
    };
    $scope.customerChange = function(){
        CustomersFactory.editCustomer($scope.customer);
    };
    $scope.updateCart = function(){
        CartFactory.updateCart($scope.cart);
        $scope.subTotal = CartFactory.getSubTotal();
    };
    $scope.selectCustomer = function(){
        CustomersFactory.setCartCustomer($scope.customer);
    };
    $scope.placeOrder = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = dd+'/'+mm+'/'+yyyy;
        var newOrder = [
            {
                "products": $scope.cart,
                "subTotal": $scope.subTotal,
                "customer": $scope.customer,
                "orderStatus": "Completed",
                "date": today
            }
        ];
        OrdersFactory.placeOrder(newOrder);
        $("#customer-popup").modal('hide');
        CartFactory.clearCart();
        $timeout($scope.goHome(),1000);
    }
    $scope.goHome = function(){
        $location.path("/home");
    }

});