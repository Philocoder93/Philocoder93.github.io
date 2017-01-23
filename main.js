$(document).ready(function(){
  $("img").on( "mouseover", function() {
    console.log("firing");
    $(this).animate({
      width: "75px",
      height: "75px"
    }, 400 );
  });
  $("img").on( "mouseout", function() {
    console.log("firing");
    $(this).animate({
      width: "50px",
      height: "50px"
    }, 400 );
  });
})
