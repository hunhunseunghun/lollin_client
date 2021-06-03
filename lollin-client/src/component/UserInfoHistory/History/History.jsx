import React, { useState, useEffect } from "react";
import axios from "axios";
import sadBee from "../../../Images/sadBee.png";
import { Container } from "./HistoryStyled.jsx";

const History = ({ historyData }) => {
  const [apiVer, setApiVer] = useState("");
  const [matches, setMatches] = useState([]);

  const handleData = () => {
    if (historyData && historyData.matches) {
      setMatches(historyData.matches);
    }
  };

  const handleApiVer = () => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        setApiVer(res.data[0]);
      });
  };
  const handlePastTime = (creationTime) => {
    let finished = new Date(creationTime);
    let now = new Date();
    let pastTime = now - finished;

    if (pastTime >= 86400000) {
      return `${Math.floor(pastTime / 86400000)}일전`;
    } else if (pastTime >= 60000) {
      return `${Math.floor(pastTime / 60000)}분전`;
    } else {
      return `${((pastTime % 60000) / 1000).toFixed(0)}초전`;
    }
  };
  const handlePlayTime = (durationTime) => {
    let date = new Date(durationTime);
    return `${date.getMinutes()}분${date.getSeconds()}초`;
  };

  useEffect(() => {
    handleApiVer();
    handleData();
  });
  return (
    <Container>
      {matches.length !== 0 ? (
        matches.map((ele) => {
          return (
            <section
              className={
                ele.win === false
                  ? "isLose historyWrapper"
                  : "isWin historyWrapper"
              }
            >
              <div className="imgWrapper">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/${apiVer}/img/champion/${ele.championName}.png`}
                  alt="no img"
                  className="img"
                />
                <div className="champName">{ele.championName}</div>
                {/* <img src="" alt="" className="spell1" />
                <img src="" alt="" className="spell2" />
                <img src="" alt="" className="rune1" />
                <img src="" alt="" className="rune2" /> */}
              </div>
              <div className="mainData">
                <div className="pastTime">
                  {handlePastTime(ele.creationTime)}
                </div>
                <div
                  className={ele.win === false ? "loseResult result" : "result"}
                >
                  {ele.win === false ? "패배" : "승리"}
                </div>
                <div className="playTime">
                  {handlePlayTime(ele.durationTime)}
                </div>
              </div>
              <div className="subData">
                <div className="lane">{ele.lane}</div>

                <div className="kda">
                  {ele.kda === null ? "KDA Perfect" : "KDA " + ele.kda}
                </div>

                <div className="match"> {ele.gameMode}</div>
              </div>
              <div className="badgeWrap">
                {ele.tripleKills !== 0 ? (
                  <div className="tripleKills badge">트리플킬</div>
                ) : (
                  <div></div>
                )}
                {ele.quadraKills !== 0 ? (
                  <div className="quadraKills badge">쿼드라킬</div>
                ) : (
                  <div></div>
                )}
                {ele.pentaKills !== 0 ? (
                  <div className="pentaKills badge">펜타킬</div>
                ) : (
                  <div></div>
                )}
              </div>
            </section>
          );
        })
      ) : (
        <div className="noResult">
          <img src={sadBee} alt="no Img" className="noResultImg" />
          <div>검색한 소환사의 기록이 없습니다</div>
        </div>
      )}
    </Container>
  );
};

export default History;
