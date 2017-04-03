app.factory('CustomersFactory',function(GUIDFactory){

    function getAllCustomers(){
        //localStorage.removeItem("customers");
        var localCustomers = JSON.parse(localStorage.getItem("customers"));
        if(localCustomers == undefined || localCustomers.length < 0){
            localCustomers = [
                {
                    "name":"Pim",
                    "email":"pim@email.nl",
                    "adress":"ergens",
                    "city":"zoetermeer",
                    "id":"78cc0023-1e35-45b1-293e-cab3de0418e1"
                },
                {
                    "name":"Angelo",
                    "email":"angelo@email.nl",
                    "adress":"lommerbaan",
                    "city":"zoetermeer",
                    "id":"78cc0023-1e35-45b1-293e-aab3de0418e1"
                },
                {
                    "name":"bodhie",
                    "email":"bodie@email.nl",
                    "adress":"ergens",
                    "city":"goudaa",
                    "id":"78cc7023-1e35-45b1-293e-cab3de0418e1"
                },
                {
                    "name":"Jacky",
                    "email":"Jacky@email.nl",
                    "adress":"Ergens",
                    "city":"Zoetermeer",
                    "id":"eafbbd90-2f33-49e0-4a25-39f5b12d6cd4"},
                {
                    "name":"Shawn",
                    "email":"Shawn@autist.nl",
                    "adress":"denhaagzonderhoofdletter",
                    "city":"denhaag",
                    "id":"57e4729e-938a-42e8-4f9e-de59c8758c53"}
            ];
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