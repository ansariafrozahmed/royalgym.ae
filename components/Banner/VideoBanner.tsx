import Image from "next/image";
import React from "react";
import SocialMedia from "../HeaderFooter/SocialMedia";
import { BlurText } from "../ReactSpring/BlurText";

const VideoBanner = ({ bannerVideo }: { bannerVideo: string }) => {
  // const bannerData = await fetchBannerVideo();

  return (
    <div className="relative h-[100svh] bg-black w-[100%]">
      {/* VIDEO */}
      <video
        className=" h-full w-full object-cover"
        playsInline
        preload="none"
        loop
        autoPlay
        muted
      >
        <source
          src={bannerVideo || "/videos/newhomebanner.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      {/* H1 TEXT */}
      <div className="absolute inset-0 flex gap-2 flex-col templateContainer items-start lg:items-center  justify-end lg:justify-end pb-20">
        <div data-aos="fade-down">
          <Image
            src={"/logos/alain2.png"}
            alt=""
            height={200}
            width={200}
            className="w-16 md:w-20 lg:w-16"
          />
        </div>
        <BlurText
          text="The biggest ladies Only"
          className="text-templatePrimary leading-tight lg:leading-[1.1] lg:text-center text-4xl md:text-[45px] lg:text-5xl uppercase font-bold"
          delay={50}
        />
        <BlurText
          text="Gym in Al Ain"
          className="text-templateWhite leading-tight lg:leading-[1.1] lg:text-center text-4xl md:text-[50px] lg:text-5xl uppercase font-bold"
          delay={50}
        />
      </div>
      {/* SOCIAL MEDIA */}
      <div className="absolute right-5  bottom-5">
        <SocialMedia />
      </div>
    </div>
  );
};

export default VideoBanner;
