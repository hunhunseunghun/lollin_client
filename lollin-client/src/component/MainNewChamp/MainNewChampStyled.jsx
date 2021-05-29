import styled from "styled-components";

export const NewChamp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  padding-top: 4rem;

  .newChampContainer {
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    flex-wrap: wrap-reverse;
    padding: 0 1rem;
    padding-left: 2rem;
    width: 100%;
    max-width: 1100px;
  }
  // section right
  .newChampWrapRight {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    width: 100%;
    min-width: 400px;
  }

  .newChampImgWrap {
    width: 100%;
    max-width: 1220px;
  }

  .newChamImg {
    width: 98%;
    max-width: 530px;
    margin-top: 1rem;
    border-radius: 20px;
  }
  .newChamName {
    position: relative;
    bottom: 4rem;
    left: 1rem;
    z-index: 10000;
    font-size: 2rem;
    color: #ffffff;
  }
  .textContainer {
    display: flex;
    width: 100%;
  }
  .desc {
    align-items: center;
    width: 90%;
  }
  .descTitle {
    width: 100%;
    text-align: right;
    font-size: 2em;
    color: rgb(255, 196, 0);
  }
  .descMain {
    width: 100%;
    text-align: right;
    font-size: 0.7rem;
    color: white;
  }
  .titleWrap {
    writing-mode: vertical-lr;
    font-size: 3px;
    font-weight: bold;
    color: #d69d00cb;
    padding-left: 1rem;
  }
  .title {
    position: relative;
    height: 90px;
    width: 1px;
    background-color: #d69d00cb;
  }
  // section left
  .newChampWrapLeft {
    display: flex;
    flex-wrap: wrap-reverse;
    width: 100%;
    min-width: 400px;
  }
  .videoWrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 1rem;
  }
  video {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
  }

  .skillWrap {
    width: 100%;
    width: 430px;
    display: flex;
    padding: 1rem;
    margin-top: 1rem;
  }

  .skillList {
    width: 450px;
    display: flex;
    justify-content: space-around;
  }
  .skillIconWrap {
    width: 67px;
    height: 67px;
    border: 0.1rem solid rgba(255, 196, 0, 0.486);
    transition: border 0.5s;
  }

  .skillIconWrap:hover {
    border: 0.1rem solid rgb(255, 196, 0);
    transition: border 0.5s;
    cursor: pointer;
  }

  .skillIcon {
    border-style: none;
  }

  @media (min-width: 1000px) {
    .textContainer {
      position: relative;
      display: flex;
      justify-content: end;
      width: 100%;
      transform: translateY(10rem);
      transition: transform 0.5s;
    }
    .skillWrap {
      width: 465px;
      position: relative;
      transform: translateY(-15rem);
      transition: transform 0.5s;
    }
  }
  // section style

  @media (min-width: 320px) and (max-width: 479px) {
    .searchBoxContainer {
      display: flex;
      justify-content: center;
      flex-wrap: wrap-reverse;
      width: 300px;
    }
    // section left
    .newChampWrapLeft {
      display: grid;
      width: 250px;
      place-items: center;
    }
    .videoWrapper {
      width: 200px;
    }
    video {
      width: 200px;
      border-radius: 20px;
    }

    .optionList {
      position: relative;
      width: 230px;
      display: inline-flex;
    }

    .optionIcon {
      position: relative;
      display: flex;
      flex: 1 1;
      width: 30px;
      height: 30px;
    }

    .optionIconBorder {
      position: absolute;
      width: 30px;
      height: 30px;
      transform: translate(10px, 10px) scale(1);
      transition: transform 1s;
    }
    .optionIconBorder :hover {
      position: absolute;
      transform: scale(0.8);
      transition: all 1000ms;
      cursor: pointer;
    }
    .optionButtonImg {
      width: 100%;
      height: 100%;
      border-style: none;
    }
    // section right
    .newChampWrapRight {
      display: flex;
      width: 50%;
      max-width: 550px;
      min-width: 300px;
      place-items: center;
    }

    .desc {
      width: 250px;
    }
    .descTitle {
      width: 100%;
      text-align: right;
      font-size: 1rem;
      color: rgb(255, 196, 0);
    }
    .descMain {
      width: 100%;
      text-align: right;
      font-size: 0.6rem;
      color: white;
    }

    .newChampImgWrap {
      position: relative;
      margin-bottom: 1rem;
    }

    .newChamImg {
      width: 200px;
      max-width: 530px;
      margin-top: 1rem;

      border-radius: 20px;
    }
    .newChamName {
      position: absolute;
      right: 10%;
      bottom: 0;
      z-index: 10000;
      font-size: 0.8rem;
      color: #ffffff;
    }

    // section style
    .titleWrap {
      display: none;
    }
    .skillWrap {
      width: 250px;
      display: flex;
      padding: 1rem;
      margin-top: 1rem;
    }

    .skillList {
      width: 250px;
      display: flex;
      justify-content: space-around;
    }
    .skillIconWrap {
      width: 30px;
      height: 30px;
      border: 0.1rem solid rgba(255, 196, 0, 0.486);
      transition: border 0.5s;
    }

    .skillIconWrap:hover {
      border: 0.1rem solid rgb(255, 196, 0);
      transition: border 0.5s;
      cursor: pointer;
    }

    .skillIcon {
      width: 30px;
      height: 30px;
      border-style: none;
    }
  }
`;
