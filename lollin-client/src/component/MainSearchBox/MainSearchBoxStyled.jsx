import styled from "styled-components";
import bgi from "../../Images/MainBgi-Teemo.jpeg";

export const SearchBtn = styled.button`
  all: unset;
  border: 1px solid black;
`;

export const SearchBox = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  height: 20%;
  place-items: center;
  background-image: url(${bgi});
`;
