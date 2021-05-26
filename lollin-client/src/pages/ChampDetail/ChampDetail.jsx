import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChampDetailArea,
  BackImg,
  RenderArea,
  Wrap,
  SkillsArea,
  ChampDetailImg,
  ChampSkillWeb,
  ChampName,
  CahmpDetailName,
  ChampDescText,
  ChampDescQWER,
} from "./ChampDetailStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const ChampDetail = ({ champPriId }) => {
  const imG =
    "http://ddragon.leagueoflegends.com/cdn/11.10.1/img/passive/Anivia_P.png";

  const [champData, setChampData] = useState({
    champion: {
      id: "Aatrox",
      img: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      skills: ["알", "에그", "부활", "죽은줄알았지", "까꿍"],
      skillsimg: [imG, imG, imG, imG, imG],
      skillwebm: [
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm",
      ],
    },
  });

  console.log(champPriId);

  // useEffect(() => {
  //   axios.get(`${server}/champions/all/detail?id=${champPriId}`).then((res) => {
  //     setChampData(res);
  //     console.log(res);
  //   });
  // }, []);

  return (
    <ChampDetailArea className="champDetail">
      <Wrap>
        <BackImg
          className="champDbBackImg"
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champPriId}_0.jpg`}
        />

        <RenderArea className="renderWrapper">
          <ChampName className="champDetailNameArea">
            <ChampDetailImg
              className="champDetailImg"
              src={champData.champion.img}
            />
            <CahmpDetailName className="cahmpDetailName">
              {champPriId}
            </CahmpDetailName>
          </ChampName>

          <SkillsArea className="champDetailSkills">
            <section>
              <div className="detailSkill">
                {champData.champion.skillsimg.map((ele, index) => (
                  <div className="detailSkills" key={index}>
                    <img
                      className="detailSkillsImg"
                      src={ele}
                      alt={champData.champion.skills[index]}
                      key={champData.champion.skills[index]}
                    ></img>
                  </div>
                ))}
              </div>
              <div calssName="detailDesc">
                <ChampDescQWER calssName="detailDescQWER">
                  {champData.champion.skills[0]} 스킬단축키
                </ChampDescQWER>
                <ChampDescText calssName="detailDescEffect">
                  {champData.champion.skills[0]} 설명
                </ChampDescText>
              </div>
            </section>

            <ChampSkillWeb
              className="champDetailWebm"
              src={champData.champion.skillwebm}
              muted
              autoPlay
              loop
            ></ChampSkillWeb>
          </SkillsArea>
        </RenderArea>
      </Wrap>
    </ChampDetailArea>
  );
};

export default ChampDetail;
