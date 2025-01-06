import Image from "next/image";
import React from "react";
import { SplitText } from "../ReactSpring/SplitText";
import { BlurText } from "../ReactSpring/BlurText";

const ReformerPilates = () => {
  return (
    <div className="relative">
      <Image
        src={
          "https://www.datocms-assets.com/74077/1669251620-reformerpilates_hero.jpg?w=1600"
        }
        alt=""
        className="h-[500px]  object-cover object-top"
        height={500}
        width={1600}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="inset-0 absolute flex flex-col items-center justify-end text-templateWhite pb-6 lg:pb-10">
        <div className="space-x-3 lg:space-x-5 text-center">
          <SplitText
            text="Reformer"
            className="text-[28px] lg:text-[40px] uppercase text-templateWhite tracking-wider leading-none font-semibold"
            delay={50}
          />
          <SplitText
            text="Pilates"
            className="text-[28px] lg:text-[40px] uppercase text-templateWhite tracking-wider leading-none font-semibold"
            delay={50}
          />
        </div>
        <p className="text-[15px] text-center lg:text-[18px] text-templateWhite tracking-wider lg:leading-none">
          Joun our pilates classes today! <br className="md:hidden" />
          <span className="text-templatePrimary font-semibold">
            ( 10 SESSIONS DEAL )
          </span>
        </p>
        <button
          className={`border mt-4 text-sm px-4 py-2 tracking-wide transition-all ease-in-out duration-200 bg-templatePrimary text-templateWhite border-templatePrimary hover:scale-95 active:scale-90`}
        >
          REGISTER NOW!
        </button>
      </div>
    </div>
  );
};

export default ReformerPilates;
