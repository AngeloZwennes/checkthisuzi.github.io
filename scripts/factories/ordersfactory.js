app.factory("OrdersFactory",function(GUIDFactory){

    function getOrders(){
        return JSON.parse(localStorage.getItem("orders"));

    }
    //called when the user selects a customer to show their specific orders.
    function getFilteredOrders(id){
        var localProducts = getOrders();
        var returnProducts = [];
        var i;
        for(i=0;i < localProducts.length; i++){
            if(angular.equals(localProducts[i].customer.id,id)){
                returnProducts.push(localProducts[i]);
            }
        };
        return returnProducts;
    }
    //
    function placeOrder(order){
        var localOrders = JSON.parse(localStorage.getItem("orders"));
        if(localOrders == null){
            localOrders = [];
        }
        order.id = GUIDFactory.getGUID();
        localOrders.push(order);
        localStorage.setItem("orders",JSON.stringify(localOrders))
    }
    return {
        getOrders: getOrders,
        getFilteredOrders: getFilteredOrders,
        placeOrder: placeOrder
    };
});