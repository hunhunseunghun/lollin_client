import React, { useState } from "react";
import { ChampSearchArea } from "./ChampDbSearchStyled.jsx";

const ChampDbSearch = ({
  handleSearchValue,
  handleSearchText,
  handleSearchBtn,
}) => {
  return (
    <ChampSearchArea className="champSearchArea">
      <div className="champSearchForm">
        <input
          type="text"
          className="champSearchInput"
          onKeyPress={handleSearchText}
          onChange={handleSearchValue}
          placeholder="챔피언 이름을 입력하세요"
        />
        <button className="champSearchBtn" onClick={handleSearchBtn}>
          <i class="fa fa-search">검색</i>
        </button>
      </div>
    </ChampSearchArea>
  );
};

export default ChampDbSearch;
