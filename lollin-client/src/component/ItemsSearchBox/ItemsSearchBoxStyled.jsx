import styled from "styled-components";

export const SearchBox = styled.div`
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
    box-shadow: 1.5px 2.5px 0.9px 1px #ffc400a6;

    &:focus::-webkit-input-placeholder {
      font-size: 0.5rem;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 1px;
  }
`;
/* 
export const SearchBar = styled.input`
  all: unset;
  width: 200px;
  border: 0.1rem solid #ffffffab;
  padding: 3px;
  border-top-right-radius: 10px;
  color: white;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    padding: 7px;
    border-radius: 0px;
  }
`; */
