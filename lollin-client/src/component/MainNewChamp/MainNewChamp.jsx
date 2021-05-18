import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainNewChamp.css";

const server = process.env.REACT_APP_SERVER_URL;

const MainNewChamp = () => {
  const [newChampData, setNewChampData] = useState({
    champion: {
      id: "id",
      img: "img",
      skills: ["skill"],
      skillsimg: ["passive", "q", "w", "e", "r"],
      skillwebm: ["webm"],
    },
  });

  useEffect(() => {
    axios.get(`${server}/champions/updatedchampion`).then((res) => {
      setNewChampData(res);
    });
  }, []);
  return (
    <div className="newChamp">
      new champ area
      {/* <img className="newChampImg">{newChampData.champion.img}</img>
      <div className="newChampSkills">
        {" "}
        newChampSkills
        <img className="skillPassive">{newChampData.champion.skillsimg[0]}</img>
        <img className="skillQ">{newChampData.champion.skillsimg[1]}</img>
        <img className="skillW">{newChampData.champion.skillsimg[2]}</img>
        <img className="skillE">{newChampData.champion.skillsimg[3]}</img>
        <img className="skillR">{newChampData.champion.skillsimg[4]}</img>\
      </div>
      <video>{newChampData.champion.skillwebm}</video> */}
    </div>
  );
};

export default MainNewChamp;
