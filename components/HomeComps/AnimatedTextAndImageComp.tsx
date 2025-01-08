"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextAndImageComp = () => {
  useEffect(() => {
    gsap.fromTo(
      ".parallax-sectionn",
      { scale: 1, y: 0 },
      {
        scale: 1.3,
        y: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-sectionn",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="relative bg-white w-full">
      <div className="templateContainer flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="w-full flex flex-row items-center lg:flex-col gap-2 lg:w-[40%] relative overflow-hidden">
          <div className="lg:h-screen w-[55%] lg:w-full lg:hidden">
            <Image
              src={"/images/3.png"}
              alt=""
              className="lg:h-full w-full  object-cover"
              height={1000}
              width={600}
            />
          </div>
          <div className="lg:h-screen w-[55%] lg:w-full hidden lg:block parallax-sectionn">
            <Image
              src={"/images/3.png"}
              alt=""
              className="lg:h-full w-full  object-cover"
              height={1000}
              width={600}
            />
          </div>
          <div className="lg:h-screen -ml-6 lg:-ml-0 border-8 lg:border-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:shadow-none border-white w-[50%] lg:w-full relative">
            <Image
              src={"/images/1.png"}
              alt=""
              className="lg:h-full w-full object-cover"
              height={1000}
              width={600}
            />
          </div>
        </div>
        <div className="w-full lg:w-[60%] lg:sticky top-0 lg:h-screen flex flex-col items-start justify-center space-y-4 lg:space-y-5 text-[#242424]">
          <h2 className="text-3xl lg:text-7xl text-templatePrimary">
            Personal Training
          </h2>
          <h3 className="">Unleash Your True Potential</h3>
          <p className="">
            Join us to discover the transformative power of one- on-one personal
            training that will elevate your fitness and amplify your confidence.
          </p>
          <button
            className={`border mt-4 text-sm px-4 py-2 tracking-wide transition-all ease-in-out duration-200 bg-templatePrimary text-templateWhite border-templatePrimary hover:scale-95 active:scale-90`}
          >
            GET STARTED NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextAndImageComp;
