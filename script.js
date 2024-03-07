// function init(){
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       },   getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
    
// }
// init();

// document.querySelectorAll("#nav a").forEach((link, index) => {
//     link.addEventListener("click", (event) => {
//       const targetId = link.getAttribute("href");
//       gsap.to(window, {
//          duration: 1, 
//          scrollTo: { y: targetId, offsetY: 70 } 
//         });
//     });
//   });

//   document.querySelectorAll("#nav a").forEach((link, index) => {
//     link.addEventListener("click", (event) => {
//     //   event.preventDefault(); 
  
//       const targetId = link.getAttribute("href");
//       const targetElement = document.querySelector(targetId);
  
//       if (targetElement) { // Ensure target element exists
//         const targetY = targetElement.getBoundingClientRect().top + window.offsetY - 70; // Calculate accurate scroll position with offset
  
//         gsap.to(window, {
//           duration: 1,
//           ease: "power3.inOut", // Adjust ease for smooth scrolling feel
//           scrollTo: { y: targetY },
//         });
//       } else {
//         console.warn(`Target element with ID "${targetId}" not found.`); // Handle missing elements gracefully
//       }
//     });
//   });
  


//h1 animation
// function loadinganimation(){
    

//     gsap.from("#page1 h1",{
//         x:220,
//         y:220,
//         opacity:0,
//         delay:0.4,
//         duration:0.6,
//         stagger:0.3
//     })
// }
// loadinganimation()

// function mahakash(){
//   const heading = document.querySelector("#title");
//   heading.style.opacity = parseFloat(heading.style.opacity)+0.01;
//   if(heading.style.opacity <1){
//     requestAnimationFrame(mahakash);
//   }
// }
// mahakash();

//play button animation
// function videoconAnimation(){
//     var videocon = document.querySelector("#page1")
//     var playbtn = document.querySelector("#play")
//     var hintbtn = document.querySelector("#n5")
//     var hinttext = document.querySelector("#hint")
//     videocon.addEventListener("mouseenter",function(){
//         gsap.to(playbtn,{
//             scale:1,
//             opacity:1
//         })
//     })
//     videocon.addEventListener("mouseleave",function(){
//         gsap.to(playbtn,{
//             scale:0,
//             opacity:0
//         })
//     })
//     videocon.addEventListener("mousemove",function(dets){
//         gsap.to(playbtn,{
//             left: dets.x-70,
//             top: dets.y-80
//         })
//     })
//     hintbtn.addEventListener("mouseenter",function(){
//         gsap.to(hinttext,{
//             scale:1,
//             opacity:1
//         })
//     })
//     hintbtn.addEventListener("mouseleave",function(){
//         gsap.to(hinttext,{
//             scale:1,
//             opacity:0
//         })
//     })

// let isHintVisible = false;

//     hintbtn.addEventListener("click",function(){  
//         isHintVisible = !isHintVisible;
//         gsap.to(hinttext,{
//             duration: 0.3,
//             opacity: isHintVisible ? 1 : 0,
//             ease: "power2.inOut"
//         })
//     })
// }
// videoconAnimation()



// gsap.to("#page2>h1>span",{
//     scrollTrigger:{
//         trigger:  `#page2>h1>span`,
//         start: `top 80%`,
//         end: `top 35%`, 
//         scroller: `#page1`,
//         scrub: 0.1
//     },
//     stagger: 0.1,
//     color: `#fff` 
// })

// gsap.to("#page1 #title",{
//     x:-190,
//     duration:1,

//     scrollTrigger:{
//         trigger:"#page1 h1",
//         scroller:".main",
//         markers:true,
//         start:"top 90%",
//         end:"top 0",
//         scrub:2
//     }
// })

// function hintshow(){
//     const elementToToggle = document.getElementById("#hint"); // Replace with your selector

//     const toggleButton = document.getElementById("#play"); // Assuming a button with ID "toggleButton"
//     // If you're using another element for toggling, update the selector accordingly
    
//     toggleButton.addEventListener("click", function() {
//       if (elementToToggle.style.display === "none") {
//         elementToToggle.style.display = "block"; // Or other display value as needed
//       } else {
//         elementToToggle.style.display = "none";
//       }
//     });
// }
// hintshow();

function preloading(){
    var preloader = document.getElementById("preloader");
    window.addEventListener("load",function(){
        preloader.style.display = 'none';
    })
}
preloading();




   

   