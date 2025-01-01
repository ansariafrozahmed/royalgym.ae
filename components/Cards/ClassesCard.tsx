import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  data: {
    courseName: string;
    image: string;
  };
}

const ClassesCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-[420px] lg:h-[430px] group aspect-[4/5] w-[300px] lg:w-[330px] relative">
      {/* Image */}
      <div className="h-full w-full overflow-hidden">
        <Image
          src={data.image}
          alt={`Image`}
          height={600}
          width={600}
          className="h-full w-full group-hover:scale-100 scale-105 transition-transform ease-in-out duration-300 object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute rounded-md overflow-hidden inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <h3 className="text-[24px] lg:text-[24px] tracking-wide capitalize text-templateWhite group-hover:text-templatePrimary leading-tight">
          {data.courseName}
        </h3>
        <ChevronRight
          size={30}
          className="text-templateWhite group-hover:text-templatePrimary"
        />
      </div>
    </div>
  );
};

export default ClassesCard;
