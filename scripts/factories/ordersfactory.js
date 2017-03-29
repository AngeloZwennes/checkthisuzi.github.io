app.factory("OrdersFactory",function(){
    function setOrders(){
        var orders = [
            {
                "id": 0,
                "date": "01-01-2017"
            },
            {
                "id": 1,
                "date": "01-01-2017"
            },
            {
                "id": 2,
                "date": "01-01-2017"
            },
            {
                "id": 3,
                "date": "01-01-2017"
            }
        ];
        localStorage.setItem("orders",JSON.stringify(orders));
    };
    function getOrders(){
        setOrders();
        return JSON.parse(localStorage.getItem("orders"));

    }
    return {
      getOrders: getOrders
    };
});