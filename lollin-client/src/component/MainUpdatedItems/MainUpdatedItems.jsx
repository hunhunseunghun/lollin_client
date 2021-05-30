import React, { useState, useEffect } from "react";
import axios from "axios";
import { UpdatedItems } from "./MainUpdatedItemsStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const MainUpdatedItems = ({ history }) => {
  const [newItemData, setItemData] = useState({
    items: [
      {
        id: "장화",
        img: "https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/1001.png",

        desc: "이동 속도가 약간 증가합니다.",
      },
      {
        id: "장화",
        img: "https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/1001.png",

        desc: "이동 속도가 약간 증가합니다.",
      },
      {
        id: "장화",
        img: "https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/1001.png",

        desc: "이동 속도가 약간 증가합니다.",
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`${server}/items/updateditems`)
      .then((res) => {
        setItemData(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleDetailsClick = () => {
    history.push("/items/all");
  };

  return (
    <UpdatedItems className="updatedItems">
      <div className="itemsTitle">패치 적용된 아이템</div>
      <div className="itemsImgArea">
        {newItemData.items.map((ele) => (
          <img className="itemsImg" src={ele.img} alt="no images" />
        ))}
      </div>
      <div className="itemsDescArea">
        {newItemData.items.map((ele) => (
          <div className="itmesDesc">{ele.desc}</div>
        ))}
      </div>
      <button onClick={handleDetailsClick}>Details</button>
    </UpdatedItems>
  );
};

export default MainUpdatedItems;
