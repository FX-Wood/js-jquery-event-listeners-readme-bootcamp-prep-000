//define functions here
function hey() {
  alert("Hey!")
}


$(document).ready(function(){
  function getIt()  {
    $('p').on("click", hey)
  }

});
