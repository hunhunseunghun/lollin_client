import styled from 'styled-components';

export const NewChamp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .noDisplay {
    display: none;
  }

  .newChampContainer {
    /* padding: 0 1rem; */
    padding: 0;
    width: 100%;
    max-width: 880px;
    height: 650px;
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
    position: relative;
    width: 100%;
    max-width: 1220px;
    padding-left: 1rem;
  }

  .newChampImgStyle {
    position: absolute;
    width: 397px;
    height: 236px;
    border: 0.1rem solid #ffffff71;

    top: 0.5rem;
    left: 1.4rem;
    z-index: 20;
  }

  .newChamImg {
    width: 98%;
    max-width: 398px;
    margin-top: 1rem;
  }
  .newChamName {
    position: relative;
    bottom: 3.2rem;
    left: 1rem;
    z-index: 10000;
    font-size: 2rem;
    color: #ffffff;
  }
  .textContainer {
    display: flex;
    width: 100%;
    transition: transform 0.3s;
  }
  .titleWrap {
    writing-mode: vertical-lr;
    font-size: 3px;
    font-weight: bold;
    color: #d69d00cb;
    padding-left: 1rem;
    padding-top: 1rem;
  }
  .desc {
    align-items: center;
    width: 90%;
  }
  .descTitle {
    width: 100%;
    text-align: right;
    font-size: 1.5rem;
    color: rgb(255, 196, 0);
  }
  .descMain {
    width: 100%;
    text-align: right;
    font-size: 0.7rem;
    color: white;
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
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    width: 100%;
    min-width: 400px;
  }
  .videoWrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 452px;
    height: 271px;
    padding-right: 2.3rem;
  }
  .videoStyle {
    position: absolute;
    width: 397px;
    height: 271px;
    border: 0.1rem solid #ffffff71;
    top: -0.5rem;
    right: 1.8rem;
    z-index: 20;
  }
  video {
    width: 100%;
    max-width: 400px;
  }

  .skillWrap {
    width: 100%;
    width: 360px;
    display: flex;
    padding: 1rem;
    padding-left: 0.8rem;
    margin-top: 1rem;
  }

  .skillList {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .skillIconWrap {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 60px;
    height: 60px;
    border: 0.1rem solid rgba(255, 196, 0, 0.486);
    transition: border 0.5s;
  }

  .skillIconWrap:hover {
    border: 0.1rem solid rgb(255, 196, 0);
    transition: border 0.5s;
    cursor: pointer;
  }

  .skillIcon {
    width: 50px;
    height: 50px;
    border-style: none;
  }

  @media (min-width: 924px) {
    .newChampContainer {
      padding: 0 0;
      padding-top: 2rem;
    }
    .textContainer {
      position: relative;
      display: flex;
      justify-content: end;
      width: 100%;
      transform: translateY(10rem);
      transition: transform 0.3s;
    }
    .descTitle {
      width: 100%;
      text-align: right;
      font-size: 2.2rem;
      color: rgb(255, 196, 0);
    }
    .descMain {
      width: 100%;
      text-align: right;
      font-size: 0.77rem;
      color: white;
    }

    /* .skillWrap {
      width: 380px;
      position: relative;
      transform: translateY(-15rem);
      transition: transform 0.5s;
    } */
  }
  // section style

  @media (min-width: 320px) and (max-width: 479px) {
    .searchBoxContainer {
      display: flex;
      justify-content: center;
      flex-wrap: wrap-reverse;
      width: 250px;
    }
    // section left
    .newChampWrapLeft {
      display: grid;
      place-items: center;
      min-width: 200px;
    }
    .videoWrapper {
      width: 200px;
    }
    video {
      width: 200px;
      border-radius: 20px;
    }

    // section right
    .newChampWrapRight {
      display: grid;
      width: 100%;
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
    .newChampImgStyle {
      display: none;
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
    .videoStyle {
      display: none;
    }
  }
`;
