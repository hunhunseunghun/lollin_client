import React from "react";
import styled from "styled-components";
import {
  SearchBtn,
  SearchBox,
  MainVideo,
  MainBackVideo,
  BackWrapper,
} from "./MainTopViewStyled.jsx";
import mainVideo from "../../Images/mainbackvideo.webm";
import mainTopLogo from "../../Images/testlogo.png";
// import mainBgi from "../../Images/MainBgi.jpg";

const MainSearchBox = ({ handleSearchChange, handleSearchClick }) => {
  return (
    <SearchBox className="searchBox">
      <BackWrapper className="searchBoxWrap">
        <div className="searchBoxBackVideo">
          <div className="searchBoxStylePoster"></div>
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
        <div className="foreGroundStyle">
          <canvas className="foreGroundCanvas"></canvas>
        </div>
        <div className="foreGroundInner">
          <div className="foreGroundRow-Top">
            <div className="foreGroundLogo">
              <img
                className="foreLogoImg"
                src={mainTopLogo}
                sizes="(max-width:599px) 80vw,40vw"
              ></img>
            </div>
          </div>
          <div className="foreGroundRow-bottom"></div>
        </div>
      </div>
    </SearchBox>
  );
};

export default MainSearchBox;
