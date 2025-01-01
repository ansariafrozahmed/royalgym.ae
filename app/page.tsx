import ReformerPilates from "@/components/Banner/ReformerPilates";
import VideoBanner from "@/components/Banner/VideoBanner";
import OurClasses from "@/components/Classes/OurClasses";
import FAQsection from "@/components/CTAcomp/FAQsection";
import JoinToday from "@/components/CTAcomp/JoinToday";
import PersonalTraining from "@/components/CTAcomp/PersonalTraining";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <VideoBanner />
      <div key={1}>
        <OurClasses />
      </div>
      <ReformerPilates />
      <FAQsection />
      <PersonalTraining />
      <JoinToday />
    </>
  );
}
