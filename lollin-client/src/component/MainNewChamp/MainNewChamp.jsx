import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewChamp, SkillsDesc, SkillsImg } from "./MainNewChampStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const MainNewChamp = () => {
  const [newChampData, setNewChampData] = useState({
    id: "Aatrox",
    img: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    skillsimg: [
      "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxQ.png",
      "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxW.png",
      "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxE.png",
      "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxR.png",
      "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/passive/Aatrox_Passive.png",
    ],
    skillwebm: [
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm",
    ],
  });

  // useEffect(() => {
  //   axios.get(`${server}/champions/updatedchampion`).then((res) => {
  //     setNewChampData(res);
  //   });
  // }, []);

  return (
    <NewChamp className="newChamp">
      <section className="searchBoxContainer">
        <section className="newChampWrapLeft">
          <div className="videoWrapper">
            <video muted autoPlay loop>
              <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_Q1.webm"></source>
            </video>
          </div>
          <div className="optionList">
            {newChampData.skillsimg.map((ele, idx) => (
              <span className="optionIcon" key={idx + "skillIcon"}>
                <span
                  className="optionIconBorder"
                  key={idx + "skillIconBorder"}
                >
                  <img className="optionButtonImg" src={ele} alt={ele} />
                </span>
              </span>
            ))}
          </div>
        </section>
        <section className="newChampWrapRight">
          <div className="desc">
            <div className="descTitle">신규 챔피언</div>
            <div className="descMain">
              최근 업데이트 된 신규 챔피언을 미리 체험하고 플레이에 반영해
              보세요
            </div>
          </div>
          <div className="newChampImgWrap">
            <img className="newChamImg" src={newChampData.img} />
            <div className="newChamName">{newChampData.id}</div>
          </div>
        </section>
      </section>
      <div className="titleWrap">
        <div className="title">- New champion</div>
      </div>
    </NewChamp>
  );
};

export default MainNewChamp;
