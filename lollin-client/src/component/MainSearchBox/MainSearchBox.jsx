import React from "react";
import styled from "styled-components";
import MainBgi from "../../Images/MainBgi-Teemo.jpeg";
import "./MainSearchBox.css";

const MainSearchBox = ({ handleSearchChange, handleSearchClick }) => {
  return (
    <div className="searchBox">
      <div className="searchBoxLogo">logo</div>
      <section className="searchBoxSection">
        <input
          className="serchBoxInputBox"
          onChange={handleSearchChange}
        ></input>
        <button className="searchBoxSearchBtn" onClick={handleSearchClick}>
          Search
        </button>
      </section>
    </div>
  );
};

export default MainSearchBox;
