import React, { useState, useEffect } from "react";
import axios from "axios";

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
  //   axios.get(`${server}/champions/detail?id=${champPriId}`).then((res) => {
  //     setChampData(res);
  //   });
  // }, []);

  return (
    <div className="champDetail">
      {champPriId}
      <div className="champDetailNameArea">
        <span className="champDetailName">{champData.champion.id}</span>
      </div>
      <img className="champDetailImg" src={champData.champion.img}></img>
      <section className="champDetailSkills">
        {champData.champion.skillsimg.map((ele, index) => (
          <div className="skillsBox" key={index}>
            <img
              className="champDetailSkills"
              src={ele}
              alt={champData.champion.skills[index]}
              key={champData.champion.skills[index]}
            ></img>
            <label>{champData.champion.skills[index]}</label>
          </div>
        ))}
      </section>
      <video
        className="champDetailWebm"
        src={champData.champion.skillwebm}
        width="500px"
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default ChampDetail;
