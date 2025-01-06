import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import { menu, usefulLinks } from "@/lib/Menu";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/footer-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-templateWhite"
    >
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div className="templateContainer py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
        <div className="space-y-5">
          <Link href={"/"}>
            <Image
              src={"/logos/1.png"}
              alt="logo"
              height={100}
              width={200}
              className="w-[70%] object-contain"
            />
          </Link>
          <p className="text-sm font-light">
            Counting on the best protein for muscle recovery can never be other
            than the right fuel that everyone loves!
          </p>
          <h2 className="text-xl font- tracking-wide">FOLLOW US</h2>
          <div className="inline-block">
            <SocialMedia />
          </div>
        </div>
        {/* ------------ */}
        <div className="space-y-4">
          <h2 className="text-xl font- tracking-wide">QUICK LINKS</h2>
          <div className="w-[100px] h-[1.5px] bg-templatePrimary"></div>
          <ul className="space-y-2 md:space-y-3 text-sm font-light">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  className="block hover:text-templatePrimary hover:pl-2 transition-all ease"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* --------- */}
        <div className="space-y-4">
          <h2 className="text-xl font- tracking-wide">USEFUL LINKS</h2>
          <div className="w-[100px] h-[1.5px] bg-templatePrimary"></div>
          <ul className="space-y-2 md:space-y-3 text-sm font-light">
            {usefulLinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="block hover:text-templatePrimary hover:pl-2 transition-all ease"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* ----------- */}
        <div className="space-y-4">
          <h2 className="text-xl font- tracking-wide">CONTACT DETAILS</h2>
          <div className="w-[100px] h-[1.5px] bg-templatePrimary"></div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-templatePrimary" />
            <a
              href="mailto:info@royalgym.aw"
              className="tracking-wider  hover:text-templatePrimary text-[0.9rem]  font-light"
            >
              info@royalgym.ae
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-templatePrimary" />
            <a
              href="tel:0376700003"
              className="tracking-wider leading-relaxed hover:text-templatePrimary text-[0.9rem]  font-light"
            >
              0376700003
            </a>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font- tracking-wide">OPENING HOURS</h2>
            <div className="w-[100px] h-[1.5px] bg-templatePrimary"></div>
            <div className="space-y-2 text-sm">
              <p>
                7AM - 10PM{" "}
                <span className="text-templatePrimary">
                  (Sundays - Thursday)
                </span>
              </p>
              <p>
                8AM - 6PM{" "}
                <span className="text-templatePrimary">(Fridays)</span>
              </p>
              <p>
                9AM - 6PM{" "}
                <span className="text-templatePrimary">(Saturdays)</span>
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {/* APP STORE BUTTON */}
            <a
              href="https://apps.apple.com/ae/app/royal-gym/id6479743422"
              target="_blank"
              className="inline-block cursor-pointer"
            >
              <div className="bg-templateBlack hover:opacity-90 text-templateWhite flex gap-2 items-center justify-start py-2 px-3 rounded-lg">
                <Image alt="" height={30} width={30} src={"/icons/app.png"} />
                <p className="leading-none text-[0.6rem]">
                  AVAILABLE ON THE
                  <br /> <span className="text-xs">App Store</span>
                </p>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.allup.royalgymuae"
              target="_blank"
              className="inline-block cursor-pointer"
            >
              <div className="bg-templateBlack hover:opacity-90 text-templateWhite flex gap-2 items-center justify-start py-2 px-3 rounded-lg">
                <Image alt="" height={30} width={30} src={"/icons/play.png"} />
                <p className="leading-none text-[0.6rem]">
                  AVAILABLE ON THE
                  <br /> <span className="text-xs">Google Play</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container m-auto px-3 md:px-4 py-6">
        <p className="text-sm tracking-wider text-center">
          © Copyright 2024 Royal Gym AE All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
