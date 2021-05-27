import styled from "styled-components";

export const ChampDetailArea = styled.div`
  background-color: #001429;
`;

export const Wrap = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 1350px;
`;

export const RenderArea = styled.div`
  position: absolute;
  background-color: #000000a6;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  height: 100%;

  z-index: 3;
`;

export const BackImg = styled.img`
  position: absolute;
  width: 100%;
  max-height: 450px;
  margin-top: 20px;
  filter: blur(8px);
  border-bottom-right-radius: 300px;
  border-bottom-left-radius: 300px;
  z-index: 2;
`;
export const ChampName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 70px;
`;
export const ChampDetailImg = styled.img`
  position: relative;
  top: 40px;
  width: 80%;
  padding: 10px;
  max-width: 800px;
  min-width: 350px;
  min-height: 200px;
  border-bottom-right-radius: 70px;
  border-bottom-left-radius: 70px;
`;
// 1093 308
// 480 389

export const CahmpDetailName = styled.div`
  text-align: center;
  width: 50%;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border: 0.1rem solid #ffffff34;
  z-index: 20;
`;
export const SkillsArea = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2%;
  z-index: 20;

  section {
    display: grid;
    grid-template-rows: 1fr 3fr;
    place-items: center;
    border-left: 0.1rem solid #ffffff47;
    border-radius: 45px;
    width: 360px;
    padding: 3%;

    padding-right: 15%;
    margin-bottom: 3%;
    .detailSkill {
      display: flex;
    }
    .detailSkills {
      padding: 2%;

      &:hover {
      }
    }
    .detailSkillsImg {
      width: 52px;
      transform: scale(1);
      transition: transform 0.5s;
      &:hover {
        transition: transform 0.5s;
        transform: scale(0.9);
        cursor: pointer;
      }
    }
  }
`;

export const ChampSkillWeb = styled.video`
  padding: 3%;
  min-width: 350px;
  max-width: 700px;
  border-radius: 60px;
`;

export const ChampDescName = styled.div`
  padding-left: 3%;
  color: #f8b600;
  font-size: 1rem;
`;

export const ChampDescText = styled.div`
  padding-left: 3%;
  color: white;
  font-size: 0.9rem;
`;

export const ChampTipsArea = styled.div`
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin-bottom: 5%;
  width: 500px;
  border: 0.1rem dashed #f8b60052;
  font-size: 0.9rem;
  color: #f8b600;
  margin-left: 2%;
`;
export const ChampAllytips = styled.div`
  font-size: 0.7rem;
  color: white;
`;

export const ChampEnemytips = styled.div`
  font-size: 0.7rem;
  color: white;
`;