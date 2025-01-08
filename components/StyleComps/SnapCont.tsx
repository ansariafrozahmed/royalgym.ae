"use client";
import SnapSec from "@/components/StyleComps/SnapSec";
import React, { useRef } from "react";

const SnapContainer = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  function scrollTo(section: any) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="containerr">
        <div className="bg-green-500" ref={section1}>
          <SnapSec />
        </div>
        <div className="bg-red-500" ref={section2}>
          <SnapSec />
        </div>
        <div className="bg-orange-500" ref={section3}>
          <SnapSec />
        </div>
      </div>
    </>
  );
};

export default SnapContainer;
