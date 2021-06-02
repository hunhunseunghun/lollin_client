import React, { useState, useEffec, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoHistoryStyled.jsx";
import Tier from "./Tier/Tier.jsx";
import History from "./History/History.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoHistory = ({ summonerName }) => {
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    axios.get(`${server}/utils/history?name=${summonerName}`).then((res) => {
      // setTimeout(setHistoryData(res.data), 300);
      setHistoryData(res.data);
    });
  }, []);

  return (
    <Container>
      <section className="tierWrapper">
        <Tier historyData={historyData}></Tier>
      </section>
      <scetion>
        <History historyData={historyData}></History>
      </scetion>
    </Container>
  );
};

export default UserInfoHistory;
