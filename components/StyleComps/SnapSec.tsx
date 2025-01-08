"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const SnapSec = () => {
  const headlineRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <div
      ref={sectionRef}
      className="h-screen sectionn flex items-center justify-center "
    >
      <h2 ref={headlineRef}>SECTION</h2>
    </div>
  );
};

export default SnapSec;
