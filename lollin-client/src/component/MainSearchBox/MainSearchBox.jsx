import React from "react";
import styled from "styled-components";
import {
  SearchBtn,
  SearchBox,
  MainVideo,
  MainBackVideo,
  BackWrapper,
} from "./MainSearchBoxStyled.jsx";
import mainVideo from "../../Images/mainbackvideo.webm";
import mainTopLogo from "../../Images/maintoplogo.png";
// import mainBgi from "../../Images/MainBgi.jpg";

const MainSearchBox = ({ handleSearchChange, handleSearchClick }) => {
  return (
    <SearchBox className="searchBox">
      <BackWrapper className="searchBoxWrap">
        <div className="searchBoxBackVideo">
          <div className="searchBoxStylePoster"></div>
          {/* <img calssName="searchBoxBgi" src={mainBgi} /> */}
          <MainBackVideo src={mainVideo} loop muted autoPlay />
        </div>
      </BackWrapper>
      <div className="foreGoundWrapper">
        <div className="foreGroundVideoWrapper">
          <div className="foreGroundVideo">
            <div className="foreGroundPoster"></div>
            <MainVideo src={mainVideo} loop muted autoPlay />
          </div>
        </div>
      </div>
      <div className="foreGroundStyle">
        <canvas className="foreGroundCanvas"></canvas>
      </div>
      <div className="foreGroundInner">
        <div calssName="foreGroundRow-top">
          <div className="foreGroundLogo">
            <img
              className="foreLogoImg"
              src={mainTopLogo}
              sizes="(max-width:599px) 80vw,40vw"
            ></img>
          </div>
        </div>
        <div calssName="foreGroundRow-bottom"></div>
      </div>

      <div className="searchBoxLogo">logo</div>
      <input className="serchBoxInputBox" onChange={handleSearchChange}></input>
      <SearchBtn className="searchBoxSearchBtn" onClick={handleSearchClick}>
        Search
      </SearchBtn>
    </SearchBox>
  );
};

export default MainSearchBox;
