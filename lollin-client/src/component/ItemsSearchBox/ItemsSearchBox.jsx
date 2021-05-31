// import { render } from "@testing-library/react";
import React from "react";
import { SearchBox, SearchBar } from "./ItemsSearchBoxStyled.jsx";

const ItemsSearchBox = ({ handleItemSearchValue }) => {
  return (
    <SearchBox className="ItemsSearchBox">
      <div className="champSearchForm">
        <input
          type="text"
          className="champSearchInput"
          onChange={(e) => handleItemSearchValue(e.target.value)}
          placeholder="아이템 이름을 입력하세요"
        />
      </div>

      {/* <SearchBar
        type="text"
        placeholder="검색"
        onChange={(e) => handleItemSearchValue(e.target.value)}
      ></SearchBar> */}
    </SearchBox>
  );
};

export default ItemsSearchBox;
