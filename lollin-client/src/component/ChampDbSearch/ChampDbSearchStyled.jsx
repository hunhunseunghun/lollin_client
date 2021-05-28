import styled from "styled-components";

export const ChampSearchArea = styled.div`
  display: flex;
  background-color: white;
  margin-top: 25px;

  .champSearchForm {
    position: relative;
    width: 280px;
    max-width: 250px;
    border-radius: 2px;
    background-color: #fff;
  }
  .champSearchInput {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    line-height: 17px;
    font-size: 0.5rem;
    color: #575757;
    box-sizing: border-box;
    outline: none;
    box-shadow: 1.5px 2.5px 0.9px 1px #ffc4006e;

    &:focus::-webkit-input-placeholder {
      font-size: 0.5rem;
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
    padding: 5px 3px;
    border: none;
    background-color: #ffbb00;
    border-radius: 2px;
    color: white;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background-color: #c99300;
      transition: background-color 0.4s;
    }
  }
`;
