import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsDbList from "../../component/ItemsDbList/ItemsDbList.jsx";
import ItemsDbFilter from "../../component/ItemsDbFilter/ItemsDbFilter.jsx";
import { Items, ItemBox, ItemsList } from "./ItemsDbStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const ItemsDB = () => {
  const [apiVer, setApiVer] = useState("");
  const [itemsData, setItemsData] = useState([
    [1001, { name: "장화", description: "이동속도", image: "1001.png" }],
  ]);

  useEffect(() => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        setApiVer(res.data[0]);
        return axios.get(
          `http://ddragon.leagueoflegends.com/cdn/${res.data[0]}/data/ko_KR/item.json`
        );
      })
      .catch((err) => {
        throw err;
      })
      .then((res) => {
        // setItemsData(Object.values(res.data.data));
        setItemsData(Object.entries(res.data.data));
      });
  }, []);
  return (
    <Items className="itemsDB">
      <ItemsDbFilter />
      <ItemsDbList itemsData={itemsData} apiVer={apiVer} />
    </Items>
  );
};

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

export default ItemsDB;
