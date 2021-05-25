import styled from "styled-components";

export const ChampDBcontainter = styled.div`
  display: flex;
  background-color: #020020;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
