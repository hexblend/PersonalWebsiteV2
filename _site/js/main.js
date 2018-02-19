// Side Nav
var sideMenu = document.getElementById('side-menu');

function openSideMenu(){
  sideMenu.style.width = '92%';
  sideMenu.style.boxShadow = "50px 1px 500px 2px rgba(0,0,0,0.7)";
  document.body.style.overflowY = "hidden";
}
function closeSideMenu(){
  sideMenu.style.width = '0';
  sideMenu.style.boxShadow = "none";
  document.body.style.overflowY = "visible";
}

$(document).ready(function(){
    // Sticky Nav
    $("#sticker").sticky({topSpacing:0});

    // Smooth Scrolling
    $("#scroll-btn").click(function(){
      $('html, body').animate({
          scrollTop: $("#portfolio").offset().top
      }, 600);
    });
});
