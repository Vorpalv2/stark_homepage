"use client";
import React from "react";

const ItemBox = ({ imageLink, Title, Description }) => {
  return (
    <div className="flex justify-start pl-2 flex-col">
      <img src={imageLink} alt="logo" />
      <h3>{Title}</h3>
      <h1>{Description}</h1>
    </div>
  );
};

export default ItemBox;
