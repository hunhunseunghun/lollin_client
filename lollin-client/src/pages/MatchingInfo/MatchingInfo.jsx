import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Div } from './MatchingInfoStyled';
import dotenv from 'dotenv';
dotenv.config();
function MatchingInfo() {
	let tempInput = '';
	let [matchData, setMatchData] = useState({});
	let [inputName, setInputName] = useState('');
	let handleSearch = () => {
		console.log(process.env.REACT_APP_SERVER_URL);
		axios
			.get(`https://lollinserver.link/utils/search?name=${inputName}`)
			.then((response) => {
				console.log(response.data);
				console.log(response.status);
			})
			.catch((err) => {
				console.log('this is catch');
				axios
					.get(`https://lollinserver.link/utils/featured`)
					.then((response) => {
						console.log(response.data);
						setMatchData(response.data);
					});
			});
	};
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
						console.log(el);
						return (
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
								width={80}
								height={250}
							></img>
						);
				  })
				: ''}
		</Div>
	);
}
//http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
export default MatchingInfo;
