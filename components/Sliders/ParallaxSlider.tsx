"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const SimpleSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/1.webp", "/images/2.webp", "/images/3.webp"];
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sliderRef.current;

    if (container) {
      // Animate the slider to show the current image
      gsap.to(container, {
        x: `-${currentImage * 100}vw`, // Move to the selected slide
        duration: 0.2, // Animation duration
        ease: "power2.inOut", // Smooth easing
      });
    }
  }, [currentImage]);

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative h-[100svh] overflow-hidden">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className={`flex h-full w-[${images.length}00vw] transition-transform duration-1000`} // Adjust width for the total number of slides
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-full w-[100vw] bg-black flex-shrink-0 items-center justify-center flex flex-col lg:flex-row" // Each slide takes 100% of the viewport width
          >
            <div className="w-full lg:w-[60%] h-[40%] lg:h-full relative">
              <Image
                height={1000}
                width={1000}
                quality={100}
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div> */}
            </div>
            <div className="w-full lg:w-[40%]  h-[60%] lg:h-full bg-black text-white">
              <div className="p-4 lg:p-8 my-auto h-full flex flex-col  lg:justify-center">
                <h2 className="text-lg lg:text-2xl tracking-wide font-bold uppercase">
                  Trainers Name
                </h2>
                <p className="mt-2 lg:mt-4 text-xs lg:text-sm w-full ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac nunc ac nisi ultrices tincidunt.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /> */}

      <div className="flex flex-col lg:flex-row-reverse items-end lg:items-center justify-center lg:justify-between absolute inset-x-0 bottom-0 p-2 lg:p-4">
        {/* Navigation Controls */}
        <div className="p-4 overflow-x-auto no-scroll w-full lg:w-auto flex items-center justify-center gap-1">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageChange(index)}
              className={`h-[35px] w-[55px] border border-transparent cursor-pointer transition-all ease-in-out duration-200 hover:border-white ${
                currentImage === index ? "border-white scale-90" : ""
              }`}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center text-xs w-full lg:w-auto justify-center gap-1.5  text-white">
          <span>{currentImage + 1}</span>
          {/* <span className="w-[10px] h-[1px] bg-white block"></span> */}
          <span>-</span>
          <span>{images.length}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
