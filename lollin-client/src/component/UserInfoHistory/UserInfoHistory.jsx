import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoHistoryStyled.jsx";
import Tier from "./Tier/Tier.jsx";
import History from "./History/History.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoHistory = ({ summonerName, defaultPlayer }) => {
  const [historyData, setHistoryData] = useState(null);
  const [summonerResult, setSummonerResult] = useState(summonerName);
  const [isLoading, setIsLoading] = useState(null);
  let searchVal = null;

  const handleInputVal = (e) => {
    searchVal = e.target.value;
    if (e.key === "Enter") {
      handleSearchName();
      console.log("enter");
    }
  };

  const handleSearchName = () => {
    setSummonerResult(searchVal);
    setIsLoading(true);
    console.log("로딩중");

    axios
      .get(`${server}/utils/history?name=${searchVal}`)
      .then((res) => {
        if (res.data.message) {
          setHistoryData(null);
          setIsLoading(null);
        } else {
          setHistoryData(res.data);
          setIsLoading(false);
        }

        //1.status 200 ok {config: {url: "https://lollinserver.link/utils/history?name=lksdjflksjdfj", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
        // data: {message: "Request failed with status code 404", name: "Error", stack: "Error: Request failed with status code 404\n    at …ickCallback (internal/process/next_tick.js:63:19)", config: {…}}
        // headers: {content-length: "1283", content-type: "application/json; charset=utf-8"}
        // request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
        // status: 200
        // statusText: ""}

        // 2. config: {url: "https://lollinserver.link/utils/history?name=null", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
        // data:
        // league_flex:
        // freshBlood: false
        // hotStreak: false
        // inactive: false
        // leagueId: "d31de583-7adc-43a0-80d2-0b048a901b9b"
        // leaguePoints: 12
        // losses: 51
        // queueType: "RANKED_SOLO_5x5"
        // rank: "IV"
        // summonerId: "_2F9d0aaF24CY_rSidDzGHxKIMsvS_50LDrCx1p2unALIg"
        // summonerName: "null"
        // tier: "GOLD"
        // veteran: false
        // wins: 41
        // __proto__: Object
        // league_solo: {leagueId: "99ef8f28-d230-49fe-83a0-1ee3d0f2af63", queueType: "RANKED_FLEX_SR", tier: "SILVER", rank: "I", summonerId: "_2F9d0aaF24CY_rSidDzGHxKIMsvS_50LDrCx1p2unALIg", …}
        // loses: 6
        // matchList: (20) ["KR_5239687005", "KR_5239710052", "KR_5239663489", "KR_5239640114", "KR_5239505842", "KR_5237834479", "KR_5237771037", "KR_5237596382", "KR_5237459095", "KR_5237383824", "KR_5237304666", "KR_5237370501", "KR_5235248617", "KR_5234147737", "KR_5234191148", "KR_5234033461", "KR_5233786500", "KR_5232099857", "KR_5232048722", "KR_5232011131"]
        // matches: (19) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // winRate: 0.6842105263157895
        // wins: 13

        console.log("통신완료", res);
      })
      .catch((err) => {
        setHistoryData(null);
        setIsLoading(null);
        console.log("에러뿜뿜");
      });
  };

  // useEffect(() => {
  //   if (participant !== null) {
  //     axios
  //       .get(`${server}/utils/history?name=${participant.summonerName}`)
  //       .then((res) => {
  //         setHistoryData(res.data);
  //         setIsLoading(false);
  //         setSummonerResult(participant.summonerName);
  //       });
  //   }
  // }, [participant]);

  useEffect(() => {
    axios
      .get(`${server}/utils/history?name=${summonerName}`)
      .then((res) => {
        setHistoryData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setHistoryData(null);
        setIsLoading(null);
      });
  }, [summonerName]);

  useEffect(() => {
    if (defaultPlayer !== null) {
      setSummonerResult(defaultPlayer.summonerName);
      setIsLoading(true);
      axios
        .get(`${server}/utils/history?name=${defaultPlayer.summonerName}`)
        .then((res) => {
          setHistoryData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(null);
        });
    }
    console.log("defaultPlayer : ", defaultPlayer);
  }, [defaultPlayer]);

  return (
    <Container>
      <section className="entireWrap">
        <div className="topWrap">
          <div className="name">{summonerResult}</div>

          <section className="searchArea">
            <input
              type="text"
              className="searchInput"
              placeholder="소환사 검색.."
              onChange={handleInputVal}
              onKeyPress={handleInputVal}
            />
            <button className="searchBtn" onClick={handleSearchName}>
              Lollin{" "}
            </button>
          </section>
        </div>

        <section className="tierWrapper">
          <Tier historyData={historyData}></Tier>
        </section>

        <section>
          <History historyData={historyData} isLoading={isLoading}></History>
        </section>
      </section>
    </Container>
  );
};

export default UserInfoHistory;
