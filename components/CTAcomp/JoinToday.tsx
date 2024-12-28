import React from "react";

const JoinToday = () => {
  return (
    <div className="templateContainer space-y-3 lg:space-y-2 py-10 lg:py-12">
      <h2 className="text-center text-4xl lg:text-5xl font-semibold text-templatePrimary">
        JOIN TODAY
      </h2>
      <p className="text-sm lg:text-base text-center text-templateDark">
        The first step towards success is just a click away. Ready to create
        something extraordinary?
      </p>
      <div className="flex lg:pt-3 items-center justify-center">
        <button
          className={`border text-sm px-6 py-2 transition-all ease-in-out duration-200 bg-templatePrimary border-templatePrimary text-templateWhite hover:scale-95 active:scale-90 `}
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default JoinToday;
