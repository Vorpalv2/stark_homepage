import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <a className="pl-8 active:text-[#381fd1]" href="/Product">
        <h3 className="font-normal text-sm py-[2px] pl-[40px] hover:text-[#381fd1]">
          {props.name}
        </h3>
      </a>
    </div>
  );
};

export default ListItem;
