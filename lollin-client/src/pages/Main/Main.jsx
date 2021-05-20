import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { MainContainer } from "./MainStyled.jsx";

import MainSearchBox from "../../component/MainSearchBox/MainSearchBox.jsx";
import MainChampPre from "../../component/MainChampPre/MainChampPre.jsx";
import MainNewChamp from "../../component/MainNewChamp/MainNewChamp.jsx";
import MainUpdatedItems from "../../component/MainUpdatedItems/MainUpdatedItems.jsx";

const server = "https://lollinserver.link/";
const MainPage = () => {
  const [champName, setChampName] = useState();
  const [champResult, setChampResult] = useState();
  const history = useHistory();

  const handleSearch = (champName) => {
    setChampName(champName);
  };

  const handleSearchChange = (event) => {
    setChampName(event.target.value);
    console.log(event.target.value);
  };

  const handleSearchClick = () => {
    axios.get(`${server}/search?name=${champName}`).then((res) => {
      setChampResult(res.data);
    });
    // history.push("/matchinginfo");
    // history.push("./matchinginfo")
    //matching info page 로 이동
  };

  return (
    <MainContainer className="mainContainer">
      <MainSearchBox
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />

      <MainChampPre history={history} />
      <MainNewChamp />
      <MainUpdatedItems history={history} />
    </MainContainer>
  );
};

export default MainPage;
