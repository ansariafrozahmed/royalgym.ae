import Breadcrumb from "@/components/Banner/Breadcrumb";
import ReactOutForm from "@/components/Forms/ReactOutForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Reach Out To Us | Royal Gym AE",
  description: "The biggest ladies Only Gym in Al Ain",
  openGraph: {
    title: "Reach Out To Us | Royal Gym AE",
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
    title: "Reach Out To Us | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    images: [`${process.env.FRONTEND_URL}/logos/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/contact`,
  },
};

const Page = () => {
  return (
    <>
      <Breadcrumb title="Reach Out To Us" list={["Home", "Reach out to us"]} />
      <div
        style={{
          backgroundImage: 'url("/images/footer-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex bg-white relative items-center justify-center pb-5 md:pt-10 md:pb-5"
      >
        <ReactOutForm text="Our membership consultant" />
      </div>
      <div className="flex gap-2 items-center justify-center pb-10">
        <h2 className="text-base text-templateDark">Pay now from</h2>
        <Image
          src={"/logos/tabby.png"}
          alt=""
          className="h-10 w-auto"
          height={150}
          width={250}
        />
      </div>
    </>
  );
};

export default Page;
