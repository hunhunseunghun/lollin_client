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
  background-color: #0000005e;
  z-index: 3;
  padding-top: 7rem;
`;

export const BackImg = styled.img`
  position: absolute;
  width: 100%;
  max-width: 1440px;
  filter: blur(1.8px);
  z-index: 2;
`;

export const ItemTitle = styled.span`
  margin-top: 75px;
  color: #cfa85c;
  font-size: 2rem;
  font-weight: bold;
`;
