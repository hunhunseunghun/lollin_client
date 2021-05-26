import styled from "styled-components";

export const ChampSearchArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 300px;
  padding: 0.5rem;
  margin-top: 5rem;
  border-top: 0.1rem solid #ffffffb3;
  border-bottom: 0.1rem solid #ffffffb3;
  color: #e0d1b2;

  &:hover {
    border-top: 0.1rem solid #c2902d;
    border-bottom: 0.1rem solid #c2902d;

    button {
      border-left: 0.1rem solid #c2902d;
      height: 100%;
      font-size: 0.8rem;
      color: #c2902d;
      font-weight: bold;
      cursor: pointer;

      transition: font-size 0.5s;
    }
  }

  @media (max-width: 520px) {
    margin-top: 1rem;
    font-size: 0.6rem;
    padding: 0.5%;
    font-size: 0.9rem;
  }
`;

export const ChampSearchInput = styled.input`
  all: unset;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const ChampSearchBtn = styled.button`
  all: unset;
  font-size: 0.7rem;
  justify-content: center;
  padding-left: 0.5rem;
  border-left: 0.1rem solid gray;
  transition: font-size 0.5s;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
