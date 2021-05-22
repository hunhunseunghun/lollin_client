import React, { useState } from "react";
import ItemsSearchBox from "./ItemsSearchBox/ItemsSearchBox.jsx";

import { ItemsFilter, CheckBoxArea } from "./ItemsDbFilterStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const ItemsDbFilter = ({
  itemsData,
  handleSortTags,
  handleItemSearchValue,
}) => {
  const dummyData = [...itemsData];
  const filterArr = [];

  dummyData.map((ele) => {
    for (let i = 0; i < ele[1].tags.length; i++) {
      if (filterArr.indexOf(ele[1].tags[i]) === -1) {
        filterArr.push(ele[1].tags[i]);
      }
    }
  });

  // console.log(filterArr);
  return (
    <ItemsFilter className="itemsFliter">
      <CheckBoxArea className="filterBox">
        {/* {filterArr.map((value, index) => (
          <div key={index}>
            <span>{value}</span>
            <input type="checkbox" value={value} />
          </div>
        ))} */}
        <span className="filterText">물리 공격</span>
        <div>
          <input
            type="checkbox"
            className="phsyAttack"
            onChange={(e) => handleSortTags(e.target.checked, "Damage", 0)}
          />
          <label htmlFor="phsyAttack">공격력</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="phsyAttack"
            onChange={(e) =>
              handleSortTags(e.target.checked, "CriticalStrike", 2)
            }
          />
          <label htmlFor="offensePower">치명타</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="phsyAttack"
            onChange={(e) => handleSortTags(e.target.checked, "AttackSpeed", 3)}
          />
          <label htmlFor="offensePower">공격속도</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="phsyAttack"
            onChange={(e) => handleSortTags(e.target.checked, "LifeSteal", 4)}
          />
          <label htmlFor="offensePower">생명력 흡수</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="phsyAttack"
            onChange={(e) =>
              handleSortTags(e.target.checked, "ArmorPenetration", 5)
            }
          />
          <label htmlFor="offensePower">방어구 관통</label>
        </div>
      </CheckBoxArea>
      <CheckBoxArea className="filterBox">
        <span className="filterText">주문력</span>
        <div>
          <input
            type="checkbox"
            className="magicAttack"
            onChange={(e) =>
              handleSortTags(e.target.checked, "AbilityHaste", 6)
            }
          />
          <label htmlFor="magicAttack">스킬 가속</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="magicAttack"
            onChange={(e) => handleSortTags(e.target.checked, "SpellVamp", 7)}
          />
          <label htmlFor="magicAttack">주문 흡혈</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="magicAttack"
            onChange={(e) => handleSortTags(e.target.checked, "Mana", 8)}
          />
          <label htmlFor="magicAttack">마나</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="magicAttack"
            onChange={(e) => handleSortTags(e.target.checked, "ManaRegen", 9)}
          />
          <label htmlFor="magicAttack">마나 회복</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="magicAttack"
            onChange={(e) =>
              handleSortTags(e.target.checked, "MagicPenetration", 10)
            }
          />
          <label htmlFor="magicAttack">마법 관통</label>
        </div>
      </CheckBoxArea>

      <CheckBoxArea className="filterBox">
        <span className="filterText">방어</span>
        <div>
          <input
            type="checkbox"
            className="defense"
            onChange={(e) => handleSortTags(e.target.checked, "Health", 11)}
          />
          <label htmlFor="defense">체력</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="defense"
            onChange={(e) => handleSortTags(e.target.checked, "Armor", 12)}
          />
          <label htmlFor="defense">방어력</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="defense"
            onChange={(e) => handleSortTags(e.target.checked, "SpellBlock", 13)}
          />
          <label htmlFor="defense">마법 저항력</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="defense"
            onChange={(e) =>
              handleSortTags(e.target.checked, "HealthRegen", 14)
            }
          />
          <label htmlFor="defense">체력 회복</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="defense"
            onChange={(e) => handleSortTags(e.target.checked, "Tenacity", 15)}
          />
          <label htmlFor="defense">강인함</label>
        </div>
      </CheckBoxArea>
      <CheckBoxArea className="filterBox">
        <span className="filterText">기타</span>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Boots", 16)}
          />
          <label htmlFor="etcItems">신발</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) =>
              handleSortTags(e.target.checked, "NonbootsMovement", 17)
            }
          />
          <label htmlFor="etcItems">이동 속도</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Consumable", 18)}
          />
          <label htmlFor="etcItems">소모품</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Active", 19)}
          />
          <label htmlFor="etcItems">사용 아이템</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Vision", 20)}
          />
          <label htmlFor="etcItems">은신 감지</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Aura", 21)}
          />
          <label htmlFor="etcItems">오오라</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Slow", 22)}
          />
          <label htmlFor="etcItems">느려짐</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "GoldPer", 23)}
          />
          <label htmlFor="etcItems">골드획득</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Vision", 24)}
          />
          <label htmlFor="etcItems">시야</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="etcItems"
            onChange={(e) => handleSortTags(e.target.checked, "Trinket", 25)}
          />
          <label htmlFor="etcItems">장신구</label>
        </div>
      </CheckBoxArea>
      <ItemsSearchBox handleItemSearchValue={handleItemSearchValue} />
    </ItemsFilter>
  );
};

export default ItemsDbFilter;
