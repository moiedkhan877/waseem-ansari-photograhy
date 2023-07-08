
var menu = document.querySelector("h3");
var full = document.querySelector(".fullscreen");
console.log(full)
var cross = document.querySelector(".cross");
console.log(full)
var flag = 0;

cross.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = '0%';
    menu.innerHTML ='<i class="ri-close-line"></i>';
    flag = 1
  } else if(flag==1){
    full.style.top = "-100%";
    full.background = "blue"
    menu.innerHTML =' <i class="ri-menu-3-line"></i>';
    flag = 0
  }
});
