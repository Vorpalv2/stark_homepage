import React from "react";

const PricingPlanBoxes = ({ bgColor, Heading, paragraph }) => {
  return (
    <div className="bg-[#f3f2fc] w-1/6 h-full rounded-xl">
      <div className="rounded-xl pl-10 pt-10 border-2 border-[#11284b] bg-[#f3f2fc] h-full w-full">
        <h1 className="text-[#11284b] text-4xl font-extrabold m-5 ml-0">
          {Heading}
        </h1>
        <div className="flex">
          <svg
            className="w-1/3 pt-3"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title lang="en">Check mark</title>
            <rect
              x="7.06275"
              y="11.1768"
              width="8"
              height="3.5"
              transform="rotate(45 7.06275 11.1768)"
              fill="#392CC9"
            ></rect>
            <rect
              x="19.4373"
              y="5.87347"
              width="3.5"
              height="16"
              transform="rotate(45 19.4373 5.87347)"
              fill="#392CC9"
            ></rect>
          </svg>
          <p className="text-black font-bold py-2">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanBoxes;
