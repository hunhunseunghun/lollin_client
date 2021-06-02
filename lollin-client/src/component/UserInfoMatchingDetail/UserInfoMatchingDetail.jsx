import React, { useState, useEffect } from 'react';
import img from 'react';
import { Container } from './UserInfoMatchingDetailStyled.jsx';
const axios = require('axios');
const MatchingDetail = ({ participant }) => {
	let [userData, setUserData] = useState({});
	let [tier, setTier] = useState('');
	let [kda, setKda] = useState(0);
	let [rank, setRank] = useState('');
	let [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		console.log('this called once when component start');
		setIsLoading(true);
		axios
			.get(
				`${process.env.REACT_APP_SERVER_URL}/utils/history?name=${participant.summonerName}`,
			)
			.then((response) => {
				let data = response.data;
				let tempKda = 0;
				console.log('response.data: ');
				console.log(data);
				setUserData(data);
				setTier(data.league_solo.tier);
				setRank(data.league_solo.rank);
				data.matches.forEach((match) => {
					tempKda += match.kda;
				});
				tempKda = tempKda / data.matches.length;
				console.log('tempKda before Math.floor: ');
				console.log(tempKda);
				tempKda = Math.floor(tempKda * 100) / 100;
				console.log('tempKda after Math.floor: ', tempKda);
				setKda(tempKda);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [participant]);
	// useEffect(() => {
	// 	if (userData.league_solo) {
	// 		console.log(userData);
	// 		setTier(userData.league_solo.tier);
	// 	}
	// }, [userData]);
	return (
		<Container>
			{participant.summonerName !== undefined ? (
				<fieldset>
					<span>{participant.summonerName}</span>
					<div>
						{isLoading ? (
							'Loading...'
						) : (
							<img
								src={require(`../../Images/tierIcons/${tier}.png`).default}
								width={'100'}
								height={'100'}
							/>
						)}

						{tier}
						{'   '}
						{rank}
					</div>
					<div>{kda !== 0 ? kda : ''}</div>
				</fieldset>
			) : (
				''
			)}
		</Container>
	);
};

export default MatchingDetail;
