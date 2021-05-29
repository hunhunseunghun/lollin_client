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
const MainPage = ({ handleSearchChange, handleSearchClick }) => {
  const history = useHistory();

  return (
    <MainContainer className="mainContainer">
      <MainTopView />
      <MainSearch
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      ></MainSearch>

      <MainChampPre history={history} />
      <MainNewChamp />
      {/* <MainUpdatedItems history={history} /> */}
    </MainContainer>
  );
};

export default MainPage;
