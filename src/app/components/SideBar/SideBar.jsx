"use client";

import React, { useState } from "react";
import ListItem from "../ListItems/ListItem";

const SideBar = () => {
  const [categoriesData, setCategoriesData] = useState([
    "All",
    "Blogs and Articles",
    "Books",
    "Checklists",
    "Colors",
    "Community",
    "Companies and Organizations",
    "Courses and Certificates",
    "Design Patterns",
    "Design Systems",
    "Emails",
    "Employment",
    "Gaming",
    "Guides",
    "Media",
    "Mobile",
    "Newsletter",
    "Plugins",
  ]);

  const [collapsed, setcollapsed] = useState(false);

  const collapseHandler = () => {
    setcollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <div className="bg-white flex flex-col w-2/12 justify-start items-start m-5 p-5 pr-0 mr-0 text-black">
      <h3
        className=" mb-4 font-light text-lg 
      text-[#4b4b4e]"
      >
        Search Library
      </h3>
      <div id="SearchBox" className="flex relative w-[200px]">
        <img
          className="absolute top-[10px] left-[10px]"
          src="/SideBar/Basic.jpg"
          width={20}
          height={20}
        />
        <input
          className="mb-4 p-1 pl-[50px] w-[250px] border-2 rounded-md text-black border-gray-400 focus:border-[#f3f2fc]"
          type="text"
          name="SearchBox"
        />
      </div>
      <div className="font-light text-sm flex flex-col text-[#4b4b4e]">
        <a
          href="/Product"
          className="text-lg py-2 pl-2 font-bold text-[#381fd1]"
        >
          Home
        </a>
        <a
          href="/Product"
          className="text-lg py-2 pl-2 font-bold hover:text-[#381fd1] active:text-[#381fd1]"
        >
          Collections
        </a>
        <button
          onClick={() => collapseHandler()}
          className="flex justify-between w-[250px] hover:text-[#381fd1] active:text-[#381fd1"
        >
          <h2 className="text-lg pl-2 py-2 font-bold">Categories</h2>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              collapsed === false
                ? "mr-[20px] mt-4 ml-4 hover:text-[#381fd1] hover:bg-[#381fd1]"
                : "mr-[20px] mt-4 ml-4 rotate-180"
            }
          >
            <title>Disclose arrow</title>
            <path
              d="M1 1L5 5L9 1"
              stroke="#4B4B4E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      {collapsed === true
        ? categoriesData.map((e) => <ListItem name={e} link={e} />)
        : null}
      <div
        id="submitBox"
        className="flex p-6 rounded-md mt-6 bg-[#f3f2fc] text-black flex-col justify-center"
      >
        <h2 className="font-bold text-xl">Contribution to Stark</h2>
        <h2 className="mt-2 mb-6 text-sm font-light color-[#4b4b4e]">
          Got any accessibility resources
          <br /> or news?
        </h2>
        <button className="bg-[#381fd1] hover:bg-[#7e6de9] text-white rounded-md text-sm px-1 py-3">
          Submit a Resource
        </button>
      </div>
    </div>
  );
};

export default SideBar;
