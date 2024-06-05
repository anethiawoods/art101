/* Lab 13 - Loops
Using loops to output numbers 1-200 with "J/J/J"
Author: L Tachibana
Date: 4 June 2024 */

//Loop through numbers 1-200
function listingNum (){
    for (var i=1; i<=200; i++) {
     
    let str = "";

    //Add 'jeep' when divisible by 3
    if (i % 3 == 0) {
      str += "Jeep";
    }
    
    //Add 'jockey' when divisible by 5
    if (i % 5 == 0) {
      str += " Jockey";
    }  
    
    //Add 'jump' when divisible by 7

    if (i % 7 == 0) {
      str += " Jump";
    }
    
    //print numbers & append string
    if (str == "") {
      $("#output").append("<p>" + i + "<p>");
    } else {
      $("#output").append("<p class='text'>" + i + " " + str + "!<p>");
    }}
  }
  
  //trigger function when clicked
   $("#button").click(listingNum);