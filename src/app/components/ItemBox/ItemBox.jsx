"use client";
import React from "react";

const ItemBox = ({ imageLink, Title, Description }) => {
  return (
    <div className="flex rounded-lg justify-start px-4 flex-col pt-4 w-52 h-52 border m-4 pl-5">
      <img
        className="rounded-lg py-1"
        src={imageLink}
        width={40}
        height={40}
        alt="logo"
      />
      <h3 className="py-1 text-sm">{Title}</h3>
      <h1 className="py-1 text-xl">{Description}</h1>
    </div>
  );
};

export default ItemBox;
