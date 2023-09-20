/* Menu - nav */
$("#menu_img").click(function () { 
  $("#navigation").toggle(1000);
});
/* Menu - nav */

/* First div */
 $(".info-content").hide();
 $(".info-title").click(function () { 
  $(".info-content").slideToggle(1000);
}); 
/* First div */

 /* Second div */
$( ".content-box" ).click(function(){
  $( ".content-box" ).animate({
    width: "100%",
    height: "200px",
      }, 2000 );
  $(".content-after").show().animate({opacity: "1"},3000);
});
/* Second div */

/* Third div - This part above makes my password hide or show */

$(".form").hide();
 $(".form-title").click(function () { 
  $(".form").slideToggle(1000);
}); 

let viewLoginPwd = false;

function changePwdView ()
{
  let getPwdView = $("#pass");

  if(viewLoginPwd === false)
  {
    getPwdView.attr("type","text");
    viewLoginPwd = true;
  }
else if (viewLoginPwd === true) {
  getPwdView.attr("type","password");
  viewLoginPwd = false;
  }
}
/* Third div */

/* Fourth div - It sends an alert with the src link of your image in background */

$("#img-btn").click(function(){
  var image = $("#imagex").attr("src");
  alert(image);      
});

$(".img-box").hide();
 $(".img-title").click(function () { 
  $(".img-box").slideToggle(1000);
}); 

/* Fourth div */

/* Fifth div */
$(".hover-p").hide();
$('.hover-title').mouseover(function() {
  $('.hover-p').stop(true, true).show(1000);
}).mouseout(function() {
  $('.hover-p').stop(true, true).hide(1000);
});
/* Fifth div */



/* Sixth div - toggle + showing coordinates*/

$(".coord-p").hide();
$(".coord-title").click(function(){
  $(".coord-p").toggle(1000);
});

$(document).on('mousemove', function (e){
  $(".coords").html("X: "+e.pageX +', Y:'+ e.pageY);
});
/* Sixth div */






