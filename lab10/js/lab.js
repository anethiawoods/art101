/* Lab 10 - JavaScript for the Web
Generating gibberish dialogue by clicking a button
Author: L Tachibana
Date: 9 May 2024 */

//function to generate random simlish
function generateSimlish() {
    const text = "Nart smee worten dag charba mebbiwaba bloo, gloopy flooz woohoo aw. Chum-cha chum-cha zaroo swaybe ah wanbah gork. Nerk yarma vana, kowlenin grauw, marf na smustle mek hipta lalo ooba badipsa renato. Meepso meepso nono moocha gam. Dag awasa welb frabbit roo afenk kipsy kowlenin dorby hipta zerpa jepsi snoz. Worten hipta gir flurze sugnorg, apper oosh norb frabbit frooby wepsa blousa bweb. Nib gir shushubie evawop, bweb, bloo, disgrobel oosh.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Simlish text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Simlish text
    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
$("#yapping-generator").click(function(){
    // get new fake dialogue
    const newText = generateSimlish();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

function respond() {
  //retrieve user's reply
  let reply = window.prompt("Type reply:");
  //return reply
  return reply;
};

//when button is clicked, run 'respond' function
$("#respond").click(function(){
  //get the reply
  let newReply = respond();
  //append as a new div to the output div
  $("#output").append('<div id="parent"><div class="reply"><p>' + newReply + '</p></div><div>');
});