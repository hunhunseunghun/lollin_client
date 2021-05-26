import React, { useState, useEffect } from "react";
import axios from "axios";
import { initData } from "./ChampInitData.jsx";
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
  ChampDescName,
} from "./ChampDetailStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const ChampDetail = ({ champPriId }) => {
  const [champData, setChampData] = useState(initData);
  const [skillIndex, setSkillIndex] = useState(0);
  const [qwerpDesc, setQwerDesc] = useState("Q");
  const handleSkillIndex = (index) => {
    setSkillIndex(index);
  };

  useEffect(() => {
    axios
      .get(`${server}/champions/detail?id=${encodeURI(champPriId)}`)
      .then((res) => {
        setChampData(res.data.data);
      });
  }, []);

  return (
    <ChampDetailArea className="champDetail">
      <Wrap>
        <BackImg
          className="champDbBackImg"
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champPriId}_0.jpg`}
        />

        <RenderArea className="renderWrapper">
          <ChampName className="champDetailNameArea">
            <ChampDetailImg className="champDetailImg" src={champData.img} />
            <CahmpDetailName className="cahmpDetailName">
              {champPriId}
            </CahmpDetailName>
          </ChampName>

          <SkillsArea className="champDetailSkills">
            <section>
              <div className="detailSkill">
                {champData.skillsimg.map((ele, index) => (
                  <div className="detailSkills" key={index}>
                    <img
                      className="detailSkillsImg"
                      src={ele}
                      alt={champData.skills[index]}
                      key={champData.skills[index]}
                      onClick={() => {
                        handleSkillIndex(index);
                      }}
                    ></img>
                  </div>
                ))}
              </div>
              <div className="detailDesc">
                <ChampDescName>
                  {champData.skills[skillIndex].name}
                </ChampDescName>

                <ChampDescText className="detailDescEffect">
                  {champData.skills[skillIndex].description}
                </ChampDescText>
              </div>
            </section>
            <ChampSkillWeb
              className="champDetailWebm"
              src={champData.skillwebm[skillIndex]}
              width="370px"
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
