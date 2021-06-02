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
	console.log('participant before useEffect: ', participant);
	useEffect(() => {
		console.log('participant: ');
		console.log(participant);
		if (participant) {
			setIsLoading(true);
			console.log('participant name: ');
			console.log(participant.summonerName);
			axios
				.get(
					`${
						process.env.REACT_APP_SERVER_URL
					}/utils/history?name=${'미키주일'}`,
				)
				.then((response) => {
					let data = response.data;
					let tempKda = 0;
					console.log('data: ');
					console.log(data);
					setTier(
						data.league_solo === undefined ? 'UNRANKED' : data.league_solo.tier,
					);
					setRank(data.league_solo === undefined ? '' : data.league_solo.rank);
					if (data.matches) {
						data.matches.forEach((match) => {
							tempKda += match.kda;
						});
						tempKda = tempKda / data.matches.length;
						console.log('tempKda before Math.floor: ');
						console.log(tempKda);
						tempKda = Math.floor(tempKda * 100) / 100;
						console.log('tempKda after Math.floor: ', tempKda);
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
	// useEffect(() => {
	// 	if (userData.league_solo) {
	// 		console.log(userData);
	// 		setTier(userData.league_solo.tier);
	// 	}
	// }, [userData]);
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
