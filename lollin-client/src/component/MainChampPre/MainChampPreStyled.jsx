import styled from "styled-components";
import lotaImg from "../../Images/AatroxBackImg.jpg";

export const ChampPre = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: rgba(129, 129, 127, 0.493);
  height: 25%;
  place-items: center;
`;

export const ChampPreLotaImg = styled.div`
  width: 80%;
  height: 80%;
  background-image: url(${lotaImg});
  background-size: 100% 100%;
  &:hover {
    background-color: rgba(2, 2, 2, 0.233);
    cursor: grabbing;
  }
`;
