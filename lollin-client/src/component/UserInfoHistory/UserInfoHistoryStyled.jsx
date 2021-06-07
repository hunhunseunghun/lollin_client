import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  display: flex;
  height: 872px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;

  .entireWrap {
    height: 872px;
  }
  .topWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    background-color: transparent;
    width: 650px;
    height: 5rem;
  }
  .name {
    height: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
  }
  .searchArea {
    display: flex;
    position: relative;
    width: 250px;
    max-width: 280px;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    height: 30px;
    border-radius: 5px;
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .searchInput {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    line-height: 17px;
    font-size: 0.82rem;
    color: white;
    box-sizing: border-box;
    outline: 0;
    border-bottom: 1px solid #ffc400;
  }

    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
  }

  .searchBtn {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    text-align: center;
    font-weight: bold;
    margin-right: 5px;
    margin-top: 4px;
    padding: 2px 2px;
    border: none;
    background-color: #ffbb00;
    border-radius: 2px;
    color: #404040;
    transition: background-color 0.4s;
    font-size: 1.1rem;
  }

  .searchBtn:hover {
    background-color: #e4e400;
    transition: background-color 0.4s;
    cursor: pointer;
  }

  @media (max-width: 670px) {
    width: 490px;
    display: flex;
    height: 872px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;

    .entireWrap {
      height: 872px;
    }
    .topWrap {
      width: 450px;
    }
    .name {
      font-size: 0.7rem;
    }
    .searchArea {
      width: 200px;
    }
    .searchInput {
      padding: 10px;
    }
  }
`;
