import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  color: #555;

  .historyWrapper {
    display: flex;
    width: 250px;
    height: 96px;
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
    vertical-align: middle;
    height: 96px;
  }
  .match {
    text-align: center;

    font-size: 8px;
    padding: 6px 0 4px 0;
  }
  .result {
    width: 50px;
    color: #1f8ecd;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    padding: 3px 0;
  }
  .loseResult {
    color: #b6594f;
  }
`;
