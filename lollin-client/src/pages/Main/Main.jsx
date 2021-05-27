import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { MainContainer } from "./MainStyled.jsx";

import MainTopView from "../../component/MainTopView/MainTopView.jsx";
import MainChampPre from "../../component/MainChampPre/MainChampPre.jsx";
import MainNewChamp from "../../component/MainNewChamp/MainNewChamp.jsx";
import MainUpdatedItems from "../../component/MainUpdatedItems/MainUpdatedItems.jsx";
import MainSearch from "../../component/MainSearch/MainSearch.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const MainPage = () => {
  const [champName, setChampName] = useState("");
  const [champResult, setChampResult] = useState();
  const history = useHistory();

  const handleSearch = (champName) => {
    setChampName(champName);
  };

  const handleSearchChange = (event) => {
    setChampName(event.target.value);
  };

  console.log(champName);

  const handleSearchClick = () => {
    axios.get(`${server}/search?name=${champName}`).then((res) => {
      setChampResult(res.data);
      console.log(res);
    });
    // history.push("/matchinginfo");
    // history.push("./matchinginfo")
    //matching info page 로 이동
  };

  // useEffect(() => {
  //   axios.get(`${server}/utils/rotation`).then((res) => {
  //     console.log(res);
  //   });
  // });

  return (
    <MainContainer className="mainContainer">
      <MainTopView />
      <MainSearch
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      ></MainSearch>

      <MainChampPre history={history} />
      <MainNewChamp />
      <MainUpdatedItems history={history} />
    </MainContainer>
  );
};

export default MainPage;
