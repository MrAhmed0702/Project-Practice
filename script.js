let cur = document.querySelector("#cursor")
let blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (dets) => {
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    blr.style.left = dets.x - 200 + "px"
    blr.style.top = dets.y - 200 + "px"
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        cur.style.scale = 3;
        cur.style.border = "1px solid #fff";
        cur.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", () => {
        cur.style.scale = 1;
        cur.style.border = "0px solid #95C11E";
        cur.style.backgroundColor = "#95C11E";
    });
});

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

gsap.from("#about-us img, .writing", {
    y:50,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#about-us",
        scoller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".card ",
        scoller: "body",
        start: "top 85%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });