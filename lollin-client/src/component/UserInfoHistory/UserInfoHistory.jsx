import React, { useState, useEffec, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoHistoryStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoHistory = () => {
  const [hitsoryData, setHistoryData] = useState();

  useEffect(() => {
    axios.get(`${server}/utils/history?name=${summonerName}`).then((res) => {
      setHistoryData(res);
    });
  });

  return (
    <Container>
      <section className="historyWrapper"></section>
    </Container>
  );
};

export default UserInfoHistory;
