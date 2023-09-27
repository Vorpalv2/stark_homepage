import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <a
        className="text-lg py-2 pl-2 font-bold hover:text-[#381fd1] active:text-[#381fd1]"
        href="/Product"
      >
        {props.name}
      </a>
    </div>
  );
};

export default ListItem;
