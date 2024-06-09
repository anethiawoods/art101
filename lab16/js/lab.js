/* Lab 16 - JSON and APIs
Process JSON from API
Author: L Tachibana
Date: 9 June 2024 */

const URL = "https://xkcd.com/info.0.json";

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

let comicObj = $.ajax(ajaxParams);

// create ajax success callback
function ajaxSuccess(data){
   console.log("Data:", data);
   //parse json
        const title = data.title;
        const img = data.img;
        const alt = data.alt;
        

    //put joke in output div
        console.log(img);
        $("#output").append("<h1>TITLE:"+title);
        $("#output").append("<p>")
        $("#output").append("<img src='" + img + "' />");
        $("#output").append("<p>")
        $("#output").append("<p>DESCRIPTION: "+alt);
  
  };

// create ajax error callback
function ajaxError(request,error){
	console.log("Oops:", request, error);
  };