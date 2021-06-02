import React, { useState, useEffec, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoHistoryStyled.jsx";
import Tier from "./Tier/Tier.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoHistory = ({ summonerName }) => {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    // ${sumNameResult}
    console.log(summonerName);
    axios.get(`${server}/utils/history?name=${summonerName}`).then((res) => {
      setHistoryData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <section className="historyWrapper">
        <Tier historyData={historyData}></Tier>
      </section>
    </Container>
  );
};

export default UserInfoHistory;
