import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  .gradeWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .gradeIconWrap {
    position: relative;
    top: -1.5rem;
    .gardeIconImg {
      width: 120px;
      height: 120px;
    }
  }

  .gradeText {
    padding-bottom: 10px;
    font-size: 22px;
    color: #505757;
    font-weight: bold;
    font-size: 22px;
  }
  .VERYBAD {
    color: red;
  }

  .gardePoint {
    padding-bottom: 10px;
    font-size: 18px;
    color: #505757;
    font-weight: bold;

    span {
      font-weight: normal;
      font-size: 14px;
    }
  }
`;
