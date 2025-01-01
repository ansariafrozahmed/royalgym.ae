"use client";
import { faqData } from "@/lib/constants";
import Image from "next/image";
import React, { useState } from "react";

const FAQsection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="templateContainer py-10 lg:py-12 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-[40%] h-[200px] md:h-[380px] lg:h-[500px] lg:sticky top-20">
          <Image
            src={
              "https://img.freepik.com/free-photo/full-shot-fit-people-doing-burpees_23-2149445897.jpg?t=st=1735724274~exp=1735727874~hmac=90d931bcdea50477d48305233ed1fdeb7e836499e65856d1c7a83343a52f65cf&w=1500"
            }
            className="h-full w-full object-cover"
            alt="FAQ Image"
            height={800}
            width={800}
          />
        </div>

        {/* FAQ Section */}
        <div className="w-full space-y-8 lg:w-[60%]">
          <div className="space-y-3">
            <h2 className="text-xl lg:text-4xl text-templatePrimary tracking-wide">
              Frequently Asked Questions
            </h2>
            <p className="text-xs lg:text-sm text-gray-700 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rem rerum voluptatum vitae porro recusandae, molestiae tenetur
              cupiditate assumenda in.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`text-sm lg:text-lg text-templateDark cursor-pointer flex items-center justify-between`}
                  aria-expanded={activeIndex === index}
                >
                  {faq.question}
                  <span className="ml-2 text-templatePrimary">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="mt-2 text-xs lg:text-sm text-templatePrimary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsection;
