import React, { useState } from "react";
import {
  ChampSearchInput,
  ChampSearchArea,
  ChampSearchBtn,
} from "./ChampDbSearchStyled.jsx";

const ChampDbSearch = ({
  handleSearchValue,
  handleSearchText,
  handleSearchBtn,
}) => {
  return (
    <ChampSearchArea className="champSearchArea">
      <ChampSearchInput
        type="text"
        className="champSearchInput"
        onKeyPress={handleSearchText}
        onChange={handleSearchValue}
        placeholder="검색"
      />
      <ChampSearchBtn onClick={handleSearchBtn}>
        <i class="fa fa-search"> 검색</i>
      </ChampSearchBtn>
    </ChampSearchArea>
  );
};

export default ChampDbSearch;
