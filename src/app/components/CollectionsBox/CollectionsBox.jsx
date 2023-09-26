import Image from "next/image";
import React from "react";

const CollectionsBox = (props) => {
  return (
    <div className="relative w-1/3 m-2 pl-3 pt-4">
      <Image
        className="absolute"
        src="https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png"
        height={333}
        width={259}
      />
      <h1 className="relative text-[#11284b] font-extrabold text-2xl pt-8 pl-8 pr-8">
        {props.Data}
      </h1>
    </div>
  );
};

export default CollectionsBox;
