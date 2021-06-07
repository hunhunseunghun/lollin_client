import React, { useState } from "react";
import UserInfoMatching from "../../component/UserInfoMatching/UserInfoMatching.jsx";
import UserInfoHistory from "../../component/UserInfoHistory/UserInfoHistory.jsx";
import { Container, BackImg, Wrapper, UserTitle, UserContent } from "./UserInfoStyled.jsx";
import UserInfoBgi from "../../Images/userinfobgi.jpeg";

const UserInfo = ({ summonerName }) => {
  let [defaultPlayer, setDefaultPlayer] = useState(null);

  return (
    <Container>
      <BackImg className="userinfobgi" src={`${UserInfoBgi}`} />
      <Wrapper>
        <UserTitle>User Info</UserTitle>
        <UserContent>
          <UserInfoMatching
            summonerName={summonerName}
            setDefaultPlayer={setDefaultPlayer}
          />

          <UserInfoHistory
            summonerName={summonerName}
            defaultPlayer={defaultPlayer}
          />
        </UserContent>
      </Wrapper>
    </Container>
  );
};

export default UserInfo;
