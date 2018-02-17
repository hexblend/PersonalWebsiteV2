// Side Nav
function openSideMenu(){
  document.getElementById('side-menu').style.width = '100%';
}
function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';
}

// Nav Fixed Top
window.onscroll = function(){fixedNav()};
var navigation = document.getElementById('navigation');
var sticky = navigation.offsetTop;
function fixedNav(){
  if (window.pageYOffset >= sticky){
    navigation.classList.add('fixed');
  } else {
    navigation.classList.remove('fixed');
  }
}
