var cur=document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets)
{
    cur.style.left=dets.x+"px"
    cur.style.top=dets.y+"px"

    
})

gsap.to(".nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: ".nav",
        start: "top top", // Change this to adjust when the effect starts
        end: "bottom top", // Change this to adjust when the effect ends
        scrub: 1
    }
});