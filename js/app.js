

let span = document.querySelector(".up");


window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top:400,
    behavior: "smooth",
  });
};
let span2 = document.querySelector(".fy");


window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000? span2.classList.add("show") : span2.classList.remove("show");
};

span2.onclick = function () {
  window.scrollTo({
    top:1000,
    behavior: "smooth",
  });
};



let sec3=document.querySelector(".sec3");
window.onscroll=function(){
  this.scrolly>=1000? sec3.classList.add("show"):ssec3.classList.remove("show");
}
sec3.onclick=function(){
  window.scrollTo({
    top:1600,
    behavior:"smooth",
  })
}


let sec4=document.querySelector(".sec4");
window.onscroll=function(){
  this.scrollY>=1000? sec4.classList.add("show"):sec4.classList.remove("show");


}
sec4.onclick=function(){
  window.scrollTo({
    top:1900,
    behavior:"smooth",
  })
}



 var sec1=document.querySelector("#section1");
  window.onscroll=function(){

    sec4.style.background="#0096c7"
 }
 window.onscroll=function(){
  document.querySelectorAll("section").forEach(function(active){
    if(
      active.getBoundingClientRect().top>=-400 &&
      active.getBoundingClientRect().top<=150 
    ) {
      active.classList.add("your-active-class");
    }else{
      active.classList.remove("your-active-class");
    }
  });
};