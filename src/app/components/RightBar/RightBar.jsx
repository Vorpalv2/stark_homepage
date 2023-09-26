"use client";
import React, { useState } from "react";

const RightBar = () => {
  const [data, useData] = useState({
    Heading: "New in the Library",
    Paragraph: "Newly added accessiblity resources, guides, and more.",
  });

  return (
    <div>
      <div id="firstLine">
        <h1>{data.Heading}</h1>
        <a href="">VIEW ALL</a>
      </div>
      <h3>{data.Paragraph}</h3>
      <div id="boxContainer">{/* 6 Boxes inside */}</div>
    </div>
  );
};

export default RightBar;
