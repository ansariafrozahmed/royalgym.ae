import Image from "next/image";
import React from "react";

const DownloadOurApp = () => {
  return (
    <div className="bg-templatePrimary">
      <div className="templateContainer flex flex-col mt-20  lg:flex-row gap-6 lg:gap-10 ">
        <div className="w-full md:w-1/2 py-8 my-auto space-y-3">
          <h2 className="text-white font-semibold uppercase tracking-wide text-2xl md:text-3xl lg:text-4xl">
            Download Our App
          </h2>
          <p className="text-white leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida.
          </p>
          <div className="flex gap-2">
            {/* APP STORE BUTTON */}
            <a
              href="https://apps.apple.com/ae/app/royal-gym/id6479743422"
              target="_blank"
              className="inline-block cursor-pointer"
            >
              <div className="bg-templateWhite hover:opacity-90 text-templateBlack flex gap-2 items-center justify-start py-2 px-3 rounded-lg">
                <Image
                  alt="app store"
                  height={30}
                  width={30}
                  className="h-6 w-6"
                  src={"/icons/app.png"}
                />
                <p className="leading-none text-[0.55rem]">
                  AVAILABLE ON THE
                  <br /> <span className="text-[0.7rem]">App Store</span>
                </p>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.allup.royalgymuae"
              target="_blank"
              className="inline-block cursor-pointer"
            >
              <div className="bg-templateWhite hover:opacity-90 text-templateBlack flex gap-2 items-center justify-start py-2 px-3 rounded-lg">
                <Image
                  alt="play store"
                  height={30}
                  width={30}
                  className="h-6 w-6"
                  src={"/icons/play.png"}
                />
                <p className="leading-none text-[0.55rem]">
                  AVAILABLE ON THE
                  <br /> <span className="text-[0.7rem]">Google Play</span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full hidden md:block md:w-1/2">
          <div className="flex items-center justify-end w-full -mt-20 gap-2">
            <Image
              src={"/images/mockup1.png"}
              alt="Download Our App"
              className="h-[350px] aspect-auto w-auto"
              height={800}
              width={800}
            />
            <Image
              src={"/images/mockup1.png"}
              alt="Download Our App"
              className="h-[350px] aspect-auto w-auto"
              height={800}
              width={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOurApp;
