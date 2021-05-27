import React from "react";
import { SearchBox, SearchBtn } from "./MainSearchStyled.jsx";

const MainSearchBox = ({ handleSearchChange, handleSearchClick }) => {
  return (
    <SearchBox className="mainSearchBox">
      <div className="searchSectionTop"></div>

      <div className="searchSectionBottom">
        {" "}
        <div className="summonerSearchFrom">
          <input
            className="summonerInputBox"
            onChange={handleSearchChange}
            placeholder="소환사명을 입력하세요"
          ></input>
          <SearchBtn className="searchBoxSearchBtn" onClick={handleSearchClick}>
            Lollin
          </SearchBtn>
        </div>
      </div>
    </SearchBox>
  );
};

export default MainSearchBox;
