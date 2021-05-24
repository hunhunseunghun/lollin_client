import { render } from "@testing-library/react";
import React from "react";
import { SearchBox, SearchBar } from "./ItemsSearchBoxStyled.jsx";

const ItemsSearchBox = ({ handleItemSearchValue }) => {
  return (
    <SearchBox className="ItemsSearchBox">
      <SearchBar
        type="text"
        placeholder="검색"
        onChange={(e) => handleItemSearchValue(e.target.value)}
      ></SearchBar>
    </SearchBox>
  );
};

export default ItemsSearchBox;
