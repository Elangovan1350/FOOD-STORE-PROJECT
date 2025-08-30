import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CustomEase } from "gsap/CustomEase";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(
  DrawSVGPlugin,
  ScrollTrigger,
  ScrollSmoother,
  CustomWiggle,
  CustomEase
);

// create the scrollSmoother before your scrollTriggers
let smooth = ScrollSmoother.create({
  smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.5,
  // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

// smooth slide for a tags

let link = [
  {
    atag: "#whyUs",
    content: "#whyChooseUs",
  },
  {
    atag: "#menu",
    content: "#exploreMenu",
  },
  {
    atag: "#food",
    content: "#freshFood",
  },
  {
    atag: "#pay",
    content: "#payment",
  },
  {
    atag: "#gift",
    content: "#giftBox",
  },
  {
    atag: "#fellow",
    content: "#followUs",
  },
];

{
  link.map((e) => {
    document.querySelector(e.atag).addEventListener("click", (element) => {
      smooth.scrollTo(e.content, 1, "-10%");
      element.preventDefault();
    });
  });
}

CustomWiggle.create("myWiggle", {
  wiggles: 5,
  type: "easeInOut",
});

// gift change animation

gsap.to(".gift", {
  rotate: 3,
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  transformOrigin: "bottom",
  ease: "myWiggle",
});

// patment change animation
gsap.to([".foodImage", ".paymentImage"], {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut",
});

//  transition animation

gsap.set(".wholePage", { display: "none" });

const tl2 = gsap.timeline();
gsap.set(".transition-box", { rotate: 90 });
tl2.from(".transition-box", {
  x: "-120dvh",
  duration: 1,
  delay: 0.2,
  ease: "power1.inOut",
});
tl2.to(
  ".to",
  {
    x: "70dvw",
    duration: 1,
    ease: "power1.inOut",
  },
  "-=0.22"
);
tl2.to(".transition-box", {
  rotate: 180,
  duration: 0.5,
  ease: "elastic.out(0.9, 0.7)",
});

tl2.to(".transition-box", {
  y: "38dvh",
  ease: "power1.inOut",
  duration: 1,
});
tl2.to(
  ".foodMunch",
  {
    y: "60vh",
    duration: 1,
    ease: "power1.inOut",
  },
  "<+0.12"
);
tl2.to(".transition-box", {
  rotate: 0,
  ease: "elastic.out(0.9, 0.7)",
  duration: 1,
});
tl2.to(".transition-box", {
  y: "-100vh",
  ease: "power1.inOut",
  duration: 1,
});
tl2.to(
  ".transition-container",
  {
    y: "-100vh",
    ease: "power1.inOut",
    duration: 1,
    onComplete: () => {
      gsap.set(".transition-container", { display: "none" });
      gsap.set(".wholePage", { display: "block" });

      gsap.from(".followBox", {
        scrollTrigger: {
          trigger: ".followBox",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
        x: "150vh",
        duration: 1.5,
        ease: "elastic.out(0.9,1)",
        stagger: 0.2,
        overflowX: "hidden",
        onStart: () => {
          gsap.set(".follow", { opacity: 0 });
        },
        onComplete: () => {
          gsap.set(".follow", { opacity: 1 });
          gsap.from(".svgAnimate", {
            drawSVG: 0,
            duration: 1,

            ease: "power1.inOut",
            stagger: 0.2,
          });
        },
      });
    },
  },
  "<-0.5"
);

// navbar animation

tl2.from(".navbar1", {
  y: "-10dvh",
  duration: 1,
  ease: "elastic.out(0.9, 0.7)",
  stagger: 0.2,
});
