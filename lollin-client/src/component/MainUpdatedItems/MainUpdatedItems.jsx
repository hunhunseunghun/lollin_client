import React, { useState, useEffect } from "react";
import axios from "axios";
import { UpdatedItems } from "./MainUpdatedItemsStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const MainUpdatedItems = ({ history }) => {
  const [newItemData, setNewItemData] = useState({
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
      .get(`${server}/items/patched2`)
      .then((res) => {
        setNewItemData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // const handleDetailsClick = () => {
  //   history.push("/items/all");
  // };

  const handleItemHtml = () => {
    return (
      <div className="wrapper">
        {" "}
        <div
          dangerouslySetInnerHTML={{
            __html: newItemData,
          }}
        ></div>
      </div>
    );
  };

  return (
    <UpdatedItems className="updatedItems">
      <div className="textContainer">
        <div className="desc">
          <div className="descTitle">업데이트 아이템</div>
        </div>
        <div className="titleWrap">- Updated items</div>
      </div>

      {handleItemHtml()}
      {/* <div className="itemsTitle">패치 적용된 아이템</div>
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
      <button onClick={handleDetailsClick}>Details</button> */}
    </UpdatedItems>
  );
};

export default MainUpdatedItems;
