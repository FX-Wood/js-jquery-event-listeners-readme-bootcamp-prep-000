//define functions here
function hey() {
  alert("Hey!")
}
function getIt()  {
  $('p').on("click", hey)
}

$(document).ready(function(){
  $('h1').on("clicked", (function() {alert("Hey!")})


});
