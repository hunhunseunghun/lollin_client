import styled from "styled-components";

export const Items = styled.div`
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
  padding-top: 2rem;
`;

export const BackImg = styled.img`
  position: absolute;
  width: 100%;
  max-width: 1440px;
  min-height: 50rem;
  filter: blur(1.8px);
  top: 2rem;
  z-index: 2;

  @media (max-width: 768px) {
    min-height: 30rem;
  }
`;

export const ItemTitle = styled.span`
  margin-top: 25px;
  color: white;
  font-size: 5rem;
  font-weight: bold;
`;
