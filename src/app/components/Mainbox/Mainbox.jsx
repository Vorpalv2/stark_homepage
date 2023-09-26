import React from "react";
import SideBar from "../SideBar/SideBar";
import RightBar from "../RightBar/RightBar";

const Mainbox = () => {
  return (
    <div className="w-full flex justify-center bg-white px-6">
      <SideBar />
      <RightBar />
    </div>
  );
};

export default Mainbox;
