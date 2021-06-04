import React, { useState, useEffect } from "react";
import { Container } from "./TierStyled.jsx";
import UNRANKED from "../../../Images/tierIcons/UNRANKED.png";

const Tier = ({ historyData }) => {
  const [soloData, setSoloData] = useState(null);
  const [flexData, setFlexData] = useState(null);

  const handleData = () => {
    if (historyData && historyData.league_solo) {
      setSoloData(historyData.league_solo);
    }
    if (historyData && historyData.league_flex) {
      setFlexData(historyData.league_flex);
    }
    if (historyData && !historyData.league_solo) {
      setSoloData(null);
    }
    if (historyData && !historyData.league_flex) {
      setFlexData(null);
    }
    if (!historyData) {
      setFlexData(null);
    }
  };

  useEffect(() => {
    handleData();
  }, [historyData]);

  return (
    <Container className="tierContainer">
      <section className="soloWrapper">
        {historyData && soloData ? (
          <div className="soloContent">
            <div className="iconWrap">
              <img
                src={
                  require(`../../../Images/tierIcons/${soloData.tier}.png`)
                    .default
                }
                alt=""
                className="tierIcon"
              />{" "}
            </div>
            <div className="dataWrap">
              <div className="rankTag">솔로랭크</div>
              <div className="tierTag">
                {soloData.tier}
                {soloData.rank}
              </div>
              <div className="lpTag ">{soloData.leaguePoints}LP</div>
              <div className="winloseTag">
                {soloData.wins}승 / {soloData.losses}패
              </div>
              <div className="winningRate">
                {" " +
                  Math.trunc(
                    (soloData.wins / (soloData.wins + soloData.losses)) * 100
                  ) +
                  "%"}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div className="soloContent">
              <div className="iconWrap">
                <img src={UNRANKED} alt={UNRANKED} className="tierIcon" />{" "}
              </div>
              <div className="dataWrap">
                <div className="rankTag">솔로랭크</div>
                <div className="unrankedTag">Unranked</div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="flexWrapper">
        {flexData ? (
          <div className="flexContent">
            <div className="iconWrap">
              <img
                src={
                  require(`../../../Images/tierIcons/${flexData.tier}.png`)
                    .default
                }
                alt=""
                className="tierIcon"
                width="120px"
              />{" "}
            </div>
            <div className="dataWrap">
              <div className="rankTag">자유 5:5 랭크</div>
              <div className="tierTag">
                {flexData.tier}
                {flexData.rank}
              </div>
              <div className="lpTag ">{flexData.leaguePoints}LP</div>
              <div className="winloseTag">
                {soloData.wins}/{flexData.losses}
              </div>
              <div className="winningRate">
                {Math.trunc(
                  (flexData.wins / (flexData.wins + flexData.losses)) * 100
                ) + "%"}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div className="flexContent">
              <div className="iconWrap">
                <img
                  src={UNRANKED}
                  alt={UNRANKED}
                  className="tierIcon"
                  width="120px"
                />{" "}
              </div>
              <div className="dataWrap">
                <div className="rankTag">자유 5:5 랭크</div>
                <div className="unrankedTag">Unranked</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Tier;
