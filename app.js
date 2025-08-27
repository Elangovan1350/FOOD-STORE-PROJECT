import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

gsap.set("svg", { opacity: 0 });

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
    gsap.set("svg", { opacity: 0 });
  },
  onComplete: () => {
    gsap.set("svg", { opacity: 1 });
    gsap.from(".svgAnimate", {
      drawSVG: 0,
      duration: 2,

      ease: "power1.inOut",
      stagger: 0.2,
    });
  },
});
