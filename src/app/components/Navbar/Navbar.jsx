import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-[#f6f6eb] text-[#381fd1] font-extrabold text-sm">
      <ul className="h-10 flex justify-center gap-8 items-center pt-2">
        <a
          className="flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]"
          href="/Product"
        >
          PRODUCT
        </a>
        <a
          className="flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]"
          href="/"
        >
          PRICING
        </a>
        <a
          className="flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]"
          href="/"
        >
          BLOG
        </a>
        <a
          className="flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]"
          href="/"
        >
          LIBRARY
        </a>
        <a
          className="flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]"
          href="/"
        >
          SUPPORT
        </a>
        <a
          className="flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]"
          href="/"
        >
          LOG IN
        </a>
        <button className="bg-[#381fd1] hover:bg-[#7e6de9] text-white rounded-md p-1 text-sm px-4">
          30-DAY FREE TEAM TRIAL
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
