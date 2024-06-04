/* Lab 12 - Conditionals
Working with conditionals to sort people into categories based on input
Author: L Tachibana
Date: 30 May 2024 */

function assignChara () {
    var str = $("#input").val();
    var length = str.length
    
    const numOfCampaigns = 3
    var div = length%numOfCampaigns
    
    if (div == 0) {
    console.log("Bahumia");
      if (length <= 6) {
      console.log("Moonshine");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Moonshine Cybin! Watch a Crick call lightning! </p>")

      } else if (length <=9) {
      console.log("Hardwon");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Hardwon Surefoot! Watch this! </p>")

      } else if (length <=12) {
      console.log("Balnor");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Balnor the Brave! ....Chicken. </p>")
      
      } else if (length > 12) {
      console.log("Beverly");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Beverly Toegold V! Faewild... Gay child! </p>")
     }}
      
    else if (div == 1) {
    console.log("Eldermourne");
      if (length <= 7) {
      console.log("Zirk");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Zirk Vervain! </p>")

      } else if (length <=10) {
      console.log("Fia");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Fia Boginya! </p>")

      } else if (length <=13) {
      console.log("Henry");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Henry Hogfish! </p>")

      } else if (length > 13) {
      console.log("Bukvar");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Bukvar! </p>")

    }}
    
    else {
    console.log("Ba-TWO-mia");
      if (length <= 8) {
      console.log("Sol");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Solum Bufo! I AM HER LADY AND SHE IS MY LORD! </p>")

      } else if (length <=11) {
      console.log("Callie");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Calliope Petrichor! We're duck team, we suck!! </p>")

      } else if (length <=14) {
      console.log("Calder");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Calder Kilde! Winter looks good on you. </p>")

      } else if (length > 14) {
      console.log("Kenna");
      $("#output-name").html("<p id='output-name'> Your assigned NADDPOD Character is: Kenna Ironheart! A squire never tires! </p>")
    }}
  };
  
  $("#button").click(assignChara);

//   $("#button").click(function(){
//     console.log("HI")
//   });