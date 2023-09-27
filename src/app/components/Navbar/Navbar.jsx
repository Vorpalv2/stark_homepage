"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [style, setStyle] = useState({
    //anchor tag styling
    aStyle:
      "flex justify-center items-center p-1 w-20 hover:border-2 rounded-md border-[#381fd1]",
    //main nav container styling
    containerStyle:
      "w-full h-14 bg-[#f6f6eb] text-[#381fd1] font-extrabold text-sm",
    // ui list styling
    ulStyle: "h-10 flex justify-center gap-8 items-center pt-2",
    // nav button Styling
    buttonStyle:
      "bg-[#381fd1] hover:bg-[#7e6de9] text-white rounded-md p-1 text-sm px-4",
  });

  return (
    <div className={style.containerStyle}>
      <ul className={style.ulStyle}>
        <a className={style.aStyle} href="/Page/Product">
          PRODUCT
        </a>
        <a className={style.aStyle} href="/Page/Home">
          PRICING
        </a>
        <a className={style.aStyle} href="/Home">
          BLOG
        </a>
        <a className={style.aStyle} href="/">
          LIBRARY
        </a>
        <a className={style.aStyle} href="/">
          SUPPORT
        </a>
        <a className={style.aStyle} href="/">
          LOG IN
        </a>
        <button className={style.buttonStyle}>30-DAY FREE TEAM TRIAL</button>
      </ul>
    </div>
  );
};

export default Navbar;
