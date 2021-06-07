import styled from "styled-components";

export const ItemsFilter = styled.div`
  display: grid;
  place-items: center;
  max-width: 760px;
  min-width: 700px;
  background-color: #0000007d;
  border: 0.1rem solid #ffffff37;
  width: 80%;
  margin-top: 20px;
  color: white;

  .lastBox {
    border: none;
  }

  @media screen and (max-width: 768px) {
    min-width: 375px;
    border: none;
  }
`;

export const CheckBoxArea = styled.div`
  width: 80%;
  display: grid;
  place-items: center;
  padding: 5px;
  font-size: 0.6rem;
  border-bottom: 0.1rem solid #ffffff37;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
  }
  input {
    height: 100%;
    margin: 0px 0px 0px 0px;
  }
  div {
    display: flex;
    width: 5rem;
    padding: 1px;

    div {
      margin-left: 5px;
    }
  }

  .filterText {
    font-size: 0.9rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    all: unset;
    display: none;
    justify-content: left;
    width: 90%;
    font-size: 0.5rem;
    padding: 3px;

    .filterText {
      width: 20%;
      justify-content: left;
      font-size: 0.5rem;
      text-align: center;
    }

    section div {
      all: unset;
      display: flex;
    }
  }
`;
