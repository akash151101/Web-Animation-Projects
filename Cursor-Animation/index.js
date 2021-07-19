
let mouseCursor = document.querySelector(".cursor");
let navLink = document.querySelectorAll("li .nav-link");
document.addEventListener("mousemove", function(event){
     mouseCursor.style.top = event.pageY + "px";
     mouseCursor.style.left = event.pageX + "px";
});
for(var i=0;i<navLink.length;i++){
  navLink[i].addEventListener("mouseover", function(){
    mouseCursor.classList.add("cursor-hover");
    this.style.color="white";
  });
  navLink[i].addEventListener("mouseleave", function(){
    mouseCursor.classList.remove("cursor-hover");
    this.style.removeProperty("color");
  });
}
