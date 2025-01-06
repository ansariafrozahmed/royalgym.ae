import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlurText } from "../ReactSpring/BlurText";
import ParallaxScrollSection from "../StyleComps/ParallaxScrollSection";

interface Props {
  title?: string;
  subHeading?: string;
  list?: string[];
  image?: string;
}

const Breadcrumb: React.FC<Props> = (props) => {
  const { title, subHeading, list, image } = props;
  return (
    <>
      <ParallaxScrollSection />
      <div className="parallax-section relative">
        <div
          data-aos="fade"
          className="h-[300px] lg:h-[360px] relative overflow-hidden w-full"
        >
          <Image
            src={
              image ||
              "https://whgym.com/assets/images/sections/99-background.jpg"
            }
            alt=""
            className="object-cover object-center h-full w-full"
            height={100}
            sizes="100vw"
            width={1500}
          />
          <div className="absolute p-2 inset-0 bg-black/70 pt-12 lg:bg-black/70 flex items-center justify-center">
            <div className="text-center space-y-2">
              <h1>
                <BlurText
                  text={title}
                  className="text-[22px] lg:text-[29px] leading-tight font-semibold tracking-wider uppercase text-templateWhite"
                  delay={50}
                />
              </h1>
              <BlurText
                text={subHeading || ""}
                className="text-[13px] lg:text-[20px] tracking-wider leading-tight  text-templateWhite"
                delay={50}
              />
              {/* <h1 className="text-2xl lg:text-3xl font-semibold tracking-wider uppercase text-templateWhite">
              {title}
            </h1> */}
              {/* <ul className="flex items-center justify-center gap-1.5 text-sm mt-2">
              {list?.map((item, index) => (
                <React.Fragment key={index}>
                  {item === "Home" ? (
                    <Link href={"/"}>
                      <li className={`text-templateWhite`}>{item}</li>
                    </Link>
                  ) : (
                    <li
                      className={`${
                        index === list.length - 1
                          ? "text-templatePrimary font-semibold"
                          : "text-templateWhite"
                      }`}
                    >
                      {item}
                    </li>
                  )}
                  {index < list.length - 1 && (
                    <ChevronRight
                      className="text-templateWhite mb-[1px]"
                      size={15}
                    />
                  )}
                </React.Fragment>
              ))}
            </ul> */}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black transition-opacity duration-100 parallax-overlay"></div>
      </div>
    </>
  );
};

export default Breadcrumb;
