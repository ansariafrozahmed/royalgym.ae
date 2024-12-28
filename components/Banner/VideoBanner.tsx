import Image from "next/image";
import React from "react";
import SocialMedia from "../HeaderFooter/SocialMedia";
import { BlurText } from "../ReactSpring/BlurText";

const fetchBannerVideo = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/wp-json/wp/v2/home-page-video?_fields=meta`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }
    const data = await response.json();
    if (data.length > 0) {
      return data[0].meta.video;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const VideoBanner: React.FC = async () => {
  const bannerData = await fetchBannerVideo();

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
          src={bannerData ? bannerData : "/videos/newhomebanner.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent lg:from"></div>
      {/* H1 TEXT */}
      <div className="absolute inset-0 flex gap-2 flex-col templateContainer items-start lg:items-center  justify-end lg:justify-end pb-14">
        <Image
          src={"/logos/alain2.png"}
          alt=""
          height={150}
          width={150}
          className="w-16"
        />
        <BlurText
          text="The biggest ladies Only"
          className="text-templatePrimary leading-tight lg:leading-tight lg:text-center text-4xl lg:text-5xl uppercase font-bold"
          delay={50}
        />
        <BlurText
          text="Gym in Al Ain"
          className="text-templateWhite leading-tight lg:leading-tight lg:text-center text-4xl lg:text-5xl uppercase font-bold"
          delay={50}
        />
      </div>
      {/* SOCIAL MEDIA */}
      <div className="absolute right-5  z-40 bottom-5">
        <SocialMedia />
      </div>
    </div>
  );
};

export default VideoBanner;
