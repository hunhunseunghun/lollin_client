import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Div } from './MatchingInfoStyled';
import dotenv from 'dotenv';
dotenv.config();
function MatchingInfo() {
	let [matchData, setMatchData] = useState({});
	let [inputName, setInputName] = useState('');
	let [isSearched, setIsSearched] = useState(false);
	let blueTeam = [];
	let redTeam = [];
	let setDatas = (matchData) => {
		blueTeam = [];
		redTeam = [];
		setMatchData(matchData);
		matchData.participants.forEach((participant) => {
			if (participant.teamId === 100) {
				blueTeam.push(participant);
			} else {
				redTeam.push(participant);
			}
		});
		console.log('redTeam: ', redTeam);
		console.log('blueTeam: ', blueTeam);
	};
	let handleSearch = () => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/utils/search?name=${inputName}`)
			.then((response) => {
				console.log(response.data);
				console.log(response.status);
				setIsSearched(true);
				setDatas(response.data);
			})
			.catch((err) => {
				console.log('this is catch');
				axios
					.get(`${process.env.REACT_APP_SERVER_URL}/utils/featured`)
					.then((response) => {
						console.log(response.data);
						setIsSearched(false);
						setDatas(response.data);
					});
			});
	};
	useEffect(() => {
		handleSearch();
	}, []);
	return (
		<Div>
			<input
				type="text"
				value={inputName}
				onChange={(e) => {
					setInputName(e.target.value);
				}}
			></input>
			<button onClick={handleSearch}>search</button>
			{matchData.participants
				? matchData.participants.map((el) => {
						return (
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
								width={120}
								height={250}
							></img>
						);
				  })
				: ''}
			{isSearched ? (
				<div>The result of {inputName}</div>
			) : (
				<div>Showing featured game</div>
			)}
		</Div>
	);
}
//http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
export default MatchingInfo;
