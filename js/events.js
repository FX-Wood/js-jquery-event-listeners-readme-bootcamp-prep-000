function getIt()  {
  $('p').on("click", function() {alert("Hey!")})
}
function frameIt()  {
  $('img').on("load", addAClass)
}
function addAClass(element, classToAdd)  {
  $(`${element}`).addClass(`${classToAdd}`)
}
$(document).ready(function(){
  getIt()
  frameIt()


});
