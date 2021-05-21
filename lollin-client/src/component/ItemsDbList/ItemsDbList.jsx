import React, { useState, useEffect } from "react";
import axios from "axios";
import { ItemBox, ItemsList } from "./ItemsDbListStyled.jsx";
import wardImg from "../../Images/ward.png";

const server = process.env.REACT_APP_SERVER_URL;
const fakeData = {
  items: [
    {
      id: 1,
      img: wardImg,
      desc: "사용 시 - 장신구: 아군 모두에게 90~120초 동안 주변 지역을 밝혀 주는 투명 와드 하나를 지면에 설치합니다. 투명 와드는 최대 2개까지 보유할 수 있으며 240~120초마다 하나씩 생성됩니다.",
    },
  ],
};

const ItemsDbList = ({ itemsData, apiVer, sortTags, itemName }) => {
  const copyTags = [...sortTags];
  const sortData = [];
  const renderData = [];
  let finalData = [];
  const resultArr = itemsData.map(
    (ele) =>
      copyTags.map((el) => ele[1].tags.includes(el)).includes(false) === true
  );

  const handleSortData = () => {
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] === false) {
        sortData.push(i);
      }
    }
  };
  handleSortData();

  const handleRenderData = () => {
    for (let i = 0; i < sortData.length; i++) {
      renderData.push(itemsData[sortData[i]]);
    }
  };
  handleRenderData();

  const handleFinalData = () => {
    if (itemName === "") {
      finalData = [...renderData];
    } else {
      for (let i = 0; i < renderData.length; i++) {
        if (
          renderData[i][1].description
            .replace(/[A-za-z]|[<>/]/g, "")
            .replace(/(\s*)/g, "")
            .indexOf(itemName) !== -1 ||
          renderData[i][1].name.replace(/(\s*)/g, "").indexOf(itemName) !== -1
        ) {
          finalData.push(renderData[i]);
        }
      }
    }
  };
  handleFinalData();

  console.log(finalData);
  return (
    <ItemsList className="itemsList">
      {Array.isArray(itemsData)
        ? finalData.map((ele, index) => (
            <ItemBox className="itemBox" key={index}>
              <img
                className="itemImg"
                src={`https://ddragon.leagueoflegends.com/cdn/${apiVer}/img/item/${ele[0]}.png`}
                alt="no images"
                key={ele[1].image.full}
              />
              <span className="itemDesc" key={ele[0]}>
                {ele[1].description
                  .replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")
                  .split("\r\n")
                  .map((line, inx) => {
                    return (
                      <span key={inx}>
                        {line.replace(/[A-za-z]|[<>/]/g, "")}
                        <br />
                      </span>
                    );
                  })}
              </span>
            </ItemBox>
          ))
        : "no data"}
    </ItemsList>
  );
};

export default ItemsDbList;
