import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  padding: 1rem 0;
  background-color: white;
  color: white;
  .currMatching {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 600px;
  }

  .allyTeam {
    display: flex;
    height: 260px;
    border: 1px solid #3d95e5;
  }
  .oppTeam {
    display: flex;
    height: 260px;
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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    width: 230px;
  }
  .allyWrapper {
  }
  .oppWrapper {
  }

  .player {
    display: grid;
    grid-template-columns: 1fr 3.3fr;
  }
  .allyHover:hover {
    background-color: #3d95e5;
    cursor: pointer;
  }
  .oppHover:hover {
    background-color: #ee5952;
    cursor: pointer;
  }

  .stylePlayer {
    position: relative;
    border-radius: 9px;
    width: 50px;
    height: 50px;
    border-radius: 150px;
    overflow: hidden;
    margin: 1px;
  }

  .playerImg {
    position: absolute;
    width: 50px;
    right: 0.5px;
    z-index: 1;
  }

  .playerNameTag {
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    width: 100%;
    border-left: 1px solid #969696;
    /* background-color: #a3cfec; */
    color: black;
    z-index: 3;
  }

  .oppTeam {
    display: flex;
  }
`;
