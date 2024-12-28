import VideoBanner from "@/components/Banner/VideoBanner";
import OurClasses from "@/components/Classes/OurClasses";
import FAQsection from "@/components/CTAcomp/FAQsection";
import JoinToday from "@/components/CTAcomp/JoinToday";
import ScrollAnimation from "@/components/StyleComps/TextFillOnScroll";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <VideoBanner />
      <OurClasses />
      {/* <ScrollAnimation /> */}
      <FAQsection />
      <JoinToday />
    </>
  );
}
