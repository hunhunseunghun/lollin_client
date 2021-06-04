import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 15rem;
  .wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
  }
  .title {
    font-size: 4rem;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 5rem 0;
  }
  .userContent {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
