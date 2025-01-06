import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex gap-2">
      <a href="https://www.facebook.com/share/1DsED1QBTC/" target="_blank">
        <Image
          src={"/icons/facebook.webp"}
          alt=""
          height={30}
          className="transition-all duration-200 hover:scale-110 active:scale-95 ease-in-out"
          width={30}
        />
      </a>
      <a href="https://www.instagram.com/royalgymae/" target="_blank">
        <Image
          src={"/icons/instagram.webp"}
          className="transition-all duration-200 hover:scale-110 active:scale-95 ease-in-out"
          alt=""
          height={30}
          width={30}
        />
      </a>
      <a
        href="https://www.youtube.com/@RoyalGym-AlAinLadiesClub"
        target="_blank"
      >
        <Image
          src={"/icons/youtube.png"}
          className="transition-all duration-200 hover:scale-110 active:scale-95 ease-in-out"
          alt=""
          height={30}
          width={30}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
