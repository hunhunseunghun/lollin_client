import React from "react";
import UserInfoMatching from "../../component/UserInfoMatching/UserInfoMatching.jsx";
import UserInfoHistory from "../../component/UserInfoHistory/UserInfoHistory.jsx";
import { Container } from "./UserInfoStyled.jsx";

const UserInfo = ({ summonerName }) => {
  return (
    <Container>
      <UserInfoHistory summonerName={summonerName} />
      <UserInfoMatching summonerName={summonerName} />
    </Container>
  );
};

export default UserInfo;
