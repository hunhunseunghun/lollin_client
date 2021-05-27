import styled from "styled-components";

export const ChampDBcontainter = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #000000ce;
  z-index: 3;
`;
export const BackImg = styled.img`
  position: absolute;
  width: 100%;
  filter: blur(1.8px);
  max-width: 1440px;
  z-index: 2;
`;
export const ChampDbTiltle = styled.span`
  margin-top: 3rem;
  font-size: 5rem;
  font-weight: bold;
  color: white;

  @media (max-width: 520px) {
    margin-top: 1rem;
    font-size: 3rem;
  }
`;
