import React from "react";
import {
  SearchBox,
  MainVideo,
  MainBackVideo,
  BackWrapper,
  TopView,
  Intro,
  ClickBtn,
} from "./MainTopViewStyled.jsx";
import mainVideo from "../../Images/mainbackvideo.webm";
import mainTopLogo from "../../Images/logo2.png";
// import mainBgi from "../../Images/MainBgi.jpg";

const MainSearchBox = () => {
  const scrollMove = () => {
    let location = document.querySelector("#champPre").offsetTop;
    window.scrollTo({top: location, behavior:'smooth'})
  }

  return (
    <TopView className="TopView">
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
              <Intro>사랑받는 롤린이의 교과서, Lollin</Intro>
              <br />
              <ClickBtn onClick={scrollMove}>
                Click me!
              </ClickBtn>
              {/* <img
                className="foreLogoImg"
                src={mainTopLogo}
                alt={mainTopLogo}
                sizes="(max-width:599px) 70vw,40vw"
              ></img> */}
            </div>
          </div>
          <div className="foreGroundRow-bottom"></div>
        </div>
      </div>
    </TopView>
  );
};

export default MainSearchBox;
