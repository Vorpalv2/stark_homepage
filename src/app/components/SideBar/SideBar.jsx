import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col w-1/4 justify-center items-start m-5 p-5">
      <h3 className=" mb-4 font-light text-lg color-[#4b4b4e]">
        Search Library
      </h3>
      <input
        className="mb-4 p-1 border-2 rounded-md text-black border-slate-500"
        type="text"
        name="SearchBox"
      />
      <ul className="font-light text-sm color-[#4b4b4e]">
        <li className=" text-lg py-2 pl-2">Home</li>
        <li className=" text-lg py-2 pl-2">Collections</li>
        <li className=" text-lg py-2 pl-2">Categories</li>
      </ul>
      <div id="submitBox">
        <h2 className="font-bold text-xl">Contribution to Stark</h2>
        <h2 className="font-light color-[#4b4b4e]">
          Got any accessibility resources or news?
        </h2>
        <button className="bg-[#381fd1] hover:bg-[#7e6de9] text-white rounded-md p-1 text-sm px-4">
          Submit a Resource
        </button>
      </div>
    </div>
  );
};

export default SideBar;
