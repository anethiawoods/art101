/* Lab 6 - Arrays and Objects
Declaring Arrays & Objects
Author: L Tachibana
Date: 28 April 2024 */

// Declare Variables
let c3Charas = ["Kenna","Solum","Callie","Calder"];

//Object 1 - Callie
let callie = {
  name: "Calliope Petrichor",
  level: 11,
  season: "Winter",
  class: ["Bard","Paladin"],
  pets: {
    duck: "Foster",
    serpents: ["Honeysuckle","Liquorice"],
    fish: "Gunk",
  },
};

//Object 2 - Sol
let sol = {
  name: "Solum Bufo",
  level: 11,
  height: "Short King",
  class: "Monk",
  allies: ["Albin","Swag"],
  items: {
    scarf: "Scarf of Displacement",
    tag: "SOLUM plate",
  },
  says: function() {
    document.writeln("Frogson and Holmes!");
  }
};

//Output
document.writeln("Characters in Campaign 3: ", c3Charas, "<br>");
document.writeln("Facts about Callie: <pre>", 
    JSON.stringify(callie, null, '\t'), "</pre>", "<br>");
document.writeln("Facts about Sol: <pre>", 
    JSON.stringify(sol, null, '\t'), "</pre>", "<br>");