"use client";

import React, { useState } from "react";
import Link from "next/link";
import HoverList from "../HoverList/HoverList";

const Navbar = () => {
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
  const [isMouseOn, setIsMouseOn] = useState(false);
  const [style, setStyle] = useState({
    //anchor tag styling
    aStyle:
      "flex justify-center items-center p-1 mb-2 mt-2 w-20 hover:border-2 rounded-md border-[#381fd1]",
    //main nav container styling
    containerStyle:
      "relative w-full h-14 bg-[#f6f6eb] text-[#381fd1] font-extrabold text-sm",
    // ui list styling
    ulStyle: "h-10 flex justify-center gap-8 items-center pt-2",
    // nav button Styling
    buttonStyle:
      "bg-[#381fd1] hover:bg-[#7e6de9] text-white rounded-md p-1 text-sm px-4",
  });

  function MouseEnterHandler() {
    setIsMouseOn(true);
  }

  function MouseExitHandler() {
    setIsMouseOn(false);
  }

  return (
    <div className={style.containerStyle}>
      <ul className={style.ulStyle}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:text-[#7e6de9]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z"
            fill="currentColor"
          ></path>
        </svg>
        <div onMouseEnter={MouseEnterHandler} onMouseLeave={MouseExitHandler}>
          <Link className={style.aStyle} href="/Page/Product">
            PRODUCT
          </Link>
          {isMouseOn && <HoverList />}
        </div>
        <Link className={style.aStyle} href="/Page/Pricing">
          PRICING
        </Link>
        <Link className={style.aStyle} href="/Home">
          BLOG
        </Link>
        <Link className={style.aStyle} href="/">
          LIBRARY
        </Link>
        <Link className={style.aStyle} href="/">
          SUPPORT
        </Link>
        <Link className={style.aStyle} href="/">
          LOG IN
        </Link>
        <button className={style.buttonStyle}>30-DAY FREE TEAM TRIAL</button>
      </ul>
    </div>
  );
};

export default Navbar;
