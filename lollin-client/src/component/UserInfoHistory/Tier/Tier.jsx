import React, { useState, useEffect } from 'react';
import { Container } from './TierStyled.jsx';

const Tier = ({ historyData }) => {
	//   const [soloData, setSoloData] = useState(historyData.league_solo);
	//   const [flexData, setFlexData] = useState(historyData.league_flex);
	//   console.log(historyData);
	//   console.log(soloData);

	const handleTierIcon = () => {};
	useEffect(() => {
		// setSoloData(historyData.league_solo);
		// setFlexData(historyData.league_flex);
	});
	return (
		<Container className="tierContainer">
			{/* <section className="soloWrapper">
        <div className="iconWrap">
          <img
            src={challangerIcon}
            alt={challangerIcon}
            className="tierIcon"
            width="120px"
          />{" "}
        </div>
        <div className="dataWrap">
          <div className="rankTag">솔로랭크</div>
          <div className="tierTag">
            {soloData.tier}
            {soloData.rank}
          </div>
          <div className="lpTag ">{soloData.leaguesPoints}</div>
          <div className="winloseTag">
            {soloData.wins}승/{soloData.losses}패
          </div>
        </div>
      </section>
      <section className="flexWrapper">
        <div className="iconWrap">
          <img
            src={challangerIcon}
            alt={challangerIcon}
            className="tierIcon"
            width="120px"
          />{" "}
        </div>
        <div className="dataWrap">
          <div className="rankTag">자유랭크</div>
          <div className="tierTag">
            {flexData.tier}
            {flexData.rank}
          </div>
          <div className="lpTag ">{flexData.leaguesPoints}</div>
          <div className="winloseTag">
            {soloData.wins}/{flexData.losses}
          </div>
        </div>
      </section> */}
		</Container>
	);
};

export default Tier;
