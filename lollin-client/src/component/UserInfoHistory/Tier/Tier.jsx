import React, { useState, useEffect } from "react";
import { Container } from "./TierStyled.jsx";
import CHALLENGER from "../../../Images/tierIcons/CHALLENGER.png";
import GRANDMASTER from "../../../Images/tierIcons/GRANDMASTER.png";
import MASTER from "../../../Images/tierIcons/MASTER.png";
import DIAMOND from "../../../Images/tierIcons/DIAMOND.png";
import PLATINUM from "../../../Images/tierIcons/PLATINUM.png";
import GOLD from "../../../Images/tierIcons/GOLD.png";
import SILVER from "../../../Images/tierIcons/SILVER.png";
import BRONZE from "../../../Images/tierIcons/BRONZE.png";
import IRON from "../../../Images/tierIcons/IRON.png";
import UNRANKED from "../../../Images/tierIcons/UNRANKED.png";

const Tier = ({ historyData }) => {
  const [soloData, setSoloData] = useState(undefined);
  const [flexData, setFlexData] = useState(undefined);
  const [soloTierIcon, setSoloTierIcon] = useState();
  const [flexTierIcon, setFlexTierIcon] = useState();
  console.log(historyData);
  //   console.log(soloData);

  const handleData = () => {
    if (historyData && historyData.league_solo) {
      setSoloData(historyData.league_solo);

      if (historyData.league_solo.tier === "CHALLANGER") {
        setSoloTierIcon(CHALLENGER);
      } else if (historyData.league_solo.tier === "GRANDMASTER") {
        setSoloTierIcon(GRANDMASTER);
      } else if (historyData.league_solo.tier === "MASTER") {
        setSoloTierIcon(MASTER);
      } else if (historyData.league_solo.tier === "DIAMOND") {
        setSoloTierIcon(DIAMOND);
      } else if (historyData.league_solo.tier === "PLATINUM") {
        setSoloTierIcon(PLATINUM);
      } else if (historyData.league_solo.tier === "GOLD") {
        setSoloTierIcon(GOLD);
      } else if (historyData.league_solo.tier === "SILVER") {
        setSoloTierIcon(SILVER);
      } else if (historyData.league_solo.tier === "BRONZE") {
        setSoloTierIcon(BRONZE);
      } else if (historyData.league_solo.tier === "IRON") {
        setSoloTierIcon(IRON);
      }
    }
    if (historyData && historyData.league_flex) {
      setFlexData(historyData.league_flex);
      if (historyData.league_flex.tier === "CHALLANGER") {
        setFlexTierIcon(CHALLENGER);
      } else if (historyData.league_solo.tier === "GRANDMASTER") {
        setFlexTierIcon(GRANDMASTER);
      } else if (historyData.league_solo.tier === "MASTER") {
        setFlexTierIcon(MASTER);
      } else if (historyData.league_solo.tier === "DIAMOND") {
        setFlexTierIcon(DIAMOND);
      } else if (historyData.league_flex.tier === "PLATINUM") {
        setFlexTierIcon(PLATINUM);
      } else if (historyData.league_flex.tier === "GOLD") {
        setFlexTierIcon(GOLD);
      } else if (historyData.league_flex.tier === "SILVER") {
        setFlexTierIcon(SILVER);
      } else if (historyData.league_flex.tier === "BRONZE") {
        setFlexTierIcon(BRONZE);
      } else if (historyData.league_flex.tier === "IRON") {
        setFlexTierIcon(IRON);
      }
    }
  };
  useEffect(() => {
    handleData();
    // handleData();
  });
  return (
    <Container className="tierContainer">
      <section className="soloWrapper">
        {soloData ? (
          <div className="soloContent">
            <div className="iconWrap">
              <img src={soloTierIcon} alt={soloTierIcon} className="tierIcon" />{" "}
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
                src={flexTierIcon}
                alt={flexTierIcon}
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
