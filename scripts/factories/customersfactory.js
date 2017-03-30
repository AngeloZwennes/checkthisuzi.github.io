app.factory('CustomersFactory',function(GUIDFactory){

    function getAllCustomers(){
        //localStorage.removeItem("customers");
        var localCustomers = JSON.parse(localStorage.getItem("customers"));
        if(localCustomers == undefined || localCustomers.length < 0){
            localCustomers = [];
            localStorage.setItem("customers",JSON.stringify(localCustomers));
        }
        return JSON.parse(localStorage.getItem("customers"));
    };
    function saveCustomer(customer){
        var localCustomers = JSON.parse(localStorage.getItem("customers"));
        var index = getSelectedCustomerIndex();
        localCustomers.splice(index,1);
        var newCustomer = {
            "name": customer.name,
            "email": customer.email,
            "adress": customer.adress,
            "city": customer.city
        }
        localCustomers.push(newCustomer);
        localStorage.removeItem("customers");
        localStorage.setItem("customers",JSON.stringify(localCustomers));
    }
    function deleteCustomer(customers){
        localStorage.removeItem("customers");
        localStorage.setItem("customers",JSON.stringify(customers));
    }
    function getSelectedCustomerIndex(){
        return JSON.parse(localStorage.getItem("selectedCustomer"));
    }
    function addCustomer(customer){
        customer.id = GUIDFactory.getGUID();
        var localCustomers = JSON.parse(localStorage.getItem("customers"));
        localCustomers.push(customer);
        localStorage.setItem("customers",JSON.stringify(localCustomers));
    }
    function getCustomer(){
        var localCustomers = JSON.parse(localStorage.getItem("customers"));
        return localCustomers[JSON.parse(localStorage.getItem("selectedCustomer"))];
    }
    function editCustomer(customer){
        localStorage.setItem("selectedCustomer",JSON.stringify(customer));
    }

    return {
        getAllCustomers: getAllCustomers,
        editCustomer: editCustomer,
        getSelectedCustomerIndex: getSelectedCustomerIndex,
        saveCustomer: saveCustomer,
        getCustomer: getCustomer,
        addCustomer: addCustomer,
        deleteCustomer: deleteCustomer
    };
});