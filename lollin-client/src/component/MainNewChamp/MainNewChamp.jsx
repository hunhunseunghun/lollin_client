import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewChamp, SkillsDesc, SkillsImg } from "./MainNewChampStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const MainNewChamp = () => {
  const [newChampData, setNewChampData] = useState({
    champion: {
      id: null,
      img: null,
      skills: [],
      skillsimg: [],
      skillwebm: [],
    },
  });

  useEffect(() => {
    axios.get(`${server}/champions/updatedchampion`).then((res) => {
      setNewChampData(res);
    });
  }, []);

  return (
    <NewChamp className="newChamp">
      <img
        className="ncImg"
        width="70%"
        src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg"
        alt="no images"
      ></img>

      <SkillsDesc className="ncSkilsDesc">
        <SkillsImg className="ncSkills">
          {/* {newChampData.skillsimg.map((ele) => (
            <img className="ncSkillsImg" src={ele} />
          ))} */}
        </SkillsImg>

        <video width="80%" height="80%" muted autoPlay loop>
          <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_Q1.webm"></source>
          No Source
        </video>
      </SkillsDesc>
    </NewChamp>
  );
};

export default MainNewChamp;
