"use client";
import React, { useState } from "react";
import ItemBox from "../ItemBox/ItemBox";
import CollectionsBox from "../CollectionsBox/CollectionsBox";

const RightBar = () => {
  const [data, useData] = useState({
    Heading: "New in the Library",
    Paragraph: "Newly added accessiblity resources, guides, and more.",
  });

  const [collectionData, setCollectionData] = useState([
    "Disability Employment",
    "Making Accessible Color Combos",
    "Tips and Tricks for Inclusive Social Media",
  ]);

  const [bottomData, setBottomData] = useState({
    Heading: "Featured Collections",
    Paragraph: "Handpicked and curated collections around accessiblity.",
  });

  return (
    <div className="bg-white w-6/12 m-5 p-5 ml-0 pl-0">
      <div className="pt-2 flex justify-between" id="firstLine">
        <h1 className="text-[#11284b] font-bold text-5xl pl-4">
          {data.Heading}
        </h1>
        <a className="underline text-blue-700 font-bold pr-5" href="">
          VIEW ALL
        </a>
      </div>
      <h3 className="pl-4 pt-2 text-[#4b4b4e] font-semibold">
        {data.Paragraph}
      </h3>
      <div className="flex flex-col w-full" id="boxContainer">
        <div className="flex">
          <ItemBox
            Link={"https://makingaccessiblebooks.ca/"}
            imageLink={
              "https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
            }
            Title={"RESOURCES"}
            Description={"Making Accessible Books"}
          />
          <ItemBox
            Link={
              "https://www.getstark.co/library/link/?href=https%3A%2F%2Finclusivepublishing.org%2F"
            }
            imageLink={
              "https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg"
            }
            Title={"RESOURCES"}
            Description={"Inclusive Publishing"}
          />
          <ItemBox
            Link={"https://apln.ca/"}
            imageLink={
              "https://res.cloudinary.com/stark-lab/image/upload/v1679345933/Screenshot_2023_03_20_at_3_58_45_PM_b615f86e7e.png"
            }
            Title={"RESOURCES"}
            Description={"The APLN (Accessible Publishing)"}
          />
        </div>
        <div className="flex">
          <ItemBox
            Link={
              "https://www.getstark.co/library/link/?href=http%3A%2F%2Fkb.daisy.org%2Fpublishing%2Fdocs%2F"
            }
            imageLink={
              "https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg"
            }
            Title={"RESOURCES"}
            Description={"The DAISY Consortium’s Accessible"}
          />
          <ItemBox
            Link={
              "https://www.getstark.co/library/link/?href=https%3A%2F%2Flanguageplease.org%2F"
            }
            imageLink={
              "https://res.cloudinary.com/stark-lab/image/upload/v1658845042/language_please_logo_d4b822280f.png"
            }
            Title={"RESOURCES"}
            Description={"Language, Please: Style Guide & Resources"}
          />
          <ItemBox
            Link={
              "https://www.thinkwithgoogle.com/future-of-marketing/management-and-culture/diversity-and-inclusion/precise-inclusive-language/"
            }
            imageLink={
              "https://res.cloudinary.com/stark-lab/image/upload/v1653070254/library_author_google_7723cb132a.png"
            }
            Title={"BLOGS & ARTICLES"}
            Description={"4 steps to more inclusive, precise language"}
          />
        </div>
      </div>
      <div className="pt-2 flex justify-between" id="firstLine">
        <h1 className="text-[#11284b] font-bold text-5xl pl-4 mt-6">
          {bottomData.Heading}
        </h1>
        <a className="underline text-blue-700 font-bold pr-5" href="">
          VIEW ALL
        </a>
      </div>
      <h3 className="pl-4 pt-2 text-[#4b4b4e] font-semibold">
        {bottomData.Paragraph}
      </h3>
      <div id="bottomBox" className="h-[430px] w-full flex">
        {/* custom component here */}
        {collectionData.map((e, i) => {
          return <CollectionsBox key={i} Data={e} />;
        })}
        {/* <CollectionsBox Data="Disability Employment" />
        <CollectionsBox Data="Making Accessible Color Combos" />
        <CollectionsBox Data="Tips and Tricks for Inclusive Social Media" /> */}
      </div>
    </div>
  );
};

export default RightBar;
