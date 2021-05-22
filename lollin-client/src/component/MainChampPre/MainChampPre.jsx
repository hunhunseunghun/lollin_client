import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChampPre, ChampPreLotaImg } from "./MainChampPreStyled.jsx";

// const lotaChampURL =
//   "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
// const api_Key = "RGAPI-7021385d-1138-44d1-83e6-ab24a6e54e5b";
// const requestHeader = {
//   "User-Agent":
//     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
//   "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//   "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//   Origin: "https://developer.riotgames.com",
//   "X-Riot-Token": api_Key,
// };

const server = process.env.REACT_APP_SERVER_URL;

const MainChampPre = ({ history }) => {
  const [rotaChampId, setRotaChampId] = useState({
    champion: {
      id: null,
      img: null,
    },
  });

  useEffect(() => {
    axios
      .get(`${server}/champions/main`)
      .then((res) => {
        setRotaChampId(res);
        console.log(res.id);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <ChampPre className="champPre">
      <ChampPreLotaImg
        className="champPreLotaImg"
        onClick={() => {
          history.push("/champions/all");
        }}
        // src={rotaChampId.champion.img}
      >
        {" "}
      </ChampPreLotaImg>
      <div className="champPreText">메뉴 유도 문구</div>
    </ChampPre>
  );
};

export default MainChampPre;
