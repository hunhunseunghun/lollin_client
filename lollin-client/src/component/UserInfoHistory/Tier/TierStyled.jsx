import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background-color: #d6d3d3;

  .soloWrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 299.5px;
    height: 120px;
    padding: 9px 0;
    border: 1px solid #808080b0;
    border-bottom: none;
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
    color: #6e7777;
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
    color: #555e5e;
    font-size: 12px;
  }
  .winningRate {
    color: #555e5e;
    font-size: 12px;
  }
  .flexWrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 299.5px;
    height: 120px;
    padding: 9px 0;
    border: 1px solid gray;
    border-bottom: none;
    border-left: none;
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
