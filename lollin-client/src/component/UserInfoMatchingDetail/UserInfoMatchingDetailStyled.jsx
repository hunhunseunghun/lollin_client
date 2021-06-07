import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #2e2e2e;

  .preView {
    display: grid;
    width: 100%;
    height: 280px;
    place-items: center;
  }
  .style {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 280px;
  }

  .userInformation {
    width: 100%;
    height: 90%;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .imgWarp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  img {
    width: 104px;
    height: 104px;
  }
  .info {
    place-items: center;
    text-align: center;
    width: 100%;
  }
  .tier {
    width: 100%;
    padding-bottom: 10px;
    font-size: 16px;
    color: #505757;
    text-align: center;
  }
  .name {
    width: 100%;
    padding-bottom: 12px;
    color: #555e5e;
    font-weight: bold;
    font-size: 16px;
  }
  .rate {
    width: 100%;
    padding-bottom: 10px;
    font-size: 16px;
    color: #505757;
  }
`;
