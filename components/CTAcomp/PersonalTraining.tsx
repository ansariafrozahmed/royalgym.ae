import Image from "next/image";
import React from "react";
import { SplitText } from "../ReactSpring/SplitText";

const PersonalTraining = () => {
  return (
    <div className="templateContainer flex flex-col lg:flex-row gap-6 lg:gap-10 py-4 lg:py-12">
      <div className="relative w-full lg:w-[50%] h-[280px] md:h-[400px] lg:h-[600px]">
        <Image
          src={
            "https://whgym.com/assets/images/sections/3-block.jpg?cache_v=1727952997"
          }
          className="h-full w-full rounded-xl object-cover"
          alt="FAQ Image"
          height={800}
          width={800}
        />
        <div className="hidden lg:block absolute -bottom-8 shadow -right-28 rounded-3xl bg-templateWhite p-4">
          <Image
            src={
              "https://whgym.com/assets/images/sections/3-secondary.jpg?cache_v=1691487100"
            }
            className="h-[300px] rounded-xl w-[300px] object-cover"
            alt="FAQ Image"
            height={800}
            width={800}
          />
        </div>
      </div>
      <div className="w-full lg:w-[50%] lg:pt-10 space-y-5">
        <div className="flex gap-2 lg:gap-5 lg:-ml-1">
          <SplitText
            text="Personal"
            className="text-[25px] lg:text-[36px] uppercase text-templatePrimary tracking-wide leading-none font-semibold"
            delay={50}
          />
          <SplitText
            text="Training"
            className="text-[25px] lg:text-[36px] uppercase text-templatePrimary tracking-wide leading-none font-semibold"
            delay={50}
          />
        </div>
        <p className="text-[14px] text-gray-600 tracking-wider leading-none">
          Unleash Your True Potential
        </p>
        <p className="text-[15px] lg:text-[16px] text-templateDark tracking-wider leading-normal lg:leading-snug">
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
    // <div className="templateContainer flex flex-col lg:flex-row gap-6 lg:gap-10 py-4 lg:py-12">
    //   <div className="w-[55%] grid grid-cols-2 gap-3 items-end">
    //     <Image
    //       src={
    //         "https://whgym.com/assets/images/sections/3-block.jpg?cache_v=1727952997"
    //       }
    //       className="w-full aspect-[2/3] object-cover rounded-xl"
    //       alt="FAQ Image"
    //       height={800}
    //       width={800}
    //     />
    //     <Image
    //       src={
    //         "https://whgym.com/assets/images/sections/3-block.jpg?cache_v=1727952997"
    //       }
    //       className="w-full aspect-[2/3] object-cover rounded-xl"
    //       alt="FAQ Image"
    //       height={800}
    //       width={800}
    //     />
    //   </div>
    //   <div className="w-[45%]"></div>
    // </div>
  );
};

export default PersonalTraining;
