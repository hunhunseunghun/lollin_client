import styled from "styled-components";

export const Container = styled.div`
  background-color: #d7d3d3;
  color: #2e2e2e;

  fieldset {
    width: 305px;
    height: 139px;
  }

  img {
    width: 104px;
    height: 104px;
  }
  .wrap {
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    place-items: center;
    width: 299.5px;
    height: 120px;
    padding: 9px 0;
    border-bottom: none;
  }
  .content {
    display: flex;
  }
  .imgWarp {
    width: 104px;
    height: 104px;
  }
  .info {
    padding: 10px 10px;
  }
  .tier {
    font-size: 13px;
    color: #505757;
  }
  .name {
    padding: 10px 0;
    color: #555e5e;
    font-weight: bold;
  }
  .rate {
    font-size: 13px;
    color: #505757;
  }
`;
