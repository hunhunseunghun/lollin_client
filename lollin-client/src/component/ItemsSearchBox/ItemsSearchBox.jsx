import React from "react";
import { SearchBox } from "./ItemsSearchBoxStyled.jsx";

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
    </SearchBox>
  );
};

export default ItemsSearchBox;
