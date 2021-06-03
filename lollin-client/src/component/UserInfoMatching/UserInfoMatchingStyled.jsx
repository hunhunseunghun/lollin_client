import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  color: white;

  .currGameText {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    padding: 2rem 0;
  }
  .currMatching {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
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
    color: black;
    z-index: 3;
  }

  .infoArea {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 619px;
    padding: 10px;
  }
`;
