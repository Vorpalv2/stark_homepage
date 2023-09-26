"use client";
import React from "react";

const ItemBox = ({ Link, imageLink, Title, Description }) => {
  return (
    <>
      <a
        href={Link}
        className="flex rounded-lg justify-start hover:border-slate-700 border flex-col px-4 pt-4 w-1/3 h-52 m-4 pl-5"
      >
        <img
          className="rounded-lg py-1"
          src={imageLink}
          width={40}
          height={40}
          alt="logo"
        />
        <h3 className="py-1 text-sm text-[#381fd1] tracking-tighter">
          {Title}
        </h3>
        <h1 className="py-1 text-[26px] heigh text-[#11284b] leading-none tracking-tighter">
          {Description}
        </h1>
      </a>
    </>
  );
};

export default ItemBox;
