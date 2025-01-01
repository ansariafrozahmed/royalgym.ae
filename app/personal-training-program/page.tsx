import Breadcrumb from "@/components/Banner/Breadcrumb";
import OurClasses from "@/components/Classes/OurClasses";
import OurTrainers from "@/components/Classes/OurTrainers";
import PersonalTraining from "@/components/CTAcomp/PersonalTraining";
import ReactOutForm from "@/components/Forms/ReactOutForm";
import { BlurText } from "@/components/ReactSpring/BlurText";
import { SplitText } from "@/components/ReactSpring/SplitText";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Personal Training Program | Royal Gym AE",
  description: "The biggest ladies Only Gym in Al Ain",
  openGraph: {
    title: "Personal Training Program | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    url: `${process.env.FRONTEND_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.FRONTEND_URL}/logos/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Royal Gym AE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Training Program | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    images: [`${process.env.FRONTEND_URL}/logos/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/personal-training-program`,
  },
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        title="Personal Training Program"
        subHeading="Achieve Excellence, Train with the Experts"
        list={["Home", "Personal training program"]}
      />
      <div className="templateContainer py-8 lg:pt-12 lg:pb-16 space-y-8">
        <div className="text-center px-4 space-y-3 lg:space-y-2 ">
          <BlurText
            text={"Unleash Your Potential"}
            className="text-[24px] lg:text-[28px] leading-tight font-semibold tracking-wider uppercase text-templatePrimary"
            delay={50}
          />
          <p className="text-sm tracking-wide text-gray-700">
            Ignite Your Fitness Journey with Personal Training at Royal Gym!
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10 ">
          <div className="relative w-full lg:w-[55%] h-[260px] md:h-[400px] lg:h-[600px]">
            <Image
              src={
                "https://whgym.com/assets/images/sections/3-block.jpg?cache_v=1727952997"
              }
              className="h-full w-full object-cover"
              alt="FAQ Image"
              height={800}
              width={800}
            />
            <div className="hidden lg:block absolute -bottom-8 -right-32 bg-templateWhite p-4">
              <Image
                src={
                  "https://whgym.com/assets/images/sections/3-secondary.jpg?cache_v=1691487100"
                }
                className="h-[300px] w-[300px] object-cover"
                alt="FAQ Image"
                height={800}
                width={800}
              />
            </div>
          </div>
          <div className="w-full lg:w-[45%] lg:pt-10 space-y-5">
            <BlurText
              text="Our Expert Personal Trainers"
              className="text-[25px] lg:text-[36px] uppercase text-templatePrimary tracking-wide leading-tight font-semibold"
              delay={50}
            />

            <p className="text-sm tracking-wide text-gray-700">
              Our Expert Personal Trainers are dedicated to guiding you toward
              your goals with tailored workout plans, professional expertise,
              unwavering motivation, and consistent support to keep you on
              track! Achieve Optimal Results with our customized sessions
              designed to inspire, challenge & motivate you to Transform into
              the best version of yourself!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100" key={2}>
        <OurTrainers />
      </div>
      <div className="bg-gray-100">
        <div className="templateContainer flex w-full gap-5 pb-8">
          <div className="w-1/2">
            <Image
              src={
                "https://img.freepik.com/free-photo/happy-fit-people-gym-full-shot_23-2149445955.jpg?t=st=1735724057~exp=1735727657~hmac=ab584e5d47c2b920d6b260c2a3fddc860bfac113dc4359f65a1f04aa4c7d8471&w=1500"
              }
              className="h-full w-full object-cover"
              alt="Trainers Group Image"
              height={800}
              width={800}
            />
          </div>
          <div className="w-1/2">
            <Image
              src={
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f87e03110646743.5ff31267a303f.jpg"
              }
              className="h-full w-full object-cover"
              alt="Gym Pool Image"
              height={800}
              width={800}
            />
          </div>
        </div>
      </div>
      <div className="text-center space-y-2 templateContainer py-8 lg:py-12">
        <BlurText
          text="JOIN OUR PERSONAL TRAINING PROGRAM"
          className="text-[25px] lg:text-[34px] uppercase text-templatePrimary tracking-wide text-center leading-tight font-semibold"
          delay={50}
        />
        <div>
          <p className="text-sm tracking-wide text-gray-700 lg:px-20">
            Unleash the transformative power of personal Training that will help
            you transform your fitness, health, lifestyle & boost your
            confidence!
          </p>
          <p className="text-sm tracking-wide text-templatePrimary lg:px-20">
            Ignite Your Fitness Journey with Personal Training at Royal Gym!
          </p>
        </div>
        <div className="flex items-center justify-center pt-8">
          <ReactOutForm text={"Our Personal Trainers’ consultant"} />
        </div>
      </div>
    </>
  );
};

export default Page;
