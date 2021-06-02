import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./HistoryStyled.jsx";

const History = ({ historyData }) => {
  console.log(historyData);
  const [apiVer, setApiVer] = useState("");
  const [matches, setMatches] = useState([]);

  const handleData = () => {
    if (historyData && historyData.matches) {
      setMatches(historyData.matches);
      console.log(historyData.matches);
    }
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
    handleApiVer();
    handleData();
  });
  return (
    <Container>
      {matches.length !== 0 ? (
        matches.map((ele) => {
          return (
            <section className="historyWrapper">
              <div className="imgWrapper">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/${apiVer}/img/champion/${ele.championName}.png`}
                  alt="no img"
                  className="img"
                />

                {/* <img src="" alt="" className="spell1" />
                <img src="" alt="" className="spell2" />
                <img src="" alt="" className="rune1" />
                <img src="" alt="" className="rune2" /> */}
              </div>
              <div className="history">
                <div className="mainData">
                  <div className="match">{ele.gameMode}</div>
                  <div className="result">
                    {ele.win === false ? "패배" : "승리"}
                  </div>
                </div>
              </div>
              <div className="subData">
                <div className="champName">{ele.championName}</div>
                <div className="lane">{ele.lane}</div>
                <div className="kda">{ele.kda}</div>
              </div>
            </section>
          );
        })
      ) : (
        <div>"no match data"</div>
      )}
    </Container>
  );
};

export default History;
