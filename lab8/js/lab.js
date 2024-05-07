/* Lab 8 - Anon Functions and Callbacks
Using Callbacks with named & anonymous functions
Author: L Tachibana
Date: 2 May 2024 */

//Declaring array of numbers
let definitelyRandomNumbers = [42,413,612,1025,222,1,2,20];

//Declaring function (that subtracts 10 from number)
function minusTen(a){
    return a-10;
}

//Map anon function onto array
    //function squares the numbers
definitelyRandomNumbers.map(
    function(a){
      return a**2
    }
);

//Map the named function onto array
let arrayMinusTen = definitelyRandomNumbers.map(minusTen);
console.log("Results: "+ arrayMinusTen);
