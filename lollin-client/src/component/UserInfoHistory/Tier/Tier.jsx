import React, { useState, useEffect } from "react";
import { Container } from "./TierStyled.jsx";
import challangerIcon from "../../../Images/tierIcons/challangerIcon.png";
import unrankedIcon from "../../../Images/tierIcons/unrankedIcon.png";

const Tier = ({ historyData }) => {
  const [soloData, setSoloData] = useState(undefined);
  const [flexData, setFlexData] = useState(undefined);
  console.log(historyData);
  //   console.log(soloData);

  const handleData = () => {
    if (historyData && historyData.league_solo) {
      setSoloData(historyData.league_solo);
      console.log(soloData);
    }
    if (historyData && historyData.league_flex) {
      setFlexData(historyData.league_flex);
      console.log(flexData);
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
              <img
                src={challangerIcon}
                alt={challangerIcon}
                className="tierIcon"
                width="120px"
              />{" "}
            </div>
            <div className="dataWrap">
              <div className="rankTag">솔로랭크</div>
              <div className="tierTag">
                {soloData.tier}
                {soloData.rank}
              </div>
              <div className="lpTag ">{soloData.leaguesPoints}</div>
              <div className="winloseTag">
                {soloData.wins}승/{soloData.losses}패
              </div>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div className="flexContent">
              <div className="iconWrap">
                <img
                  src={unrankedIcon}
                  alt={unrankedIcon}
                  className="tierIcon"
                  width="120px"
                />{" "}
              </div>
              <div className="dataWrap">
                <div className="rankTag">자유랭크</div>
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
                src={challangerIcon}
                alt={challangerIcon}
                className="tierIcon"
                width="120px"
              />{" "}
            </div>
            <div className="dataWrap">
              <div className="rankTag">솔로랭크</div>
              <div className="tierTag">
                {flexData.tier}
                {flexData.rank}
              </div>
              <div className="lpTag ">{flexData.leaguesPoints}</div>
              <div className="winloseTag">
                {soloData.wins}/{flexData.losses}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div className="flexContent">
              <div className="iconWrap">
                <img
                  src={unrankedIcon}
                  alt={unrankedIcon}
                  className="tierIcon"
                  width="120px"
                />{" "}
              </div>
              <div className="dataWrap">
                <div className="rankTag">자유랭크</div>
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
