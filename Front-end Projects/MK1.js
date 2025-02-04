var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

document.addEventListener("mousemove", function(dets){
    blur.style.left = dets.x - 70 +"px"
    blur.style.top = dets.y - 70 +"px"
})

gsap.to("#navbar", {
    backgroundColor: "#000",
    height:"100px",
    delay:0.5,
    scrollTrigger:{
        trigger:"#navbar",
        scrollers: "body",
        // markers:true,
        start:"top -10%",
        end:"top-11%",
        scrub:1,
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})