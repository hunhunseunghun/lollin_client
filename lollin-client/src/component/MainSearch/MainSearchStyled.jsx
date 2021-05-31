import styled from "styled-components";

export const SearchBox = styled.section`
  height: 100px;

  .searchSectionTop {
    height: 50%;
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
    width: 60%;
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
    font-size: 13px;
    color: #575757;
    box-sizing: border-box;
    outline: none;
    box-shadow: 1.5px 2.5px 0.9px 1px #ffffff3e;

    &:focus::-webkit-input-placeholder {
      color: white;
    }
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
    background-color: #ffbb00;
    border-radius: 2px;
    color: white;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background-color: #c99300;
      transition: background-color 0.4s;
      cursor: pointer;
    }
  }
`;

export const SearchBtn = styled.button`
  all: unset;
`;
