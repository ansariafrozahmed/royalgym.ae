import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="text-center relative flex flex-col items-center justify-end">
      <span className="text-gray-100 pb-4 font-black text-6xl uppercase ">
        {title}
      </span>
      <h2 className="text-4xl absolute font-semibold text-templatePrimary uppercase">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
