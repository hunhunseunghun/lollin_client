import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./ChampDB.css";

import ChampDbSearch from "../../component/ChampDbSearch/ChampDbSearch.jsx";
import ChampDbList from "../../component/ChampDbList/ChampDbList.jsx";

const ChampDB = () => {
  const [champData, setChampData] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        return axios.get(
          `https://ddragon.leagueoflegends.com/cdn/${res.data[0]}/data/ko_KR/champion.json`
        );
      })
      .catch((err) => {
        throw err;
      })
      .then((res) => {
        setChampData(Object.entries(res.data.data));
      });
  }, []);

  const hanleSearchText = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter") {
      setSearchText(e.target.value);
    }
  };

  return (
    <div className="champDB">
      <ChampDbSearch hanleSearchText={hanleSearchText} />
      <ChampDbList champData={champData} searchText={searchText} />
    </div>
  );
};

export default ChampDB;
