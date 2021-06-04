import React, { useState } from "react";
import UserInfoMatching from "../../component/UserInfoMatching/UserInfoMatching.jsx";
import UserInfoHistory from "../../component/UserInfoHistory/UserInfoHistory.jsx";
import { Container } from "./UserInfoStyled.jsx";

const UserInfo = ({ summonerName }) => {
  let [defaultPlayer, setDefaultPlayer] = useState(null);

  return (
    <Container>
      <UserInfoMatching
        summonerName={summonerName}
        setDefaultPlayer={setDefaultPlayer}
      />

      <UserInfoHistory
        summonerName={summonerName}
        defaultPlayer={defaultPlayer}
      />
    </Container>
  );
};

export default UserInfo;
