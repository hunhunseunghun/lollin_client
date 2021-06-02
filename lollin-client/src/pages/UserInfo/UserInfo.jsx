import React from "react";
import UserInfoMatching from "../../component/UserInfoMatching/UserInfoMatching.jsx";
import UserInfoHistory from "../../component/UserInfoHistory/UserInfoHistory.jsx";
import UserInfoMatchingDetail from "../../component/UserInfoMatchingDetail/UserInfoMatchingDetail.jsx";
import { Container } from "./UserInfoStyled.jsx";

const UserInfo = ({ summonerName }) => {
  return (
    <Container>
      <UserInfoMatching summonerName={summonerName} />
      <UserInfoMatchingDetail />
      <UserInfoHistory summonerName={summonerName} />
    </Container>
  );
};

export default UserInfo;
