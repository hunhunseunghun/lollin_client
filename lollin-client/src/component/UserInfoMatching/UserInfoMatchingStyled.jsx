import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 652px;
  height: 1152px;
  color: white;

  .title {
    font-size: 4rem;
    font-weight: bold;
    padding-bottom: 3rem;
  }

  .entireWrap {
    display: flex;
    flex-direction: column;

    place-items: center;
    width: 80%;
    min-width: 652px;
    height: 1300px;
    max-width: 1320px;
    background-color: transparent;
  }
  .currGame {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    width: 621px;
    height: 81px;
    padding-bottom: 1px;
  }

  .currGameText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 1rem;
    font-weight: bold;
    color: #646464;
    padding: 4px;
  }
  .currGame-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .currGame-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .Exsit {
    color: #239223;
    font-size: 1rem;
    text-align: center;
    .currId {
      font-size: 1.3rem;
      color: whitesmoke;
    }
  }
  .noExsit {
    color: whitesmoke;
    font-size: 2rem;
  }
  .noExsitinner {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .noExsitSub {
    color: red;
    font-size: 0.7rem;
    text-align: center;
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
    margin-bottom: 4px;
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

  .infoArea-right {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center;
    align-items: center;
    width: 100%;
    height: 98.5%;
    border: 1px solid gray;
  }
  .currMatching {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
    height: 700px;
  }

  .allyTeam {
    display: flex;
    height: 270px;
    border: 1px solid #3d95e5;
    margin: 1rem 0;
  }
  .oppTeam {
    display: flex;
    height: 280px;
    border: 1px solid #ee5952;
    margin: 1rem 0;
  }

  .allyNameTag {
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #3d95e5;
    font-weight: bold;
  }
  .oppNameTag {
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #ee5952;
    font-weight: bold;
  }
  .teamWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 600px;
  }
  .allyWrapper {
  }
  .oppWrapper {
  }

  .player {
    display: grid;
    grid-template-rows: 4fr 0.8fr;
  }

  .playerImg {
    position: absolute;
    width: 105%;
    right: -5px;
    z-index: 1;
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  .playerNameTag {
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    font-weight: bold;
    width: 100%;
    background-color: transparent;
    color: whitesmoke;
    z-index: 3;
  }
  .allyHover:hover {
    background-color: #3d95e5;
    cursor: pointer;

    .playerNameTag {
      background-color: #3d95e5;
      border: 1px solid #3d95e5;
    }
    .playerImg {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  .oppHover:hover {
    background-color: #ee5952;
    cursor: pointer;

    .playerNameTag {
      background-color: #ee5952;
      border: 1px solid #ee5952;
    }
    .playerImg {
      transform: scale(1.15);
      transition: transform 0.5s;
    }
  }

  .stylePlayer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .infoArea {
    display: grid;
    grid-template-rows: 5fr 1fr;
    width: 622px;
    height: 340px;
  }
  .infoArea-top {
  }
  .infoArea-bottom {
    display: flex;
    justify-content: center;
    place-items: center;
    align-items: center;
    width: 100%;
  }
  .commentArea {
    display: flex;
    position: relative;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    height: 30px;
    border-radius: 5px;
  }
  .commentInput {
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
  .commentBtn {
    height: 23px;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 5px;
    margin-top: 4px;
    padding: 2px 2px;
    border: none;
    text-align: center;
    background-color: #f7bd00;
    color: #404040;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 5px;
    transition: background-color 0.4s;
  }

  .commentBtn:hover {
    background-color: #e4e400;
    transition: background-color 0.4s;
    cursor: pointer;
  }

  @media (max-width: 670px) {
    width: 100%;
    height: 1000px;

    .title {
      font-size: 4rem;
    }

    .entireWrap {
      width: 80%;
      min-width: 0px;
      height: 900px;

      background-color: transparent;
    }
    .currGame {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      width: 450px;
      height: 81px;
      padding-bottom: 1px;
    }

    .currGameText {
      padding: 2px;
    }

    .Exsit {
      font-size: 0.8rem;

      .currId {
        font-size: 1.2rem;
      }
    }
    .noExsit {
      font-size: 1.2rem;
    }

    .noExsitSub {
      font-size: 0.7rem;
    }
    .searchArea {
      width: 180px;
    }

    .infoArea-right {
      display: grid;
      grid-template-rows: 1fr 1.5fr;
      place-items: center;
      align-items: center;
      width: 450px;
      height: 98.5%;
      border: 1px solid gray;
    }
    .currMatching {
      height: 500px;
    }

    .allyTeam {
      width: 460px;
      height: 200px;
    }
    .oppTeam {
      width: 460px;
      height: 200px;
    }

    .teamWrapper {
      width: 500px;
    }

    .playerNameTag {
      font-size: 8px;
      font-weight: normal;
    }

    .infoArea {
      display: grid;
      grid-template-rows: 5fr 1fr;
      width: 450px;
      height: 280px;
    }

    .infoArea-bottom {
      display: flex;
      justify-content: center;
      place-items: center;
      align-items: center;
      width: 100%;
    }
    .commentArea {
      width: 400px;
    }
  }
`;
