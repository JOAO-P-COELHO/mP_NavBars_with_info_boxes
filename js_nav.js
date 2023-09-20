$("#menu_img").click(function () { 
  $("#navigation").toggle(1000);
});

 $(".info-content").hide(); 

 $(".info-title").click(function () { 
  $(".info-content").slideToggle(1000);
});

 
$( ".content-box" ).click(function(){
  $( ".content-box" ).animate({
    width: "100%",
    height: "200px",
      }, 2000 );
  $(".content-after").show().animate({opacity: "1"},3000);
});


/* This part above makes my password hide or show */
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



