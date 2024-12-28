import Breadcrumb from "@/components/Banner/Breadcrumb";
import FAQsection from "@/components/CTAcomp/FAQsection";
import React from "react";

const FaqPage = () => {
  return (
    <div>
      <Breadcrumb title="FAQs" list={["Home", "FAQs"]} />
      <FAQsection />
    </div>
  );
};

export default FaqPage;
