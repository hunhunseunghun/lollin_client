import styled from "styled-components";

export const SearchBox = styled.div`
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 1px;
  }
`;

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
`;