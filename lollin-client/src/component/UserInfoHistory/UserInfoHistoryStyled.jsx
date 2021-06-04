import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dadada;

  .topWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    background-color: #dadada;
    width: 600px;
    height: 5rem;
    border-top: 1px solid #808080b0;
    border-left: 1px solid #808080b0;
    border-right: 1px solid #808080b0;
  }
  .name {
    height: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
  }
  .searchArea {
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 30px;
    box-shadow: 3.5px 3.5px 2px 0.5px #f7bd00dc;
    border-top: 1px solid #dfab00;
    border-left: 1px solid #dfab00;
    border-radius: 5px;
  }
  .searchInput {
    all: unset;
    width: 60%;
    font-size: 0.5rem;
    margin-left: 5px;
    color: #949494;
  }
  .searchInput:focus {
    all: unset;
    width: 60%;
    font-size: 0.7rem;
    margin-left: 10px;
    color: #4f4f4f;
    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }

  .searchBtn {
    all: unset;
    width: 20%;
    height: 20px;
    text-align: center;
    background-color: #f7bd00;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 5px;
  }

  .searchBtn:hover {
    cursor: pointer;
  }
`;
