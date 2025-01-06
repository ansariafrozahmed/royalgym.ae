import Breadcrumb from "@/components/Banner/Breadcrumb";
import ParallaxSlider from "@/components/Sliders/ParallaxSlider";
import ParallaxScrollSection from "@/components/StyleComps/ParallaxScrollSection";
import React from "react";

const Page = () => {
  return (
    <>
      <Breadcrumb
        title="Events"
        list={["Home", "Events"]}
        image="https://whgym.com/assets/images/sections/209-background.jpg?cache_v=1713938898"
      />
      {/* <ParallaxSlider /> */}
      {/* <ParallaxScrollSection /> */}
    </>
  );
};

export default Page;
