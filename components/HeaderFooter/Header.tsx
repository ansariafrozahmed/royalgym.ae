"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/lib/Menu";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed z-50 w-full transition-all ease-in-out duration-300 ${
        hasScrolled ? "bg-templatePrimary" : ""
      }`}
    >
      <div className="templateContainer py-3 flex flex-row-reverse lg:flex-row justify-between items-center">
        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <Link className="lg:hidden absolute top-4 left-4" href={"/"}>
            <Image
              src={"/logos/1.png"}
              alt=""
              height={100}
              className="w-32"
              width={200}
            />
          </Link>
          <ul className="templateContainer flex flex-col items-start space-y-5 lg:space-y-4 uppercase justify-center h-full">
            {menu.map((item, index) => (
              <li
                key={index}
                className={`text-base lg:text-lg tracking-wide text-templatePrimary font-medium hover-class ${
                  pathname === item.url && "active-class"
                }`}
              >
                <Link onClick={() => setIsOpen(false)} href={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="w-1/2  md:w-1/3 flex items-center justify-end lg:justify-start">
          <button
            className={`hamburger z-50 ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`${
                isOpen ? "bg-templatePrimary" : "bg-templateWhite"
              }`}
            ></span>
            <span
              className={`${
                isOpen ? "bg-templatePrimary" : "bg-templateWhite"
              }`}
            ></span>
            <span
              className={`${
                isOpen ? "bg-templatePrimary" : "bg-templateWhite"
              }`}
            ></span>
          </button>
        </div>

        {/* LOGO */}
        <div className="w-1/2 md:w-1/3 flex items-center justify-start lg:justify-center">
          <Link href={"/"}>
            <Image
              src={"/logos/2.png"}
              alt=""
              height={100}
              className="w-32"
              width={200}
            />
          </Link>
        </div>

        {/* BUTTONS */}
        <div className="space-x-2 hidden md:flex w-1/3 items-center justify-end">
          <button
            className={`border text-sm transition-all ease-in-out duration-200 text-templateWhite px-4 py-1.5
            ${
              hasScrolled
                ? ""
                : "border-templateWhite hover:border-templatePrimary hover:text-templatePrimary "
            }
            `}
          >
            FREE TRIAL
          </button>
          <button
            className={`border text-sm   px-4 py-1.5 transition-all ease-in-out duration-200 ${
              hasScrolled
                ? "bg-white text-templatePrimary border-templateWhite hover:scale-90"
                : "bg-templatePrimary border-templatePrimary text-templateWhite hover:scale-90"
            }`}
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
