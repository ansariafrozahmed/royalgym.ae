import Image from "next/image";
import React from "react";

interface Props {
  data: {
    courseName: string;
    image: string;
  };
}

const ClasseCard02: React.FC<Props> = ({ data }) => {
  return (
    <div className="aspect-[4/5.7] rounded overflow-hidden relative">
      <Image
        src={data.image}
        alt={`Image`}
        height={1000}
        width={1000}
        className="h-full w-full group-hover:scale-105 transition-transform ease-in-out duration-300 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-2 flex items-end justify-start to-transparent">
        <h2 className="text-white text-sm tracking-wide">{data.courseName}</h2>
      </div>
    </div>
  );
};

export default ClasseCard02;
