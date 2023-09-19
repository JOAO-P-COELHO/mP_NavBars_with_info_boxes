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


