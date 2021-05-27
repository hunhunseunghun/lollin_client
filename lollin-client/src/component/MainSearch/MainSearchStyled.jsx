import styled from "styled-components";

export const SearchBox = styled.section`
  background-color: #000000;
  height: 120px;

  .searchSectionTop {
    height: 40%;
  }
  .searchSectionBottom {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .summonerSearchFrom {
    position: relative;
    width: 80%;
    max-width: 560px;
    border-radius: 2px;
    background-color: #fff;
  }
  .summonerInputBox {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    line-height: 17px;
    font-size: 14px;
    color: #9b9b9b;
    box-sizing: border-box;
    outline: none;
    box-shadow: 1.5px 2.5px 0.9px 1px #e2a600;
  }
  /* rgb(0 0 0/ 90%) */
  .searchBoxSearchBtn {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 5px;
    margin-top: 4px;
    padding: 3px 5px;
    border: none;
    background-color: #f8b600;
    border-radius: 2px;
    color: white;
    font-weight: bold;
  }
`;

export const SearchBtn = styled.button`
  all: unset;
`;
