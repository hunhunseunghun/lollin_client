import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: #1f1f1f;
  color: white;
  padding-top: 3.5rem;
  padding-bottom: 10rem;

  .title {
    font-size: 4rem;
    font-weight: bold;
    padding-bottom: 3rem;
  }
  .currGame {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    width: 621px;
    padding-bottom: 1px;
    /* border: 1px solid white; */
  }

  .currGameText {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 1rem;
    font-weight: bold;
    color: #646464;
    padding: 4px;
  }

  .currGame-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
  .Exsit {
    border: 1px solid #cef0d2;
  }
  .noExsit {
    border: 1px solid #dadada;
  }
  .searchArea {
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 30px;
    box-shadow: 3.5px 3.5px 2px 0.5px #f7bd00dc;
    border-top: 1px solid #dfab00;
    border-left: 1px solid #dfab00;
    border-radius: 5px;
    margin-right: 3px;
    margin-bottom: 4px;
  }
  .searchInput {
    all: unset;
    width: 60%;
    font-size: 0.5rem;
    margin-left: 5px;
    color: #949494;
  }
  .searchInput:focus {
    all: unset;
    width: 60%;
    font-size: 0.7rem;
    margin-left: 10px;
    color: #4f4f4f;
    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }
  .searchBtn {
    all: unset;
    width: 20%;
    height: 20px;
    text-align: center;
    background-color: #f7bd00;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 5px;
  }

  .searchBtn:hover {
    cursor: pointer;
  }

  .infoArea-right {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center;
    align-items: center;
    width: 100%;
    height: 98.5%;
    border: 1px solid gray;
  }
  .currMatching {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
    max-width: 1243px;
  }

  .allyTeam {
    display: flex;
    height: 200px;
    border: 1px solid #3d95e5;
  }
  .oppTeam {
    display: flex;
    height: 200px;
    border: 1px solid #ee5952;
  }

  .allyNameTag {
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #3d95e5;
    font-weight: bold;
  }
  .oppNameTag {
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #ee5952;
    font-weight: bold;
  }
  .teamWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 600px;
  }
  .allyWrapper {
  }
  .oppWrapper {
  }

  .player {
    display: grid;
    grid-template-rows: 4fr 0.8fr;
  }

  .playerImg {
    position: absolute;
    width: 105%;
    right: -5px;
    z-index: 1;
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  .playerNameTag {
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    font-weight: bold;
    width: 100%;
    background-color: #dadada;
    /* background-color: #a3cfec; */
    color: #484848;
    z-index: 3;
  }
  .allyHover:hover {
    background-color: #3d95e5;
    cursor: pointer;

    .playerNameTag {
      background-color: #3d95e5;
      border: 1px solid #3d95e5;
      /* background-color: #a3cfec; */
    }
    .playerImg {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  .oppHover:hover {
    background-color: #ee5952;
    cursor: pointer;

    .playerNameTag {
      background-color: #ee5952;
      border: 1px solid #ee5952;
      /* background-color: #a3cfec; */
    }
    .playerImg {
      transform: scale(1.15);
      transition: transform 0.5s;
    }
  }

  .stylePlayer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .infoArea {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 622px;
    height: 170px;
    padding: 10px;
  }
  .infoArea-left {
    display: grid;
    place-items: center;
  }

  .currId {
    font-size: 1.4rem;
    color: #414141;
  }

  .commentArea {
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 30px;
    box-shadow: 3.5px 3.5px 2px 0.5px #f7bd00dc;
    border-top: 1px solid #dfab00;
    border-left: 1px solid #dfab00;
    border-radius: 5px;
  }
  .commentInput {
    all: unset;
    width: 60%;
    font-size: 0.5rem;
    margin-left: 5px;
    color: #949494;
  }
  .commentInput:focus {
    all: unset;
    width: 60%;
    font-size: 0.7rem;
    margin-left: 10px;
    color: #4f4f4f;
    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }
  .commentBtn {
    all: unset;
    width: 20%;
    height: 20px;
    text-align: center;
    background-color: #f7bd00;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 5px;
  }

  .commentBtn:hover {
    cursor: pointer;
  }

  .infoArea-right {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center;
    align-items: center;
    width: 100%;
    height: 98.5%;
    border: 1px solid gray;
  }
`;
