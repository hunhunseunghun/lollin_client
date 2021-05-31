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
    width: 35%;
    max-width: 560px;
    min-width: 247px;
    border-radius: 2px;
    background-color: transparent;
  }
  .summonerInputBox {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    border-bottom: 1px solid #ffc400;
    line-height: 17px;
    font-size: 17px;
    color: #575757;
    box-sizing: border-box;
    outline: none;

    &:focus::-webkit-input-placeholder {
      color: white;
      font-size: 16px;
    }
  }
  /* rgb(0 0 0/ 90%) */
  .searchBoxSearchBtn {
    display: flex;
    position: absolute;
    height: 22px;
    top: 0;
    right: 0;
    margin-right: 5px;
    margin-top: 6px;
    padding: 3px 5px;
    border: none;
    background-color: #ffbb00;
    border-radius: 2px;
    color: #404040;
    font-weight: bold;
    transition: background-color 0.4s;
    font-size: 1.1rem;
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
