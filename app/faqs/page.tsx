import Breadcrumb from "@/components/Banner/Breadcrumb";
import FAQsection from "@/components/CTAcomp/FAQsection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FAQs | Royal Gym AE",
  description: "The biggest ladies Only Gym in Al Ain",
  openGraph: {
    title: "FAQs | Royal Gym AE",
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
    title: "FAQs | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    images: [`${process.env.FRONTEND_URL}/logos/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/faqs`,
  },
};

const FaqPage = () => {
  return (
    <div>
      <Breadcrumb title="FAQs" list={["Home", "FAQs"]} />
      <FAQsection />
    </div>
  );
};

export default FaqPage;
