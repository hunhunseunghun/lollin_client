import React, { useState, useEffect } from "react";
import { Container } from "./UserInfoMatchingDetailStyled.jsx";
const axios = require("axios");
const MatchingDetail = ({ participant }) => {
  let [userData, setUserData] = useState(null);
  let [tier, setTier] = useState("");
  let [winRate, setWinRate] = useState(0);
  let [rank, setRank] = useState("");
  let [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    if (participant) {
      setIsLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/utils/lightInfo?name=${participant.summonerName}`
        )
        .then((response) => {
          let datas = response.data;
          if (datas.length === 0) {
            setUserData(null);
            setIsLoading(false);
          } else {
            for (let data of datas) {
              if (data.queueType === "RANKED_SOLO_5x5") {
                let tempWinrate = 0;
                setTier(data.tier);
                setRank(data.rank);
                tempWinrate = data.wins / (data.wins + data.losses);
                tempWinrate = Math.floor(tempWinrate * 10000) / 100;
                setWinRate(tempWinrate);
                setUserData({ solo: data });
              } else if (data.queueType === "RANKED_FLEX_SR") {
                setUserData({ ...userData, data });
              }
            }
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [participant]);

  switch (isLoading) {
    case null: {
      return "";
    }
    case true: {
      return (
        <Container>
          <fieldset>
            <div className="wrap">
              {/* {participant !== null ? (
                <div>{participant.summonerName}</div>
              ) : (
                "     "
              )} */}
              {"Loading..."}
            </div>

            {/* <button
              onClick={() => {
                setIsLoading(null);
              }}
            >
              close
            </button> */}
          </fieldset>
        </Container>
      );
    }
    case false: {
      return (
        <Container>
          <fieldset>
            <div className="wrap">
              <section className="content">
                <section className="imgWarp">
                  <img
                    src={require(`../../Images/tierIcons/${tier}.png`).default}
                    width={"100"}
                    height={"100"}
                  />
                </section>

                <section className="info">
                  <div className="tier">
                    {tier}
                    {"   "}
                    {rank}
                  </div>

                  {participant !== null ? (
                    <div className="name">{participant.summonerName}</div>
                  ) : (
                    ""
                  )}
                  <div className="rate">
                    {winRate !== 0 ? winRate + "%" : ""}
                  </div>
                </section>
              </section>
            </div>

            {/* <button
              onClick={() => {
                setIsLoading(null);
              }}
            >
              close
            </button> */}
          </fieldset>
        </Container>
      );
    }
  }
};

export default MatchingDetail;
