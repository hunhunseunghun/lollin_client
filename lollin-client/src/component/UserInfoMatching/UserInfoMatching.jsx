import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoMatchingStyled.jsx";
import UserInfoMatchingDetail from "../UserInfoMatchingDetail/UserInfoMatchingDetail.jsx";
import dotenv from "dotenv";

dotenv.config();
// , handleUserClick
const UserInfoMatching = ({ summonerName }) => {
  let [matchData, setMatchData] = useState({});
  let [inputName, setInputName] = useState(summonerName);
  let [isSearched, setIsSearched] = useState(false);
  const [blueTeam, setBlueTeam] = useState();
  const [redTeam, setRedTeam] = useState();
  let [participant, setParticipant] = useState(null);

  const handleUserClick = (participant) => {
    setParticipant(participant);
  };

  let setDatas = (matchData) => {
    let blueTeam = [];
    let redTeam = [];
    setMatchData(matchData);
    matchData.participants.forEach((participant) => {
      if (participant.teamId === 100) {
        blueTeam.push(participant);
      } else {
        redTeam.push(participant);
      }
    });
    setBlueTeam(blueTeam);
    setRedTeam(redTeam);
  };

  let handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/utils/activeGame?name=${inputName}`
      )
      .then((response) => {
        setIsSearched(true);
        setDatas(response.data);
      })
      .catch((err) => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/utils/featured`)
          .then((response) => {
            setIsSearched(false);
            setDatas(response.data);
          });
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Container className="matchingInfo-container">
      <div className="currMatching">
        <section className="allyTeam">
          <div className="allyNameTag">BLUE TEAM</div>
          <div className="teamWrapper allyWrapper">
            {blueTeam
              ? blueTeam.map((el) => (
                  <section
                    className="player allyHover"
                    onClick={() => {
                      handleUserClick(el);
                    }}
                  >
                    <div className="stylePlayer allyPlayer">
                      <img
                        className="playerImg"
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
                        alt="no data"
                      />
                    </div>
                    <div className="playerNameTag">
                      <div>{el.summonerName}</div>
                    </div>
                  </section>
                ))
              : "nodata"}
          </div>
        </section>
        <section className="oppTeam">
          <div className="oppNameTag">RED TEAM</div>
          <div className="teamWrapper oppWrapper">
            {redTeam
              ? redTeam.map((el) => (
                  <section
                    className="player oppHover"
                    onClick={() => {
                      handleUserClick(el);
                    }}
                  >
                    <div className="stylePlayer oppPlayer">
                      <img
                        className="playerImg"
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
                        alt="no data"
                      />
                    </div>
                    <div className="playerNameTag">
                      <div>{el.summonerName}</div>
                    </div>
                  </section>
                ))
              : "nodata"}
          </div>
        </section>
      </div>
      <div className="infoArea">
        <div className="infoArea-left">
          <UserInfoMatchingDetail participant={participant} />
        </div>
        <div className="infoArea-right">
          <section className="searchArea">
            <input
              type="text"
              className="searchInput"
              placeholder="소환사 검색.."
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            ></input>
            <button className="searchBtn" onClick={handleSearch}>
              Lollin
            </button>
          </section>
          <section className="currGame">
            {isSearched ? (
              <div className="currGameText Exsit">
                <div>
                  <div className="currId">{inputName}</div>님의 매치중인 게임
                </div>
              </div>
            ) : (
              <div className="currGameText noExsit">
                <div>랜덤 매치중인 게임</div>
              </div>
            )}
          </section>
        </div>
      </div>
    </Container>
  );
};
//http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
export default UserInfoMatching;

{
  /* Matching
      {matchData.participants
        ? matchData.participants.map((el) => {
            return (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
                width="70px"
              ></img>
            );
          })
        : ""} */
}
