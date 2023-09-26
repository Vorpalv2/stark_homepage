"use client";
import React, { useState } from "react";
import ItemBox from "../ItemBox/ItemBox";

const RightBar = () => {
  const [data, useData] = useState({
    Heading: "New in the Library",
    Paragraph: "Newly added accessiblity resources, guides, and more.",
  });

  return (
    <div className="bg-red-400 w-6/12 m-5 p-5">
      <div className="pt-2 flex justify-between" id="firstLine">
        <h1 className="text-[#11284b] font-bold text-5xl">{data.Heading}</h1>
        <a className="pr-[190px] underline text-blue-700 font-bold" href="">
          VIEW ALL
        </a>
      </div>
      <h3 className="pt-2 text-[#4b4b4e] font-semibold">{data.Paragraph}</h3>
      <div className="flex" id="boxContainer">
        <ItemBox
          imageLink={
            "https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
          }
          Title={"RESOURCES"}
          Description={"Making Accessible Books"}
        />
        <ItemBox
          imageLink={
            "https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
          }
          Title={"RESOURCES"}
          Description={"Making Accessible Books"}
        />
        <ItemBox
          imageLink={
            "https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
          }
          Title={"RESOURCES"}
          Description={"Making Accessible Books"}
        />
      </div>
    </div>
  );
};

export default RightBar;
