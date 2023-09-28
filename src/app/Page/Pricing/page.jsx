import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import PricingPlanBoxes from "@/app/components/PricingPlanBoxes/PricingPlanBoxes";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <h1 className="pt-10 tracking-tight flex justify-center text-5xl font-extrabold bg-[#f6f6eb] py-5 text-[#11284b]">
        Pricing Plans
      </h1>
      <p className="flex justify-center text-xl bg-[#f6f6eb] py-5 text-[#11284b]">
        Whether you’re a team of 1 or 100,000, we’ve got a plan to <br></br>{" "}
        meet all your needs. Sign up and get started right away!
      </p>
      <div className="flex flex-row gap-40 justify-center py-5 px-5 bg-[#f6f6eb]">
        <PricingPlanBoxes
          Heading={"Free"}
          paragraph={
            "Full access to all non-Sidekick tools in: Stark for Sketch, Figma, Adobe XD, Google Chrome, Firefox, Microsoft Edge, Brave, Safari and Arc"
          }
        />
        <PricingPlanBoxes Heading={"$15 / month"} />
        <PricingPlanBoxes Heading={"Custom"} />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
