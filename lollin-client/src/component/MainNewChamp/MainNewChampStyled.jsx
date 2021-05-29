import styled from "styled-components";

export const NewChamp = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  margin-top: 5rem;

  .searchBoxContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    width: 70%;
    max-width: 1100px;
  }
  // section left
  .newChampWrapLeft {
    display: grid;
    width: 49%;
    max-width: 550px;
    min-width: 400px;
    place-items: center;
  }
  .videoWrapper {
    width: 95%;
  }
  video {
    width: 100%;
    max-width: 530px;
    border-radius: 20px;
  }

  .optionList {
    position: relative;
    width: 350px;
    display: inline-flex;
  }

  .optionIcon {
    position: relative;
    display: flex;
    flex: 1 1;
    width: 60px;
    height: 60px;
  }

  .optionIconBorder {
    position: absolute;
    width: 50px;
    height: 50px;
    transform: translate(10px, 10px) scale(1);
    transition: transform 1s;
  }
  .optionIconBorder :hover {
    position: absolute;
    transform: translate(0px, -10px) scale(1);
    transition: all 1000ms cubic-bezier(0.57, -1, 0.725, -1);
    cursor: pointer;
  }
  .optionButtonImg {
    width: 100%;
    height: 100%;
    border-style: none;
  }
  // section right
  .newChampWrapRight {
    display: grid;
    width: 49%;
    max-width: 550px;
    min-width: 400px;
    place-items: center;
  }

  .desc {
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

  .newChampImgWrap {
    position: relative;
    margin-bottom: 1rem;
  }

  .newChamImg {
    width: 98%;
    max-width: 530px;
    margin-top: 1rem;

    border-radius: 20px;
  }
  .newChamName {
    position: absolute;
    right: 10%;
    bottom: 0;
    z-index: 10000;
    font-size: 2rem;
    color: #ffffff;
  }

  // section style
  .titleWrap {
    width: 1px;
    background-color: #d69d00cb;
    margin-left: 3rem;
  }
  .title {
    writing-mode: vertical-lr;
    font-size: 3px;
    font-weight: bold;
    color: #d69d00cb;
  }
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
      display: grid;
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
  }
`;
