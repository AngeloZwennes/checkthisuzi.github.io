app.filter("slicedescription", function(){
   return function(input){
       if(input.length > 120){
           var slicedInput = input.slice(0,117);
           slicedInput = slicedInput.concat("...");
           return slicedInput;
       } else {
           return input;
       }
   }
});