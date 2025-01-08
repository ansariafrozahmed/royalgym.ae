import React from "react";
import ClassesCard from "../Cards/ClassesCard";
import { ourClasses } from "@/lib/constants";
import ClasseCard02 from "../Cards/ClasseCard02";

const OurClassesMobile = () => {
  return (
    <div className="templateContainer pt-6 pb-12 space-y-4">
      <h2 className="text-3xl lg:text-7xl text-templatePrimary">Our Classes</h2>
      <div className="grid grid-cols-2 gap-3">
        {ourClasses.map((item, index) => (
          <ClasseCard02 data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurClassesMobile;
