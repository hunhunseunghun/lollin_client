import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 15rem;
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

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  z-index: 3;
  position: relative;
  place-items: center;
  background-color: #000000be;
  padding-top: 2rem;
`;

export const UserTitle = styled.span`
  margin-top: 25px;
  color: white;
  font-weight: bold;
  font-size: 4rem;
  text-align: center;
  padding: 2rem 0;

  @media (min-width: 320px) and (max-width: 530px) {
    font-size: 3rem;
    transition: font-size 0.5s;
  }
`;

export const UserContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 320px) and (max-width: 530px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;