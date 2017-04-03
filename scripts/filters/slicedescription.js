app.filter("slicedescription", function(){
   return function(input){
       if(input.length > 100){
           var slicedInput = input.slice(0,97);
           slicedInput = slicedInput.concat("...");
           return slicedInput;
       } else if(angular.equals(input,"")) {
           return "No description";
       } else {
           return input;
       }
   }
});