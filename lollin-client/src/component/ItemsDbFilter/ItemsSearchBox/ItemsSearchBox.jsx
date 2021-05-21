import { render } from "@testing-library/react";
import React from "react";

const ItemsSearchBox = ({ handleItemSearchValue }) => {
  return (
    <div className="ItemsSearchBox">
      <label>검색</label>
      <input
        type="text"
        onChange={(e) => handleItemSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

export default ItemsSearchBox;
