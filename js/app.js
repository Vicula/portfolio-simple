
var menuToggle = document.querySelector('.navigation__button');
var menu = document.querySelector('.navigation__menu');
var skillsBox = document.querySelector('.skills');
var onOff = false;

var menuFunc = function(){
  // console.log(menuToggle.class)
  if(onOff === false){
    onOff = true
    // console.log(menuToggle)
    menuToggle.className = "navigation__button on"
    menu.className = "navigation__menu"
    // console.log(menuToggle.class)
  } else {
    // console.log('tickle')
    onOff = false
    menuToggle.className = "navigation__button"
    menu.className = "navigation__menu u__hidden"
  }
}

skillsBox.scrollLeft = 460;

menuToggle.addEventListener("click", menuFunc);
