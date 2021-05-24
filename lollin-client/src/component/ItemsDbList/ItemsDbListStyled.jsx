import styled from "styled-components";

export const ItemsList = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 750px;
  max-width: 2500px;
  margin-top: 5%;
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
    width: 90px;
    margin-right: 20px;
  }

  .itemDesc {
    display: grid;
    place-items: left;
    width: 100%;
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
`;
