import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Mainbox from "./components/Mainbox/Mainbox";
import Footer from "./components/Footer/Footer";

const Page = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Mainbox />
      <Footer />
    </div>
  );
};

export default Page;
