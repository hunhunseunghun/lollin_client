import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 650px;
  background-color: #dadada;
  color: #575757;
  border: 1px solid #808080b0;

  .historyWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1.4fr 1.1fr;
    width: 270px;
    height: 80px;
    margin: 5px 0 2px 0;
    background-color: pink;
    padding: 2px 4px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img {
    width: 50px;
    height: 50px;
    border-radius: 250px;
  }
  .champName {
    padding: 2px;
    font-size: 12px;
  }
  .mainData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85px;
  }

  .match {
    text-align: center;

    font-size: 8px;
  }
  .pastTime {
    text-align: center;
    font-size: 11px;
  }
  .result {
    color: #1f8ecd;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 3px 0;
  }
  .playTime {
    text-align: center;
    font-size: 11px;
  }

  .loseResult {
    color: #b6594f;
  }
  .subData {
    display: grid;
    place-items: center;
    padding: 10px 0;

    font-size: 12px;
  }
  .lane {
    font-size: 10px;
  }
  .kda {
    font-size: 10px;
    font-weight: bold;
  }
  .badgeWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-size: 5px;
    padding-right: 5px;
  }
  .badge {
    width: 80%;
    text-align: center;
    border-radius: 20px;
    color: white;
    border: 1px solid #80808023;
    font-size: 9px;
    margin: 3px 0;
  }
  .tripleKills {
    background-color: #008f7c;
  }
  .quadraKills {
    background-color: #000ed8;
  }
  .pentaKills {
    background-color: #d80053;
  }
  .noResult {
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
    min-height: 250px;
  }
  .noResultImg {
    width: 100px;
    margin-top: 40px;
  }
`;
