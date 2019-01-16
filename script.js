// Create Eventlistener

// console.log("test");


//  Vanilla Javascript Exercise.
// Load External API quote
// document.getElementById("button").addEventListener('click', loadText);
// function loadText() {
//   // console.log("button clicked");
//   var xhr = new XMLHttpRequest();
//
//   xhr.open("GET", "https://thatsthespir.it/api", true);
//
//   xhr.onload = function() {
//     if (this.status == 200) {
//       var newQuote = JSON.parse(this.responseText);
//       console.log(newQuote);
//       // document.getElementById("quote").innerHTML = this.responseText;
//       var output = "";
//       // for(var i in newQuote) {   }
//       output +=
//         '<h3>' + newQuote.quote + '</h3>' +
//         '<img src="' + newQuote.photo + '" width="300" heigth="400">' +
//         '<p>' + newQuote.author + '</p>'
//
//       document.getElementById("quote").innerHTML = output;
//
//     } else if (this.status = 404) {
//       document.getElementById("quote").innerHTML = "Not Found";
//     }
//   }
//   xhr.send(); //necessary
// }

// Jquery Version

$(document).ready(function() {

  // $("#quote").load("https://thatsthespir.it/api");
  $("button").click(function(){

  $.ajax({
    method: "GET",
    url: "https://thatsthespir.it/api",
    dataType: "json"
  }).done(function(data) {
    console.log(data);

    $("#quote").html(
      '<h3>' + data.quote + '</h3>' +
      '<img src="' + data.photo + '" width="300" heigth="400">' +
      '<p>' + data.author + '</p>'
    );

  });
});





});
