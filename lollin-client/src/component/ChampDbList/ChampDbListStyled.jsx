import styled from "styled-components";

export const ChampDbListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  max-width: 1600px;
  min-height: 1200px;
  justify-content: center;
`;

export const ChampDbListBox = styled.a`
  display: block;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.2);
      transition: transform 0.5s;
    }
    .champNameTag {
      background-color: #006680;
      transition: padding-left 0.5s;
      padding-left: 10%;
    }
  }
`;

export const ImageContainer = styled.span`
  border-radius: 20px;
  position: relative;
  display: grid;
  width: 170px;
  overflow: hidden;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    transition: transform 0.5s;
    object-fit: cover;
    z-index: 1;
  }

  @media (max-width: 520px) {
    width: 140px;
  }

  .champNameTag {
    position: absolute;

    bottom: 0;
    display: block;
    background-color: #051c24;
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    width: 170px;
    padding: 10px 0px;
    padding-left: 5%;
    transition-property: background-color, padding-left;
    transition: all 1s;
    z-index: 2;

    @media (max-width: 520px) {
      width: 140px;
    }
  }
`;
