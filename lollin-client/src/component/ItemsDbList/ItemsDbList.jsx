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
    {
      id: 2,
      img: wardImg,
      desc: "사용 시 - 장신구: 누구나 볼 수 있고 쉽게 파괴 가능한 와드를 설치해 주변 지역을 드러냅니다. 최대 4000 유닛 범위까지 설치 가능하며 아군이 소환사 주문이나 스킬의 대상으로 지정할 수 없습니다. (재사용 대기시간 198~99초)",
    },
    {
      id: 3,
      img: wardImg,
      desc: "사용 시 - 장신구: 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫을 드러냅니다. 또한 적의 투명 와드를 드러내고 잠시 무력화시킵니다. (재사용 대기시간 90~60초)",
    },
    {
      id: 4,
      img: wardImg,
      desc: "클릭하여 사용: 10초에 걸쳐 체력 80과 마나 50을 회복합니다.",
    },
  ],
};

const ItemsDbList = ({ itemsData, apiVer }) => {
  // useEffect(() => {
  //   axios
  //     .get(`${server}/items/all`)
  //     .then((res) => {
  //       setItemsData(res);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // });

  console.log(itemsData);
  return (
    <ItemsList className="itemsList">
      {Array.isArray(itemsData)
        ? itemsData.map((ele) => (
            <ItemBox className="itemBox">
              <img
                className="itemImg"
                src={`http://ddragon.leagueoflegends.com/cdn/${apiVer}/img/item/${ele[0]}.png`}
                alt="no images"
              />
              <span className="itemDesc">
                {ele[1].description
                  .replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")
                  .split("\r\n")
                  .map((line) => {
                    return (
                      <span>
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
