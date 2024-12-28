import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/HeaderFooter/Footer";
import NextTopLoader from "nextjs-toploader";
import Headwrapper from "@/components/HeaderFooter/Headwrapper";
import FooterWrapper from "@/components/HeaderFooter/FooterWrapper";
import SmoothScroll from "@/components/WrapperAndAll/SmoothScroll";
import AosComp from "@/components/WrapperAndAll/Aos";

export const metadata: Metadata = {
  title: "Royal Gym AE",
  description: "Royal Gym AE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body className={`font-sans antialiased`}>
          <AosComp />
          <NextTopLoader showSpinner={false} color="#fff" />
          <Headwrapper />
          {children}
          <FooterWrapper />
        </body>
      </SmoothScroll>
    </html>
  );
}
