import styled from "styled-components";

export const Items = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  z-index: 3;
`;

export const BackImg = styled.img`
  position: absolute;
  width: 100%;
  max-width: 2000px;
  filter: blur(6px);
  z-index: 2;
`;

export const ItemTitle = styled.span`
  margin-top: 10px;
  color: #cfa85c;
  font-size: 2rem;
  font-weight: bold;
`;
