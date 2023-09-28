import React from "react";

const ListItem = ({ name, link }) => {
  return (
    <div>
      <a className="pl-8 active:text-[#381fd1]" href={"/Page/" + link}>
        <h3 className="font-normal text-sm py-[2px] pl-[40px] hover:text-[#381fd1]">
          {name}
        </h3>
      </a>
    </div>
  );
};

export default ListItem;
