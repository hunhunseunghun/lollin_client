import styled from "styled-components";

export const TopView = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  min-height: 20.5rem;
  /* 31.25rem; */
  padding: 3.75rem;

  height: 31rem;
  z-index: 1;

  .foreGoundWrapper {
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 90%;
    max-width: 95rem;
    height: 30rem;
    min-height: 300px;
    /* 31.25rem; */
    margin: 0px auto;
    top: 0rem;
  }
  .foreGroundVideoWrapper {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgb(7, 18, 26);
  }
  .foreGroundVideo {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .foreGroundPoster {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
  }
  .foreGroundStyle {
    position: absolute;
    inset: 1px;
    pointer-events: none;
  }
  .foreGroundCanvas {
    position: absolute;
    display: block;
    border: 0.1rem solid #ffffff71;
    height: 30rem;
    min-height: 300px;
    left: 0.6rem;
    top: -12px;
    width: 100%;
    aspect-ratio: auto 764 / 688;
  }
  .foreGroundInner {
    width: 100%;
  }
  .foreGroundRow-Top {
    width: 100%;
    margin-top: 0.625rem;
    text-align: center;
  }
  .foreGroundLogo {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 75px;
  }
  .foreLogoImg {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0px;
    border-style: none;
  }
  .foreGroundRow-bottom {
    width: 100%;
    margin-top: 0.625rem;
    text-align: center;
  }
  .serchBoxInputBox {
    all: unset;
    position: relative;
    display: inline-block;
    min-width: 195px;
    height: 30px;
    padding: 0px;
    color: rgb(1, 1, 1);
    font-size: 0.8125rem;
    letter-spacing: 0.15em;
    font-weight: bold;
    background-color: white;
    border: 0px;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    .foreGroundCanvas {
      display: none;
    }
  }
`;

export const MainVideo = styled.video`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const BackWrapper = styled.section`
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background: rgba(10, 130, 216, 0.301);
  .searchBoxBackVideo {
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .searchBoxStylePoster {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    animation: 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards
      running bTKSmk;
  }
`;

export const MainBackVideo = styled.video`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: blur(20px);
`;
