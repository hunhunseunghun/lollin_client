import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UpdatedItems } from './MainUpdatedItemsStyled.jsx';

const server = process.env.REACT_APP_SERVER_URL;

const MainUpdatedItems = ({ history }) => {
  const [newItemData, setNewItemData] = useState({
    items: [
      {
        id: '장화',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/1001.png',

        desc: '이동 속도가 약간 증가합니다.',
      },
      {
        id: '장화',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/1001.png',

        desc: '이동 속도가 약간 증가합니다.',
      },
      {
        id: '장화',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/1001.png',

        desc: '이동 속도가 약간 증가합니다.',
      },
    ],
  });
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  const fetchingNewItem = async () => {
    try {
      const newItems = await axios.get(`${server}/items/patched2`);
      setNewItemData(newItems.data);
      setIsDataUpdated(true);
    } catch (err) {
      setIsDataUpdated(false);
    }
  };

  useEffect(() => {
    fetchingNewItem();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${server}/items/patched2`)
  //     .then((res) => {
  //       setNewItemData(res.data);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }, []);

  const handleItemHtml = () => {
    return (
      <div className="wrapper">
        {' '}
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

      {isDataUpdated ? (
        handleItemHtml()
      ) : (
        <div className="wrapper">
          {' '}
          <div>업데이트 아이템 데이터 준비중...</div>
        </div>
      )}
    </UpdatedItems>
  );
};

export default MainUpdatedItems;
