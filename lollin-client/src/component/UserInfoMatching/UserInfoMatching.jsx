import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoMatchingStyled.jsx";
import dotenv from "dotenv";

dotenv.config();
const UserInfoMatching = ({ summonerName, handleUserClick }) => {
  let [matchData, setMatchData] = useState({});
  let [inputName, setInputName] = useState(summonerName);
  let [isSearched, setIsSearched] = useState(false);
  const [apiVer, setApiVer] = useState("");
  const [blueTeam, setBlueTeam] = useState();
  const [redTeam, setRedTeam] = useState();

  console.log(inputName);
  let setDatas = (matchData) => {
    let blueTeam = [];
    let redTeam = [];
    setMatchData(matchData);
    matchData.participants.forEach((participant) => {
      if (participant.teamId === 100) {
        blueTeam.push(participant);
        // console.log(participant);
      } else {
        redTeam.push(participant);
      }
    });
    setBlueTeam(blueTeam);
    setRedTeam(redTeam);

    // console.log("blueTeam : " + blueTeam);
    // console.log("redTeam : " + redTeam);
  };

  let handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/utils/activeGame?name=${inputName}`
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setIsSearched(true);
        setDatas(response.data);
      })
      .catch((err) => {
        console.log("atcive Game err catch : doesn't exit ");
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/utils/featured`)
          .then((response) => {
            // console.log(response.data);
            setIsSearched(false);
            setDatas(response.data);
          });
      });
  };

  let handleApiVer = () => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        setApiVer(res.data[0]);
        // console.log(apiVer);
      });
  };

  useEffect(() => {
    handleSearch();
    handleApiVer();
  }, []);

  return (
    <Container className="matchingInfo-container">
      {isSearched ? (
        <div className="currGameText">
          <div>The result of {inputName}</div>
        </div>
      ) : (
        <div className="currGameText">
          <div>Showing featured game</div>
        </div>
      )}
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
                        src={`http://ddragon.leagueoflegends.com/cdn/${apiVer}/img/champion/${el.championName}.png`}
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
                        src={`http://ddragon.leagueoflegends.com/cdn/${apiVer}/img/champion/${el.championName}.png`}
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
      <div className="searchArea">
        <input
          type="text"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        ></input>
        <button onClick={handleSearch}>search</button>
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