import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Mainbox from "./components/Mainbox/Mainbox";

const Page = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Mainbox />
    </div>
  );
};

export default Page;
