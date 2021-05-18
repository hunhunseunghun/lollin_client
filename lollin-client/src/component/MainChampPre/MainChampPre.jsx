import React from "react";
import "./MainChampPre.css";

const MainChampPre = ({ history }) => {
  return (
    <div className="champPre">
      <div
        className="champPreLotaImg"
        onClick={() => {
          history.push("/champions/all");
        }}
      >
        {" "}
        챔피언 로테이션 이미지
      </div>
      <div className="champPreText">메뉴 유도 문구</div>
    </div>
  );
};

export default MainChampPre;
