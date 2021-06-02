import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  color: #575757;

  .historyWrapper {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr 2fr;
    width: 230px;
    height: 80px;
    margin: 10px 0;
    background-color: pink;
  }
  .isWin {
    background-color: #a3cfec;

    border: 1px solid #99b9cf;
  }
  .isLose {
    background-color: #e2b6b3;
    border: 1px solid #cea7a7;
  }
  .imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img {
    width: 50px;
    height: 50px;
    border-radius: 250px;
  }
  .matinData {
    height: 96px;
  }
  .match {
    position: relative;
    top: 1rem;
    text-align: center;
    height: 50%;
    font-size: 8px;
  }
  .result {
    width: 50px;
    color: #1f8ecd;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
  }
  .loseResult {
    color: #b6594f;
  }
  .subData {
    display: grid;
    place-items: center;
    padding: 10px;
    font-weight: bold;
    font-size: 11px;
  }
  .kda {
    font-size: 10px;
    font-weight: bold;
  }
`;
