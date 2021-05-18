import React, { useState, useEffect } from "react";
import axios from "axios";

const server = process.env.REACT_APP_SERVER_URL;

const MainUpdatedItems = ({ history }) => {
  const [newItemData, setItemData] = useState({
    items: [
      {
        id: "id",
        img: [],
        desc: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${server}/items/updateditems`).then((res) => {
      setItemData(res);
    });
  }, []);

  const handleDetailsClick = () => {
    history.push("/items");
  };

  return (
    <div className="updatedItems">
      {/* <div className="updatedItemsTitle">패치 적용된 아이템</div>
      <div className="itemDescribeSection">
        <img className="updatedItemsImg" src={newItemData.items.img[0]}></img>
        <div classNAme="updatedItmesDescription">
          {newItemData.items.desc[0]}
        </div>

        <img className="updatedItemsImg" src={newItemData.items.img[1]}></img>
        <div classNAme="updatedItmesDescription">
          {newItemData.items.desc[1]}
        </div>

        <img className="updatedItemsImg" src={newItemData.items.img[2]}></img>
        <div classNAme="updatedItmesDescription">
          {newItemData.items.desc[2]}
        </div>
      </div> */}
      <button onClick={handleDetailsClick}>Details</button>
    </div>
  );
};

export default MainUpdatedItems;
