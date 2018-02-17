// Side Nav
function openSideMenu(){
  document.getElementById('side-menu').style.width = '90%';
  document.body.style.overflowY = "hidden";
}
function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.body.style.overflowY = "visible";
}

// Nav Fixed Top
window.onscroll = function(){fixedNav()};
var navigation = document.getElementById('navigation');
var sticky = navigation.offsetTop;
function fixedNav(){
  if (window.pageYOffset >= sticky){
    navigation.classList.add('fixed');
    document.getElementById('blog-header').style.marginTop = '50px';
  } else {
    navigation.classList.remove('fixed');
  }
}
