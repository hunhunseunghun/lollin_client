import React from "react";
import styled from "styled-components";
import { SearchBtn, SearchBox } from "./MainSearchBoxStyled.jsx";

const MainSearchBox = ({ handleSearchChange, handleSearchClick }) => {
  return (
    <SearchBox className="searchBox">
      <div className="searchBoxLogo">logo</div>
      <section className="searchBoxSection">
        <input
          className="serchBoxInputBox"
          onChange={handleSearchChange}
        ></input>
        <SearchBtn className="searchBoxSearchBtn" onClick={handleSearchClick}>
          Search
        </SearchBtn>
      </section>
    </SearchBox>
  );
};

export default MainSearchBox;
