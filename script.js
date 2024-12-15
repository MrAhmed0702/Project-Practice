let cur = document.querySelector("#cursor")
let blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (dets) => {
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    blr.style.left = dets.x - 200 + "px"
    blr.style.top = dets.y - 200 + "px"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 1,
    height: "110px",
    scrollTrigger:{
        trigger: "#nav",
        scoller: "#body",
        start: "top -10px",
        end: "top -11px",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -75%",
        scrub: 2
    }
})