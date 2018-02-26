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

function mailConfirm(){
  event.preventDefault();
  var successBar = document.getElementById("submitted-container");
  successBar.style.marginTop = 0;
  var seconds = 2;
  setInterval(function () {
    seconds--;
    if(seconds == 0) {
      successBar.style.marginTop = '-50px';
      window.location = "/index.html";
    }
  }, 1000);
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
