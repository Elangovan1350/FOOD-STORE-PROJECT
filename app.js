import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, customElements);

const tl1 = gsap.timeline({ repeat: -1 });
tl1.to(".gift", {
  scale: 1.1,
  yoyo: true,
  duration: 0.5,

  ease: "power1.inOut",
});
tl1.to(".gift", {
  scale: 1,
  yoyo: true,
  duration: 0.5,
  ease: "power1.inOut(1.7 , 0.3)",
});

gsap.set(".wholePage", { display: "none" });

const tl2 = gsap.timeline();
gsap.set(".transition-box", { rotate: 180 });
tl2.from(".transition-box", {
  y: "-60dvh",
  duration: 1,
  ease: "elastic.out(0.9, 0.7)",
});
tl2.to(".transition-box", {
  y: "38dvh",
  ease: "elastic.out(0.9, 0.7)",
  duration: 1,
});
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
      gsap.set("transition-container", { display: "absolute", top: "-100vh" });
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

tl2.from(".navbar1", {
  y: "-10dvh",
  duration: 1,
  ease: "elastic.out(0.9, 0.7)",
});
