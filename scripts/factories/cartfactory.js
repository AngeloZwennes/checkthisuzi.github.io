app.factory('CartFactory',function(){
   function getCart(){
       var localCart = JSON.parse(localStorage.getItem("cart"));
       if(localCart == undefined){
            localCart = [];
           localStorage.setItem("cart",JSON.stringify(localCart));
       }
       return localCart;
   };
   function addToCart(product){
       var localCart = JSON.parse(localStorage.getItem("cart"));
       if(localCart === null || localCart == undefined){
           localCart = [];
       }
       var i;
       var productExists = false;
       for (i = 0; i < localCart.length; i++) {
           if (angular.equals(localCart[i].name, product.name)) {
               //product exists in cart, up the quantity
               localCart[i].quantity = localCart[i].quantity + 1;
               productExists = true;
           }
       }
       if(!productExists){
           product.quantity = 1;
           localCart.push(product);
           localStorage.setItem("cart",JSON.stringify(localCart));
       }
       localStorage.setItem("cart",JSON.stringify(localCart));
   };
   function getSubTotal(){
       var localCart = getCart();
       console.log(localCart);
       var subTotal = 0;
       var i;
       for(i=0;i < localCart.length;i++){
               var countTotal = localCart[i].price * localCart[i].quantity;
           console.log(countTotal);
               subTotal += countTotal;
       }
       return subTotal;
   }
   function updateCart(cart){
       localStorage.removeItem("cart");
       localStorage.setItem("cart",JSON.stringify(cart));

   }
   function clearCart(){
       localStorage.removeItem("cart");
   }
   return {
       updateCart: updateCart,
       clearCart: clearCart,
       getCart: getCart,
       addToCart: addToCart,
       getSubTotal: getSubTotal
   };
});