import styled from "styled-components";

export const ChampSearchArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 300px;
  padding: 0.5rem;
  margin-top: 5rem;

  border-top: 0.1rem solid gray;
  border-bottom: 0.1rem solid gray;

  &:hover {
    border-top: 0.1rem solid #c2902d;
    border-bottom: 0.1rem solid #c2902d;

    button {
      border-left: 0.1rem solid #c2902d;
      height: 100%;
      font-size: 0.9rem;
      color: #c2902d;
      font-weight: bold;
      cursor: pointer;

      transition: font-size 0.5s;
    }
  }
`;

export const ChampSearchInput = styled.input`
  all: unset;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media (max-width: 520px) {
    all: unset;
    margin-top: 1rem;
    font-size: 1.5rem;
    padding: 0.5%;
    font-size: 1rem;
    border: 0.1rem solid #c2902d;
  }
`;

export const ChampSearchBtn = styled.button`
  all: unset;
  font-size: 0.8rem;
  justify-content: center;
  padding-left: 1rem;
  border-left: 0.1rem solid gray;
  transition: font-size 0.5s;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
