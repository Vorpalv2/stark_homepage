import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Mainbox from "./components/Mainbox/Mainbox";
import Footer from "./components/Footer/Footer";

const Page = () => {
  return (
    <div>
      <div className="h-full w-full">
        <Navbar />
        <Mainbox />
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
