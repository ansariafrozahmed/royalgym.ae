"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../ReactSpring/SplitText";
import { ChevronRight } from "lucide-react";
import { ourClasses } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const OurClasses = () => {
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardSectionRef.current;
    const section = sectionRef.current;

    if (element && section) {
      gsap.to(element, {
        x: () => -(element.scrollWidth - element.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${element.scrollWidth - element.offsetWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="templateContainer h-screen  w-full flex flex-col lg:flex-row gap-8 items-center justify-center overflow-hidden"
    >
      <div className="w-full text-center lg:text-left lg:w-[20%] lg:my-auto space-x-4 lg:space-x-0 lg:space-y-1">
        <SplitText
          text="Our"
          className="text-[35px] lg:text-[40px] uppercase text-templatePrimary tracking-wide leading-none font-semibold"
          delay={50}
        />
        <SplitText
          text="Classes"
          className="text-[35px] lg:text-[40px] uppercase text-templatePrimary tracking-wide leading-none font-semibold"
          delay={50}
        />
      </div>
      {/* CARD SECTION */}
      <div
        ref={cardSectionRef}
        className="flex gap-5 w-full bg-white lg:w-[80%] relative"
      >
        {ourClasses.map((item, index) => (
          <div
            key={index}
            className="h-[400px] group aspect-[4/5] w-[300px] relative"
          >
            <div className="h-full w-full overflow-hidden rounded-md">
              <Image
                src={
                  "https://img.freepik.com/free-photo/strong-arms_1098-13901.jpg?t=st=1735381832~exp=1735385432~hmac=ba64280f692f17ade67afac4562b710d1ec19648e8d40ea0871a6eae7deae6c3&w=740"
                }
                alt={`Image ${index + 1}`}
                height={600}
                width={600}
                className="h-full w-full group-hover:scale-100 scale-105  transition-all ease-in-out duration-300 object-cover"
              />
            </div>
            <div className="absolute rounded-md overflow-hidden inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-[24px] lg:text-[24px] tracking-wide capitalize text-templateWhite group-hover:text-templatePrimary leading-tight">
                {item.courseName}
              </h3>
              <ChevronRight
                size={30}
                className="text-templateWhite group-hover:text-templatePrimary"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClasses;
