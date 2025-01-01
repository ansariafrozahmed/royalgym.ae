import Breadcrumb from "@/components/Banner/Breadcrumb";
import React from "react";
import "../../../css/policyStyle.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Royal Gym AE",
  description: "The biggest ladies Only Gym in Al Ain",
  openGraph: {
    title: "Privacy Policy | Royal Gym AE",
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
    title: "Privacy Policy | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    images: [`${process.env.FRONTEND_URL}/logos/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/privacy-policy`,
  },
};

const Privacypolicy = () => {
  return (
    <>
      <Breadcrumb
        title="Privacy & Policy"
        list={["Home", "Privacy & policy"]}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-12 space-y-6 py-6 md:py-8 lg:py-12">
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam quidem expedita esse architecto,
          magni in amet quibusdam nesciunt qui id aperiam quasi accusamus
          consequuntur veniam ut. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nisi eligendi accusamus expedita molestiae, vero
          aliquid! Porro quae, vel itaque eum provident assumenda ipsam. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Nisi eligendi
          accusamus expedita molestiae, vero aliquid! Porro quae, vel itaque eum
          provident assumenda ipsam.
        </p>
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nisi eligendi accusamus expedita
          molestiae, vero aliquid! Porro quae, vel itaque eum provident
          assumenda ipsam.
        </p>
        <h2 className="policyH2">Lorem ipsum dolor sit amet.</h2>
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam quidem expedita esse architecto,
          magni in amet quibusdam nesciunt qui id aperiam quasi accusamus
          consequuntur veniam ut. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nisi eligendi accusamus expedita molestiae, vero
          aliquid! Porro quae, vel itaque eum provident assumenda ipsam. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Nisi eligendi
          accusamus expedita molestiae, vero aliquid! Porro quae, vel itaque eum
          provident assumenda ipsam.
        </p>
        <h3 className="policyH3">Lorem ipsum dolor sit amet.</h3>
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nisi eligendi accusamus expedita
          molestiae, vero aliquid! Porro quae, vel itaque eum provident
          assumenda ipsam.
        </p>
        <h3 className="policyH3">Lorem ipsum dolor sit amet.</h3>
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nisi eligendi accusamus expedita
          molestiae, vero aliquid! Porro quae, vel itaque eum provident
          assumenda ipsam.
        </p>
        <h3 className="policyH3">Lorem ipsum dolor sit amet.</h3>
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nisi eligendi accusamus expedita
          molestiae, vero aliquid! Porro quae, vel itaque eum provident
          assumenda ipsam.
        </p>
        <h3 className="policyH3">Lorem ipsum dolor sit amet.</h3>
        <p className="policyPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          eligendi accusamus expedita molestiae, vero aliquid! Porro quae, vel
          itaque eum provident assumenda ipsam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nisi eligendi accusamus expedita
          molestiae, vero aliquid! Porro quae, vel itaque eum provident
          assumenda ipsam.
        </p>
      </div>
    </>
  );
};

export default Privacypolicy;
