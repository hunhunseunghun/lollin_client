import React, { useState, useEffect } from "react";
import axios from "axios";
import sadBee from "../../../Images/sadBee.png";
import angryBee from "../../../Images/angryBee.png";
import { Container } from "./HistoryStyled.jsx";

const History = ({ historyData, isLoading }) => {
  const [apiVer, setApiVer] = useState("");
  const [matches, setMatches] = useState([]);

  const handleData = () => {
    if (historyData && historyData.matches) {
      setMatches(historyData.matches);
      if (historyData.matches.length === 0) {
        setMatches([]);
      }
      console.log(historyData);
    } else if (!historyData) {
      setMatches([]);
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
    } else if (pastTime >= 3600000) {
      return `${Math.floor(pastTime / 3600000)}시간전`;
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

    console.log("히스토리업데이트 될때마다 구독, useEffect");
  }, [historyData]);

  switch (isLoading) {
    case null: {
      return (
        <Container>
          <div className="noResult">
            <img src={sadBee} alt="no Img" className="noResultImg" />
            <div>검색한 소환사의 기록이 없습니다.</div>
          </div>
        </Container>
      );

      break;
    }

    case false: {
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
                      className={
                        ele.win === false ? "loseResult result" : "result"
                      }
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
              <div>검색한 소환사의 기록이 없습니다</div>
            </div>
          )}
        </Container>
      );
      break;
    }

    case true: {
      return (
        <Container>
          <div className="noResult">
            <img src={angryBee} alt="no Img" className="noResultImg" />
            <div>Loading...</div>
          </div>
        </Container>
      );
      break;
    }
  }
};

export default History;

// switch (isLoading) {
//   case null: {
//     return (
//       <Container>
//         <div className="topWrap">
//           <div className="name">{summonerResult}</div>

//           <section className="searchArea">
//             <input
//               type="text"
//               className="searchInput"
//               placeholder="소환사 검색.."
//               onChange={handleInputVal}
//               onKeyPress={handleInputVal}
//             />
//             <button className="searchBtn" onClick={handleSearchName}>
//               Lollin{" "}
//             </button>
//           </section>
//         </div>

//         <section className="tierWrapper">
//           <Tier historyData={historyData}></Tier>
//         </section>

//         <section>

//           <div> 존재하지 않은 유저입니다.</div>
//         </section>
//       </Container>
//     );
//     break;
//   }

//   case false: {
//     return (
//       <Container>
//         <div className="topWrap">
//           <div className="name">{summonerResult}</div>

//           <section className="searchArea">
//             <input
//               type="text"
//               className="searchInput"
//               placeholder="소환사 검색.."
//               onChange={handleInputVal}
//               onKeyPress={handleInputVal}
//             />
//             <button className="searchBtn" onClick={handleSearchName}>
//               Lollin{" "}
//             </button>
//           </section>
//         </div>

//         <section className="tierWrapper">
//           <Tier historyData={historyData}></Tier>
//         </section>

//         <section>
//           <History historyData={historyData}></History>
//         </section>
//       </Container>
//     );

//     break;
//   }

//   case true: {
//     //로딩
//     return (
//       <Container>
//         <div className="topWrap">
//           <div className="name">{summonerResult}</div>

//           <section className="searchArea">
//             <input
//               type="text"
//               className="searchInput"
//               placeholder="소환사 검색.."
//               onChange={handleInputVal}
//               onKeyPress={handleInputVal}
//             />
//             <button className="searchBtn" onClick={handleSearchName}>
//               Lollin{" "}
//             </button>
//           </section>
//         </div>

//         <section className="tierWrapper">
//           <Tier historyData={historyData}></Tier>
//         </section>

//         <section>
//           <div> loading .. </div>
//         </section>
//       </Container>
//     );

//     break;
//   }
