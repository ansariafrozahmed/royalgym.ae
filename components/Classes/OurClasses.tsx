"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ourClasses } from "@/lib/constants";
import ClassesCard from "../Cards/ClassesCard";

const OurClasses: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardSection = cardSectionRef.current;
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (cardSection && section && heading) {
      // Scroll animation for card section
      gsap.to(cardSection, {
        x: () => -(cardSection.scrollWidth - cardSection.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${cardSection.scrollWidth - cardSection.offsetWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Only apply the GSAP animation for the heading if it's not a mobile screen
      if (window.innerWidth >= 1024) {
        // Hide and show AboutUsHeading (only for large screens)
        gsap.fromTo(
          heading,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "center center",
              end: "center+=20% center",
              scrub: true,
            },
          }
        );
      } else {
        // For mobile, hide the heading by default without GSAP
      }
    }
  }, []);

  return (
    <div ref={sectionRef} className="bg-white w-full">
      <div className="templateContainer h-screen w-full flex flex-col lg:flex-row gap-8 items-center justify-center overflow-hidden">
        {/* Section Title */}
        <div
          ref={headingRef}
          className="w-full text-center lg:text-left lg:w-[20%] lg:my-auto space-x-4 lg:space-x-0 lg:space-y-1"
        >
          {/* <BlurText
          text="Our Classes"
          className="text-[35px] lg:text-[40px] uppercase text-templatePrimary tracking-wide leading-none font-semibold"
          delay={50}
        /> */}
          <h2 className="text-[35px] lg:text-[40px] uppercase text-templatePrimary tracking-wide leading-none font-semibold">
            Our Classes
          </h2>
        </div>

        {/* Card Section */}
        <div
          ref={cardSectionRef}
          className="lg:w-[80%] flex gap-5 w-full relative"
        >
          {ourClasses.map((item, index) => (
            <ClassesCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
