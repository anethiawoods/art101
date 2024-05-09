/* Lab 9 - Libraries & jQuery
Using jQuery to make buttons change elements of the site when clicked
Author: L Tachibana
Date: 8 May 2024 */

//Add buttons to each section
    $("#challenges").append("<button id='challenges-button'>Eh? What's here...</button>");
    $("#problems").append("<button id='problems-button'>Make me look real weird</button>");
    $("#results").append("<button id='results-button'>Say hi sol :)</button><button id='unresults-button'>Take him away!</button>");

//Button for challenge section - Make it toggle on/off the p text
    // function to change challenges section class
    function toggleText () {
        $("#challenges p").toggleClass("challenge-special");
    };

    //when button is clicked, it will toggle the challenges section to be visible
    $("#challenges-button").click(toggleText);

//Button for problems section - when button is clicked, it will change the  css
    $("#problems-button").click(function(){
        $("#problems p").toggleClass("problems-special");
    }
    );

//Button for results section - Add picture
     //when button is clicked, it will add pic
    $("#results-button").click(function(){
        $("#img-line").append("<img class='solling' src='./img/solling-round.png'>");
    });
    
//Button for results section - Remove picture
     //when button is clicked, it will removE pic
    $("#unresults-button").click(function(){
        $(".solling").remove();
    });
    
//Hover over headers to change colour
  //when button is clicked, turns pink
    $("h1").hover(function(){
        $("h1").toggleClass("h1-special");
    });