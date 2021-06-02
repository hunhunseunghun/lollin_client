import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 150px;

  .soloWrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 298px;
    height: 120px;
    padding: 8px 0;
    border: 1px solid gray;
  }

  .soloContent {
    display: flex;
  }
  .iconWrap {
    width: 104px;
    height: 104px;
  }
  .tierIcon {
    width: 104px;
    height: 104px;
  }
  .dataWrap {
    padding: 10px 10px;
  }
  .rankTag {
    font-size: 11px;
    color: #879292;
  }
  .tierTag {
    font-size: 15px;
    font-weight: bold;
    color: #1f8ecd;
  }

  .lpTag {
    color: #555e5e;
    font-weight: bold;
  }
  .winloseTag {
    font-size: 12px;
  }
  .winningRate {
    font-size: 12px;
  }
  .flexWrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 298px;
    height: 120px;
    padding: 8px 0;
    border: 1px solid gray;
  }
  .flexContent {
    display: flex;
  }
  .unrankedTag {
    padding: 20px 0;
    color: #555e5e;
    font-weight: bold;
  }
`;
