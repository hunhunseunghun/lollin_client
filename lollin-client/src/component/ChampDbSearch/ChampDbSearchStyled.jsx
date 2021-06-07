import styled from "styled-components";

export const ChampSearchArea = styled.div`
  display: flex;
  background-color: transparent;
  margin-top: 25px;

  .champSearchForm {
    position: relative;
    width: 280px;
    max-width: 250px;
    border-radius: 2px;
    background-color: transparent;
  }
  .champSearchInput {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    line-height: 17px;
    font-size: 0.82rem;
    color: white;
    box-sizing: border-box;
    outline: 0;
    border-bottom: 1px solid #ffc400;

    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }

  .champSearchBtn {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 5px;
    margin-top: 4px;
    padding: 5px 7.5px;
    border: none;
    background-color: #ffbb00;
    border-radius: 2px;
    color: #404040;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background-color: #e4e400;
      transition: background-color 0.4s;
      cursor: pointer;
    }
  }
`;
