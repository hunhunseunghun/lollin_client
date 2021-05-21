import React, { useState, useEffect } from "react";
import "./ChampDbList.css";

const ChampDbList = ({ champData, searchText }) => {
  const nameData = [];
  let finalData = [];

  const hanldeNameData = () => {
    for (let i = 0; i < champData.length; i++) {
      let result = [];
      result.push(
        champData[i][0].toLowerCase() + " " + champData[i][1].name,
        champData[i][1]
      );
      nameData.push(result);
    }
  };
  hanldeNameData();

  const handleFianlData = () => {
    if (searchText === "") {
      finalData = [...nameData];
    } else {
      for (let i = 0; i < nameData.length; i++) {
        if (nameData[i][0].indexOf(searchText) !== -1) {
          finalData.push(nameData[i]);
        }
      }
    }
  };
  handleFianlData();

  useEffect(() => {}, []);

  return (
    <div className="champDbListArea">
      {Array.isArray(champData)
        ? finalData.map((ele, index) => (
            <section className="champDbListBox" key={ele[1].id}>
              <img
                className="champImg"
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${ele[1].id}_0.jpg`}
                alt="no images"
                key={ele[1].image.full}
              />
              <div className="champNameTag" key={ele[1].name}>
                {" "}
                {ele[1].name}
              </div>
            </section>
          ))
        : "no data"}
    </div>
  );
};

export default ChampDbList;
