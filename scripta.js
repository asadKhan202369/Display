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
     
        to("#resources",{
            width:"80%",
            duration:.5,
        })
       . to("#resources",{
            left:0
        })
        .to("#resources",{
            width:"10%",
        })
        .to("#works",{
            delay:-1,
            width:"80%",
            duration:.5
        })
        .to("#works",{
            delay:-.1,
            left:"10%",
            duration:.4
        })
        .to("#works",{
            delay:-.4,
            width:"10%",
            duration:.2
        })
        .to("#about",{
            delay:-1,
            width:"80%"
        })
        . to("#about",{
            left:"20%"
        })
        .to("#about",{
            delay:-.5,
            width:"0%",
            duration:.3
        })
        .to("#nav #logo,#cnt,#mobile-button",{
          y:0,
          ease:Expo.easeInout,
        })
        .to("#text h1,#text p,#text img",{
          y:0,
          ease:Expo.easeInout,
          duration:1
        })
        .to(".para p,img",{
            y:0,
            opacity:1,
            ease:Expo.easeInout
        })
        .to("#resources h1",{
            y:0,
            duration:.5
         })
         .to("#resources img",{
            scale:1,
            delay:-.5
         })
         .to("#works h1",{
            delay:-.5,
            y:0,
         })
         .to("#works img",{
            scale:1,
            delay:-.5
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
  
  function navlineAnimation(){
    document.querySelector("#cnt")
    .addEventListener("mouseenter",function(dets){
      gsap.to(dets.target.children[1],{
          x:10,
          ease:Expo.easeInout,
          duration:.1
      })
    })
    document.querySelector("#cnt")
    .addEventListener("mouseleave",function(dets){
      gsap.to(dets.target.children[1],{
          x:0,
          ease:Expo.easeInout,
          duration:.5
      })
    })

    document.querySelector("#nav #picture")
    .addEventListener("mouseenter",function(dets){
      gsap.to(dets.target.children[0],{
           rotate:"45deg"
      })
    })
    document.querySelector("#nav #picture")
    .addEventListener("mouseleave",function(dets){
      gsap.to(dets.target.children[0],{
          rotate:"0deg"
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



an1();
mobilenav();
lineAnimation();
navlineAnimation();
