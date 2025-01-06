"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import "./loading.css";

const Loader = ({ onComplete }: any) => {
  useEffect(() => {
    // Loader Animation
    const counter3: any = document.querySelector(".counter-3");
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div: any = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        counter3.appendChild(div);
      }
    }
    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    // Animation for each counter (increased speed by reducing duration)
    function animate(counter: any, duration: any, delay = 0) {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration * 0.5, // faster animation by halving the duration
        delay: delay,
        ease: "power2.inOut",
      });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 3, // shorter delay for faster transition
      duration: 0.5, // faster transition
      ease: "power4.inOut",
    });

    gsap.from(".loader-1", {
      width: 0,
      duration: 3, // faster loader animation
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: 0,
      duration: 3, // faster loader animation
      delay: 1.5, // adjusted delay to maintain synchronization
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 4,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.3, // faster rotation
      delay: 4,
    });

    gsap.to(".loader-2", {
      x: -75,
      y: 75,
      duration: 0.3, // faster movement
      "<": "",
    });

    gsap.to(".loader", {
      scale: 40,
      duration: 0.7, // faster scaling
      delay: 5,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 0.7, // faster rotation and movement
      delay: 5,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 6,
      ease: "power1.inOut",
    });

    // On complete callback
    setTimeout(onComplete, 3000); // Allow time for all animations to complete
  }, [onComplete]);

  return (
    <div className="loading-screen z-[9999] bg-black">
      <div className="loader">
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>

      <div className="counter">
        <div className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 digit"></div>
      </div>
    </div>
  );
};

export default Loader;
