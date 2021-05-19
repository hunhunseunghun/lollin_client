import React, { useState, useEffect } from "react";
import axios from "axios";
import { ItemsFilter, CheckBoxArea } from "./ItemsDbFilterStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const ItemsDbFilter = () => {
  return (
    <ItemsFilter className="itemsFliter">
      <CheckBoxArea className="filterBox">
        <span className="filterText">물리 공격</span>
        <div>
          <input type="checkbox" className="phsyAttack" />
          <label for="offensePower">공격력</label>
        </div>
        <div>
          <input type="checkbox" className="phsyAttack" />
          <label for="offensePower">치명타</label>
        </div>
        <div>
          <input type="checkbox" className="phsyAttack" />
          <label for="offensePower">공격속도</label>
        </div>
        <div>
          <input type="checkbox" className="phsyAttack" />
          <label for="offensePower">생명력 흡수</label>
        </div>
        <div>
          <input type="checkbox" className="phsyAttack" />
          <label for="offensePower">방어구 관통</label>
        </div>
      </CheckBoxArea>
      <CheckBoxArea className="filterBox">
        <span className="filterText">주문력</span>
        <div>
          <input type="checkbox" className="magicAttack" />
          <label for="magicAttack">스킬 가속</label>
        </div>
        <div>
          <input type="checkbox" className="magicAttack" />
          <label for="magicAttack">주문 흡혈</label>
        </div>
        <div>
          <input type="checkbox" className="magicAttack" />
          <label for="magicAttack">마나</label>
        </div>
        <div>
          <input type="checkbox" className="magicAttack" />
          <label for="magicAttack">마나 회복</label>
        </div>
        <div>
          <input type="checkbox" className="magicAttack" />
          <label for="magicAttack">마법 관통</label>
        </div>
      </CheckBoxArea>

      <CheckBoxArea className="filterBox">
        <span className="filterText">방어</span>
        <div>
          <input type="checkbox" className="defense" />
          <label for="defense">체력</label>
        </div>
        <div>
          <input type="checkbox" className="defense" />
          <label for="defense">방어력</label>
        </div>
        <div>
          <input type="checkbox" className="defense" />
          <label for="defense">마법 저항력</label>
        </div>
        <div>
          <input type="checkbox" className="defense" />
          <label for="defense">체력 회복</label>
        </div>
        <div>
          <input type="checkbox" className="defense" />
          <label for="defense">강인함</label>
        </div>
      </CheckBoxArea>
      <CheckBoxArea className="filterBox">
        <span className="filterText">기타</span>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">신발</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">이동 속도</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">소모품</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">사용 아이템</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">은신 감지</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">오오라</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">느려짐</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">골드획득</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">시야</label>
        </div>
        <div>
          <input type="checkbox" className="etcItems" />
          <label for="etcItems">장신구</label>
        </div>
      </CheckBoxArea>
    </ItemsFilter>
  );
};

export default ItemsDbFilter;
