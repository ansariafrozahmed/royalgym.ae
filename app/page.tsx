import ReformerPilates from "@/components/Banner/ReformerPilates";
import VideoBanner from "@/components/Banner/VideoBanner";
import OurClasses from "@/components/Classes/OurClasses";
import FAQsection from "@/components/CTAcomp/FAQsection";
import JoinToday from "@/components/CTAcomp/JoinToday";
import PersonalTraining from "@/components/CTAcomp/PersonalTraining";
import DownloadOurApp from "@/components/StyleComps/DownloadOurApp";
import ParallaxScrollSection from "@/components/StyleComps/ParallaxScrollSection";

const fetchBannerVideo = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/wp-json/wp/v2/home-page-video?_fields=meta`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }
    const data = await response.json();
    if (data.length > 0) {
      return data[0].meta.video;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const revalidate = 60;

export default async function Home() {
  const data = await fetchBannerVideo();

  return (
    <>
      <ParallaxScrollSection />
      <div className="parallax-section relative">
        <VideoBanner bannerVideo={data} />
        <div className="absolute inset-0 bg-black transition-opacity duration-100 parallax-overlay"></div>
      </div>
      <ReformerPilates />
      <div key={1}>
        <OurClasses />
      </div>
      <PersonalTraining />
      <DownloadOurApp />
      <FAQsection />
      <JoinToday />
    </>
  );
}
