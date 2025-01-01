import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Headwrapper from "@/components/HeaderFooter/Headwrapper";
import FooterWrapper from "@/components/HeaderFooter/FooterWrapper";
import SmoothScroll from "@/components/WrapperAndAll/SmoothScroll";
import AosComp from "@/components/WrapperAndAll/Aos";

export const metadata: Metadata = {
  title: "Royal Gym AE",
  description: "The biggest ladies Only Gym in Al Ain",
  openGraph: {
    title: "Royal Gym AE",
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
    title: "Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    images: [`${process.env.FRONTEND_URL}/logos/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <SmoothScroll>
          <AosComp />
          <NextTopLoader showSpinner={false} color="#242424" />
          <Headwrapper />
          {children}
          <FooterWrapper />
        </SmoothScroll>
      </body>
    </html>
  );
}
