/* Lab 7 - Functions
Using functions to retrieve and sort a user's name
Author: L Tachibana
Date: 1 May 2024 */

//Creating a function to retrieve user's name & sort the letters
function sortName (){
  //retrieve user's name
  let userName = window.prompt("What's your name?");
  console.log(userName);
  //sort and return user's name
  let sortedName = userName.split('').sort().join('');
  console.log(sortedName);
  //return sorted name
  return sortedName;
};

//output
document.writeln("Actually your name is ",sortName());