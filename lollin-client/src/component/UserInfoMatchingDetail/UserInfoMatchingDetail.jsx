import React, { useState, useEffect } from 'react';
import img from 'react';
import { Container } from './UserInfoMatchingDetailStyled.jsx';
const axios = require('axios');
const MatchingDetail = ({ participant }) => {
	let [userData, setUserData] = useState(null);
	let [tier, setTier] = useState('');
	let [kda, setKda] = useState(0);
	let [rank, setRank] = useState('');
	let [isLoading, setIsLoading] = useState(null);
	useEffect(() => {
		if (participant) {
			setIsLoading(true);
			axios
				.get(
					`${process.env.REACT_APP_SERVER_URL}/utils/history?name=${participant.summonerName}`,
				)
				.then((response) => {
					let data = response.data;
					let tempKda = 0;
					setTier(
						data.league_solo === undefined ? 'UNRANKED' : data.league_solo.tier,
					);
					setRank(data.league_solo === undefined ? '' : data.league_solo.rank);
					if (data.matches) {
						data.matches.forEach((match) => {
							tempKda += match.kda;
						});
						tempKda = tempKda / data.matches.length;
						tempKda = Math.floor(tempKda * 100) / 100;
						setKda(tempKda);
					}
					setIsLoading(false);
					setUserData(data);
				})
				.catch((err) => {
					console.log(err);
					setIsLoading(false);
				});
		}
	}, [participant]);

	switch (isLoading) {
		case null: {
			return '';
		}
		case true: {
			return (
				<Container>
					<fieldset>
						{participant !== null ? <div>{participant.summonerName}</div> : ''}
						{'Loading...'}
						<button
							onClick={() => {
								setIsLoading(null);
							}}
						>
							close
						</button>
					</fieldset>
				</Container>
			);
		}
		case false: {
			return (
				<Container>
					<fieldset>
						{participant !== null ? <div>{participant.summonerName}</div> : ''}
						<div>
							<img
								src={require(`../../Images/tierIcons/${tier}.png`).default}
								width={'100'}
								height={'100'}
							/>
							{tier}
							{'   '}
							{rank}
							<div>{kda !== 0 ? kda : ''}</div>
						</div>
						<button
							onClick={() => {
								setIsLoading(null);
							}}
						>
							close
						</button>
					</fieldset>
				</Container>
			);
		}
	}
};

export default MatchingDetail;
