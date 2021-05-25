import styled from "styled-components";

export const ItemsList = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 750px;
  max-width: 1440px;
  margin-top: 5%;
  font-size: 0.8rem;
  @media screen and (max-width: 768px) {
    justify-content: unset;
    max-width: 370px;
    min-height: 350px;
  }
`;

export const ItemBox = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 3fr;
  place-items: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.233);
  padding: 10px;
  img {
    width: 50px;
    margin-right: 20px;
  }

  .itemDesc {
    display: grid;
    place-items: left;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    all: unset;
    width: 100%;
    display: grid;
    place-items: center;
    color: white;
    font-size: 0.5rem;

    img {
      all: unset;
      margin-top: 5px;
      margin-right: none;
      width: 40px;
    }

    .itemDesc {
      all: unset;
      width: 90%;
      min-height: 10px;
      text-align: left;
      border-bottom: 1px solid #ffffff58;
      text-align: center;
      padding: 5px;
    }
  }
`;

export const ItemName = styled.span`
  display: grid;
  place-items: center;
  color: #cfa85c;
  width: 100%;
  height: 100%;
  border-left: 0.1rem dashed rgba(255, 255, 255, 0.233);
  border-right: 0.1rem dashed rgba(255, 255, 255, 0.233);
  margin-right: 20%;

  @media screen and (max-width: 768px) {
    all: unset;
    color: #cfa85c;
    place-items: center;
    padding: 10px;
  }
`;
