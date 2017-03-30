app.factory("OrdersFactory",function(GUIDFactory){

    function getOrders(){
        return JSON.parse(localStorage.getItem("orders"));

    }
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
        placeOrder: placeOrder
    };
});