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
  // let isInitialMount = useRef(true);

  const handleInputVal = (e) => {
    searchVal = e.target.value;
    if (e.key === "Enter") {
      handleSearchName();
      console.log("enter");
    }
  };

  const handleSearchName = () => {
    setSummonerResult(searchVal);
    // .replace(/ /g, "")
    axios
      .get(`${server}/utils/history?name=${searchVal}`)
      .then((res) => {
        setHistoryData(res.data);
        console.log(historyData);
      })
      .catch((err) => {
        setHistoryData(null);
      });
  };

  useEffect(() => {
    axios.get(`${server}/utils/history?name=${summonerName}`).then((res) => {
      setHistoryData(res.data);
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

  switch (isLoading) {
    case null: {
      return (
        <Container>
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
            <div> 존재하지 않은 유저입니다.</div>
          </section>
        </Container>
      );
      break;
    }

    case false: {
      return (
        <Container>
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
            <History historyData={historyData}></History>
          </section>
        </Container>
      );

      break;
    }

    case true: {
      //로딩
      return (
        <Container>
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
            <div> loading .. </div>
          </section>
        </Container>
      );

      break;
    }
  }
};

export default UserInfoHistory;
