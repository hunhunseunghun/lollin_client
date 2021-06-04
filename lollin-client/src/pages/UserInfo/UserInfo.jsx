import React, { useState } from "react";
import UserInfoMatching from "../../component/UserInfoMatching/UserInfoMatching.jsx";
import UserInfoHistory from "../../component/UserInfoHistory/UserInfoHistory.jsx";
import { Container } from "./UserInfoStyled.jsx";

const UserInfo = ({ summonerName }) => {
  let [defaultPlayer, setDefaultPlayer] = useState(null);

  return (
    <Container>
      <div className="wrap">
        <div className="title"> User Info</div>
        <div className="userContent">
          <UserInfoMatching
            summonerName={summonerName}
            setDefaultPlayer={setDefaultPlayer}
          />

          <UserInfoHistory
            summonerName={summonerName}
            defaultPlayer={defaultPlayer}
          />
        </div>
      </div>
    </Container>
  );
};

export default UserInfo;
