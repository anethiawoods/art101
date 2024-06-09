/* Lab 15 - AJAX
Experiments ith AJAX + JQuery
Author: L Tachibana
Date: 9 June 2024 */

const URL = "https://api.open5e.com/v1/spells/";

//create a button listener
 $("#button").click(function(){
    // call jQuery ajax
      $.ajax(ajaxParams);
  });

// setup ajax object
const ajaxParams = {
  url: URL,
  data: {
  },
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
};

// create ajax success callback
function ajaxSuccess(data){
   console.log("Data:", data);
   //parse json
        // let i = Math.floor(Math.random() * 100);
        // console.log(i);    
        const randomSpell = data.results[Math.floor(Math.random()*data.results.length)];
        const name = randomSpell.name;
        const level = randomSpell.level;
        const desc = randomSpell.desc;
        

    //put joke in output div
        console.log(name)
        $("#output").html("<p>SPELL NAME: "+name+"<p>SPELL LEVEL: "+level+"<p>SPELL DESCRIPTION: "+desc); 
  
  };

// create ajax error callback
function ajaxError(request,error){
	console.log("Oops:", request, error);
  };