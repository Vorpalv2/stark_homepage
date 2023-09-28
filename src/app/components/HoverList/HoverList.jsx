import React from "react";

const HoverList = () => {
  return (
    <div className="border-2 rounded-lg w-40 font-semibold bg-white absolute z-50">
      <ul className="flex flex-col py-2 text-base">
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">First</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">Second</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">Third</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">First</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">Second</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">Third</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">First</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">Second</li>
        <li className="hover:bg-[#ccc5f6] rounded-sm py-1 pl-3">Third</li>
      </ul>
    </div>
  );
};

export default HoverList;
