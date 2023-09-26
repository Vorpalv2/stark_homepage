"use client";
import React, { useState } from "react";

const RightBar = () => {
  const [data, useData] = useState({
    Heading: "New in the Library",
    Paragraph: "Newly added accessiblity resources, guides, and more.",
  });

  return (
    <div className="bg-red-400 w-6/12 m-5 p-5">
      <div className="pt-2 flex justify-between" id="firstLine">
        <h1 className="text-[#11284b] font-bold text-5xl">{data.Heading}</h1>
        <a className="underline text-blue-700 font-bold" href="">
          VIEW ALL
        </a>
      </div>
      <h3 className="pt-2 text-[#4b4b4e] font-semibold">{data.Paragraph}</h3>
      <div id="boxContainer">{/* 6 Boxes inside */}</div>
    </div>
  );
};

export default RightBar;
