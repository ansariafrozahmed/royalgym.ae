"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { SplitText } from "../ReactSpring/SplitText";
import { ourClasses, ourTrainers } from "@/lib/constants";
import ClassesCard from "../Cards/ClassesCard";
import { BlurText } from "../ReactSpring/BlurText";
import TrainersCard from "../Cards/TrainersCard";

const OurTrainers: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardSection = cardSectionRef.current;
    const section = sectionRef.current;

    if (cardSection && section) {
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
    }
  }, []);

  return (
    <div className="templateContainer">
      <div
        ref={sectionRef}
        className=" h-screen space-y-6 w-full overflow-hidden flex flex-col items-end justify-center"
      >
        <div className="text-center space-y-3">
          <div>
            <BlurText
              text="MEET OUR"
              className="text-[25px] lg:text-[36px] uppercase text-templatePrimary tracking-wide text-center leading-tight font-semibold"
              delay={50}
            />
            <BlurText
              text="TRAINER'S SQUAD"
              className="text-[25px] lg:text-[36px] uppercase text-templatePrimary tracking-wide text-center leading-tight font-semibold"
              delay={50}
            />
          </div>
          <p className="text-xs md:text-sm tracking-wide text-gray-700 lg:px-20">
            Meet the expert trainers at Royal Gym, each bringing extensive
            qualifications and experience to guide you on your fitness journey.
            {/* <span className="hidden md:block"> */}
            With specialized knowledge across various training disciplines, our
            team is here to tailor programs that meet your unique goals.
            Discover why Royal Gym is the ultimate choice for achieving your
            best self.
            {/* </span> */}
          </p>
        </div>
        <div ref={cardSectionRef} className="flex gap-5 h-auto w-full relative">
          {ourTrainers.map((item, index) => (
            <TrainersCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTrainers;
