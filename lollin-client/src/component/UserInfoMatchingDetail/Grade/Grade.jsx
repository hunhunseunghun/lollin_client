import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "./GradeStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoGrade = ({ participant }) => {
  const [userGrade, setUserGrade] = useState("");

  useEffect(() => {
    axios
      .get(`${server}/utils/${participant.summonerName}`)
      .then((res) => {
        setUserGrade(res);
      })
      .catch((err) => {});
  }, [participant]);

  return (
    <Container>
      <section
        className="
      gradeWrap"
      >
        <div className="gradeIconWrap">
          <img
            // src={require(`../../../Images/gradeIcons/${userGrade}.png`).default}
            src={require(`../../../Images/gradeIcons/VERYBAD.png`).default}
            alt=""
            className="gardeIconImg"
          />
        </div>
        {/* <div className={`${userGarde} gradeText`}>{`${userGrade}`}</div> */}
        <div className="gradeText VERYBAD">VERY BAD</div>
        {/* <div className="point">
            {`${} 점`}
        </div> */}

        <div className="gardePoint">
          20 <span>PT</span>
        </div>
      </section>
    </Container>
  );
};

export default UserInfoGrade;
