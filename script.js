function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

function an1(){
  var tl = gsap.timeline();
  tl.
      from("#works",{
           height:0,
           duration:.5,
           ease:Power3.easeInout
      })
      .from("#about",{
        delay:-.2,
        height:0,
        duration:.5,
        ease:Power3.easeInout
      })
      .to("#works img",{
            scale:1,
            duration:.5
      })
      .to("#about img",{
         scale:1,
         delay:-.5
       })
      .to("#nav #logo,#cnt,#mobile-button",{
        y:0,
        ease:Expo.easeInout,
      })
      .to("#text h1,#text p",{
        y:0,
        opacity:1,
        ease:Expo.easeInout,
        duration:1
      })
      .to("#text img",{
        opacity:1
      })
      .to("#resources h1",{
          y:0,
          duration:.5
       })
       .to("#about h1",{
          delay:-.5,
          y:0,
       })
       .to(".ptext",{
           opacity:1
       })
}


function lineAnimation(){
  document.querySelectorAll(".t3m")
.forEach(function(text){
  text.addEventListener("mouseenter",function(dets){
       gsap.to(dets.target.children[1],{
           width:"100%",
           ease:Expo.easeInout,
           duration:.2
    })
  })
})
document.querySelectorAll(".t3m")
.forEach(function(text){
  text.addEventListener("mouseleave",function(dets){
       gsap.to(dets.target.children[1],{
           width:"0%",
           left:"100%",
           ease:Expo.easeInout,
           duration:.2,
           onComplete:function(){
              dets.target.children[1].style.left=0;
           }
    })
  })
})
}

function mobilenav(){
  document.querySelector("#nav #mobile-button")
  .addEventListener("click",function(){
      document.querySelector("#mobilenav").style.transform="translateX(0)";
      document.querySelector("#nav").style.display ="none";

  })
  document.querySelector("#mnav i")
  .addEventListener("click",function(){
      document.querySelector("#mobilenav").style.transform="translateX(100%)";
      document.querySelector("#nav").style.display ="flex";
  })
}

loco();
mobilenav();
lineAnimation();
an1();




gsap.to("#nav",{
  scrollTrigger:{
     scroller:"#main",
     trigger:".ptext",
     start:"top 60%",
     markers:true
  },
  backgroundColor:"#f9f5ef"
  // opacity:0
})