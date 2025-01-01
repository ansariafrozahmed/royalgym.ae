"use client";
import {
  Award,
  ChevronDown,
  ChevronRight,
  ChevronsDown,
  FileBadge2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  data: {
    name: string;
    image: string;
    nationality: string;
    flag: string;
    text: string;
    certification: string[];
  };
}

const TrainersCard: React.FC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { data } = props;
  return (
    <div
      className={`h-[420px] lg:h-[420px]  min-w-[280px] lg:min-w-[320px] relative transition-transform duration-500 ease-in-out`}
    >
      {/* Image */}
      <Image
        src={
          data.image ||
          "https://images.pexels.com/photos/13197535/pexels-photo-13197535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt=""
        height={600}
        width={600}
        className="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0  ${
          isOpen ? "bg-black/80" : "bg-gradient-to-t from-black to-transparent"
        }`}
      />

      {/* Content */}
      <div
        className={`absolute inset-0 text-templateWhite flex h-full p-3 pb-12 lg:pb-12 flex-col items-start transition-all duration-500 ease-in-out justify-end gap-6 opacity-90`}
      >
        <div className="space-y-2 lg:space-y-1">
          <h2 className="text-sm lg:text-lg tracking-wide">{data.name}</h2>
          <h3 className="text-xs lg:text-sm tracking-wider flex items-center gap-1.5">
            <img src={data.flag} alt="" className="h-4 lg:h-5" />
            {data.nationality}
          </h3>
        </div>

        {/* {isOpen && ( */}
        <div
          className={`space-y-3 transition-opacity duration-500 ease-in-out ${
            isOpen ? "h-auto visible" : "h-0 hidden"
          }`}
        >
          <h3 className="text-[0.7rem] lg:text-[0.8rem] tracking-wide">
            {data.text}
          </h3>
          <div className="flex items-center gap-1">
            <Award size={17} strokeWidth={1.5} className="mb-0.5" />
            <h3 className="tracking-wide">Certification</h3>
          </div>
          <div className="space-y-2.5">
            {data.certification.map((item, index) => (
              <span
                className="text-[0.65rem] lg:text-[0.8rem] leading-tight lg:leading-snug tracking-wide flex gap-1 items-start"
                key={index}
              >
                <ChevronRight size={13} className="mt-0.5" />
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* )} */}

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!isOpen)}
          className="pt-0 absolute bottom-3.5 left-3.5 w-full text-templateWhite z-[999] flex items-center text-sm gap-1 cursor-pointer transition-transform duration-500 ease-in-out"
        >
          certification{" "}
          <ChevronDown
            className={`transition-transform duration-500 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
            size={15}
          />
        </button>
      </div>
    </div>
  );
};

export default TrainersCard;
